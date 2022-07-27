/*
 * Class: ViewManager
 *
 * This class is responsible to rotate the view when Shift + W is entered,
 * as well as handling the resize, when dragging the divider
 *
 */

import {Emitter} from "mitt";
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

  dividerWidth: number;

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
    this.dividerWidth = 8;
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
    const graphWidth = e.clientX - this.dividerWidth / 2;
    const graphHeight = innerHeight - e.clientY - this.dividerWidth / 2;
    switch (this.layout) {
    case Layout.Adjacent:
      if (graphWidth > 10) {
        this.containerElement.style.gridTemplateColumns =
          `${graphWidth}px ${this.dividerWidth}px ` +
              `${innerWidth - e.clientX - this.dividerWidth / 2}fr`;
      }
      break;
    case Layout.Stacked:
      if (graphHeight > 10) {
        this.containerElement.style.gridTemplateRows =
          `26px ${e.clientY - 26 - this.dividerWidth / 2}px ${this.dividerWidth}px ` +
              `${graphHeight}px`;
      }
      break;
    default:
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
      this.containerElement.style.gridTemplateRows = `26px 30fr ${this.dividerWidth}px 70fr`;
      this.containerElement.style.gridTemplateColumns = "1fr";
      this.containerElement.style.gridTemplateAreas = "'menu' 'canvas' 'divider' 'svg'";
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
