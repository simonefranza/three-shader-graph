import {Emitter} from "mitt";
import { Layers } from "three";
import {Events, PointerPosition} from "../Manager";

enum Layout {
  Adjacent,
  Stacked
}

export class ViewManager {
  emitter: Emitter<Events>;

  containerElement : HTMLElement;

  svgElement: HTMLElement;

  canvasElement: HTMLElement;

  dividerElement: HTMLElement;

  layout : Layout;

  dividerInitialPosition : PointerPosition;

  dividerMoveHandler : (e : PointerEvent) => void;

  dividerUpHandler : () => void;

  constructor(emitter : Emitter<Events>,
      containerElement : HTMLElement,
      svgElement : HTMLElement,
      canvasElement :HTMLElement,
      dividerElement : HTMLElement) {
    this.emitter = emitter;
    this.containerElement = containerElement;
    this.svgElement = svgElement;
    this.canvasElement = canvasElement;
    this.dividerElement = dividerElement;
    this.layout = Layout.Adjacent;
    this.dividerMoveHandler = (e : PointerEvent) => this.handleDividerPointerMove(e);
    this.dividerUpHandler = () => this.handleDividerPointerUp();
    this.dividerInitialPosition = {x : 0, y : 0};
    this.dividerElement.addEventListener(
      "pointerdown",
      (e : PointerEvent) => this.handleDividerPointerDown(e)
    );
    this.emitter.on("rotateView", () => this.rotateView());
  }

  handleDividerPointerDown(e : PointerEvent) {
    addEventListener("pointermove", this.dividerMoveHandler);
    addEventListener("pointerup", this.dividerUpHandler);
    this.dividerInitialPosition.x = e.clientX / innerWidth * 100.5;
    this.dividerInitialPosition.y = e.clientY / innerHeight * 100.5;
    this.canvasElement.style.width = "0";
    this.canvasElement.style.height = "0";
    this.canvasElement.style.minWidth = "1px";
    this.canvasElement.style.minHeight = "1px";
    this.canvasElement.removeAttribute("height");
    this.canvasElement.removeAttribute("width");
  }

  handleDividerPointerMove(e : PointerEvent) {
    if (this.layout === Layout.Adjacent) {
      const posX = e.clientX / innerWidth * 100;
      this.containerElement.style.gridTemplateColumns = `${posX}fr 5px ${100 - posX}fr`;
    } else if (this.layout === Layout.Stacked) {
      const posY = e.clientY / innerHeight * 100;
      this.containerElement.style.gridTemplateRows = `${posY}fr 5px ${100 - posY}fr`;
    } else {
      throw "[ViewManager] Layout type is unknown: " + this.layout;
    }

    this.emitter.emit("resizeGraph");
  }

  handleDividerPointerUp() {
    removeEventListener("pointermove", this.dividerMoveHandler);
    removeEventListener("pointerup", this.dividerUpHandler);
    this.emitter.emit("resizeCanvas");
    this.emitter.emit("resizeGraph");
  }

  rotateView() {
    if (this.layout === Layout.Adjacent) {
      this.containerElement.style.gridTemplateRows = "30fr 5px 70fr";
      this.containerElement.style.gridTemplateColumns = "1fr";
      this.containerElement.style.gridTemplateAreas = "'canvas' 'divider' 'svg'";
      this.dividerElement.style.cursor = "row-resize";
      this.layout = Layout.Stacked;
    } else if (this.layout === Layout.Stacked) {
      this.containerElement.style.gridTemplateColumns = "";
      this.containerElement.style.gridTemplateRows = "";
      this.containerElement.style.gridTemplateAreas = "";
      this.dividerElement.style.cursor = "";
      this.layout = Layout.Adjacent;
    } else {
      throw "[ViewManager] Layout type is unknown: " + this.layout;
    }
    this.emitter.emit("resizeCanvas");
    this.emitter.emit("resizeGraph");
  }
}
