import {Emitter} from "mitt";
import {Events, PointerPosition} from "../Manager";

enum Layout {
  Vertical,
  Horizontal
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
    this.layout = Layout.Vertical;
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
    this.canvasElement.style.width = "";
    this.canvasElement.style.height = "";
  }

  handleDividerPointerMove(e : PointerEvent) {
    const posX = e.clientX / innerWidth * 100;
    this.containerElement.style.gridTemplateColumns = `${posX}fr 5px ${100 - posX}fr`;
    this.emitter.emit("resizeGraph");
  }

  handleDividerPointerUp() {
    removeEventListener("pointermove", this.dividerMoveHandler);
    removeEventListener("pointerup", this.dividerUpHandler);
    this.emitter.emit("resizeCanvas");
    this.emitter.emit("resizeGraph");
  }

  rotateView() {
    this.containerElement.style.gridTemplateAreas = "'canvas' 'divider' 'svg'";
    this.containerElement.style.gridTemplateRows = "30fr 5px 70fr";
    this.containerElement.style.gridTemplateColumns = "1fr";
    this.layout = Layout.Horizontal;
    this.emitter.emit("resizeCanvas");
    this.emitter.emit("resizeGraph");
  }
}
