import { Emitter } from "mitt";
import { Events, PointerPosition } from "../Manager";
import * as Utils from "./utils";

enum State {
  Initial,
  Zoom,
  Pan,
}

export class ZoomPanManager {
  canvas : SVGForeignObjectElement;

  widthPx: number;

  widthUnits : number;

  heightPx: number;

  heightUnits : number;

  emitter : Emitter<Events>;

  pointerPos : PointerPosition;

  state : State;

  wheelHandler : (e : WheelEvent) => void;

  resetStateTimeout : number | null;

  constructor(canvas : SVGForeignObjectElement, emitter : Emitter<Events>) {
    this.canvas = canvas;
    const bounding = this.canvas.getBoundingClientRect();
    this.widthPx = bounding.width;
    this.widthUnits = bounding.width;
    this.heightPx = bounding.height;
    this.heightUnits = bounding.height;
    this.emitter = emitter;
    this.state = State.Initial;

    this.pointerPos = {x : 0, y : 0};
    const pointerPositionHandler = (e: PointerPosition) => this.handlePointerPosition(e);
    this.emitter.on("pointerMoved", pointerPositionHandler);

    this.wheelHandler = (e : WheelEvent) => this.handleWheelInitial(e);
    this.canvas.addEventListener("wheel", this.wheelHandler);
    this.resetStateTimeout = null;
    this.emitter.on("resizeGraph", () => {
      const bounding = this.canvas.getBoundingClientRect();
      const viewBox = this.canvas.getAttribute("viewBox");
      if (viewBox === null) {
        throw "[ZoomPanManager::handleResize] viewBox is null";
      }
      const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
      //const viewBoxLeftOld = viewBoxSplit[0];
      const widthUnitsOld = this.widthUnits;
      const heightUnitsOld = this.heightUnits;
      this.widthUnits *= (bounding.width / this.widthPx);
      this.heightUnits *= (bounding.height / this.heightPx);
      const noWidthDiff = Math.abs(widthUnitsOld - this.widthUnits) < 0.0000001;
      const noHeightDiff = Math.abs(heightUnitsOld - this.heightUnits) < 0.0000001;
      if (noWidthDiff && !noHeightDiff) {
        // Height resize
        const viewBoxTopOld = viewBoxSplit[1];
        const viewBoxHeightOld = viewBoxSplit[3];
        const viewBoxBottomOld = viewBoxTopOld + viewBoxHeightOld;
        viewBoxSplit[1] = viewBoxBottomOld - this.heightUnits;
      }
      viewBoxSplit[2] = this.widthUnits;
      viewBoxSplit[3] = this.heightUnits;
      this.canvas.setAttribute("viewBox", viewBoxSplit.join(" "));
      this.widthPx = bounding.width;
      this.heightPx = bounding.height;
    });
  }

  handlePointerPosition(pos: PointerPosition) {
    this.pointerPos.x = pos.x;
    this.pointerPos.y = pos.y;
  }

  handleWheelInitial(e : WheelEvent) {
    this.canvas.removeEventListener("wheel", this.wheelHandler);
    console.log(e.deltaX, e.deltaY);
    if (Math.abs(e.deltaX) < 0.01 && Math.abs(e.deltaY) !== 2) {
      // Zoom
      this.state = State.Zoom;
      this.wheelHandler = (e : WheelEvent) => this.handleWheelZoom(e);
      this.canvas.addEventListener("wheel", this.wheelHandler);
    } else {
      //Panning
      this.state = State.Pan;
      this.wheelHandler = (e : WheelEvent) => this.handleWheelPan(e);
      this.canvas.addEventListener("wheel", this.wheelHandler);
    }
    this.wheelHandler(e);
  }

  handleWheelZoom(e  : WheelEvent) {
    e.preventDefault();
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[ShaderGraphRenderer] No viewBox";
    }
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    const bounding = this.canvas.getBoundingClientRect();
    const positions = Utils.convertPixelToUnit(
      viewBoxSplit,
      bounding,
      this.pointerPos.x,
      this.pointerPos.y
    );
    const centerX = positions[0];
    const centerY = positions[1];
    const factor = 0.01;
    // Move mouse position to origin
    viewBoxSplit[0] -= centerX;
    viewBoxSplit[1] -= centerY;

    // Scale
    viewBoxSplit[0] *= 1 + e.deltaY * factor;
    viewBoxSplit[1] *= 1 + e.deltaY * factor;
    viewBoxSplit[2] *= 1 + e.deltaY * factor;
    viewBoxSplit[3] *= 1 + e.deltaY * factor;

    // Move origin to mouse position
    viewBoxSplit[0] += centerX;
    viewBoxSplit[1] += centerY;

    this.widthUnits = viewBoxSplit[2];
    this.heightUnits = viewBoxSplit[3];

    this.canvas.setAttribute("viewBox", viewBoxSplit.join(" "));
    this.checkTimeout();
    //this.emitter.emit("repositionLinks");
  }

  handleWheelPan(e  : WheelEvent) {
    e.preventDefault();
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[ShaderGraphRenderer::handleWheelPan] No viewBox";
    }
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    viewBoxSplit[0] += e.deltaX;
    viewBoxSplit[1] += e.deltaY;

    this.canvas.setAttribute("viewBox", viewBoxSplit.join(" "));
    this.checkTimeout();
    //this.emitter.emit("repositionLinks");
  }

  checkTimeout() {
    if (this.resetStateTimeout !== null) {
      clearTimeout(this.resetStateTimeout);
      this.resetStateTimeout = null;
    }
    this.resetStateTimeout = setTimeout(() => {
      this.state = State.Initial;
      this.canvas.removeEventListener("wheel", this.wheelHandler);
      this.wheelHandler = (e : WheelEvent) => this.handleWheelInitial(e);
      this.canvas.addEventListener("wheel", this.wheelHandler);
      this.resetStateTimeout = null;
      console.log("Reset state");
    }, 150);
  }
}
