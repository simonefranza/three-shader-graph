import mitt, {Emitter} from "mitt";
import { BaseNode } from "./nodes/BaseNode";
import { ShaderGraphRenderer } from "./ShaderGraphRenderer";
import { Scene } from "./Scene";
import { LinkElement } from "./renderer/Link";

export interface PointerPosition {
  x: number;
  y: number;
}

export type Events = {
  pointerMoved: PointerPosition;
  createNode : new () => BaseNode;
  showMenu: undefined;
  deleteNode: undefined;
  fixLink : LinkElement;
  recompile : undefined;
  newShaders : [string, string];
  resizeCanvas : undefined;
  resizeGraph: undefined;
  repositionLinks: undefined;
};

export class Manager {
  element : HTMLElement;

  emitter: Emitter<Events>;

  style : string;

  svgElement: HTMLElement;

  containerElement : HTMLElement;

  canvasElement: HTMLElement;

  dividerElement: HTMLElement;

  sceneManager : Scene;

  graphManager : ShaderGraphRenderer;

  dividerInitialPosition : PointerPosition;

  dividerMoveHandler : (e : PointerEvent) => void;

  dividerUpHandler : () => void;

  constructor(element : HTMLElement) {
    this.element = element;
    this.emitter = mitt();
    this.style = `
#manager-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60fr 5px 40fr;
  grid-template-rows: 1fr;
  grid-template-areas: "svg divider canvas";
}

#manager-canvas {
  grid-area: canvas;
  width: 100%;
  height: 100%;
}

#manager-divider {
  grid-area: divider;
  width: 100%;
  height: 100%;
  background-color: #9b3df1;
  cursor: col-resize;
}

#manager-svg {
  grid-area: svg;
  background-image: radial-gradient(#2c2c2c 13%, transparent 13%);
  background-position: 0 0;
  background-size: 25px 25px;
  background-color: #1b1b1b;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
      `;
    this.addStyles();
    this.dividerMoveHandler = (e : PointerEvent) => this.handleDividerPointerMove(e);
    this.dividerUpHandler = () => this.handleDividerPointerUp();
    this.dividerInitialPosition = {x : 0, y : 0};
    [ this.containerElement,
      this.svgElement,
      this.dividerElement,
      this.canvasElement ] = this.createView();
    this.dividerElement.addEventListener(
      "pointerdown",
      (e : PointerEvent) => this.handleDividerPointerDown(e)
    );
    this.graphManager = this.createGraphManager();
    this.sceneManager = this.createScene();
  }

  addStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = this.style;
    document.head.appendChild(styleSheet);
  }

  createView() : [HTMLElement, HTMLElement, HTMLElement, HTMLElement] {
    const container = document.createElement("div");
    container.setAttribute("id", "manager-container");

    const graphView = document.createElement("div");
    graphView.setAttribute("id", "manager-svg");
    container.appendChild(graphView);

    //TODO enable
    //graphView.addEventListener("contextmenu", (e : Event) => {
    //  e.preventDefault();
    //});

    const divider = document.createElement("div");
    divider.setAttribute("id", "manager-divider");
    container.appendChild(divider);

    const canvasView = document.createElement("canvas");
    canvasView.setAttribute("id", "manager-canvas");
    container.appendChild(canvasView);

    this.element.appendChild(container);
    return [ container, graphView, divider, canvasView ];
  }

  createScene() : Scene {
    return new Scene(this.canvasElement, this.emitter);
  }

  createGraphManager() : ShaderGraphRenderer {
    return new ShaderGraphRenderer(this.svgElement, this.emitter);
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
}
