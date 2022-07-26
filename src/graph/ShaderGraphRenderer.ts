/*
 * Class: ShaderGraphRenderer
 *
 * This class is responsible for the graph part
 *
 */
import { OutputNode } from "./nodes/OutputNode";
import { RendererMenu } from "./renderer/RendererMenu";
import { RendererNode } from "./renderer/RendererNode";
import { KeyboardHandler } from "./renderer/KeyboadHandler";
import { BaseNode } from "./nodes/BaseNode";
import { Events, PointerPosition } from "./Manager";
import { Emitter } from "mitt";
import { GLSLManager }  from "./CodeManager";
import { ZoomPanManager } from "./renderer/ZoomPanManager";

export class ShaderGraphRenderer {
  container : HTMLElement;

  canvas : SVGForeignObjectElement;

  zoomPanManager : ZoomPanManager;

  emitter: Emitter<Events>;

  menu : RendererMenu;

  keyboardHandler: KeyboardHandler;

  pointerPos : PointerPosition;

  outputNode : OutputNode;

  codeManager : GLSLManager;

  style : string;

  constructor(container: HTMLElement, emitter : Emitter<Events>) {
    this.container = container;
    this.style = `
      #renderer-canvas {
        height: 100%;
        width: 100%;
        position: relative;
      }
    `;
    this.addStyles();
    this.canvas = this.createCanvas();
    this.setupCanvas();
    this.emitter = emitter;
    this.zoomPanManager = new ZoomPanManager(this.canvas, this.emitter);

    this.pointerPos = {x : 0, y : 0};
    this.keyboardHandler = new KeyboardHandler(this.emitter);

    this.menu = new RendererMenu(this.container, this.emitter, this.pointerPos);
    const pointerPositionHandler = (e : PointerEvent) => this.handlePointerMove(e);
    addEventListener("pointermove", pointerPositionHandler);
    this.emitter.on(
      "createNode",
      (nodeType : new () => BaseNode) => {
        this.handleNodeCreation(nodeType, true);
      }
    );
    this.outputNode = <OutputNode> this.handleNodeCreation(OutputNode, false);
    this.codeManager = new GLSLManager(this.outputNode);
    this.emitter.on("recompile", () => {
      const shaders = this.codeManager.compile();
      this.emitter.emit("newShaders", shaders);
    });
  }

  addStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = this.style;
    document.head.appendChild(styleSheet);
  }

  createCanvas() : SVGForeignObjectElement {
    const canvas : SVGForeignObjectElement =
      document.createElementNS("http://www.w3.org/2000/svg", "svg");
    canvas.setAttribute("id", "renderer-canvas");
    canvas.setAttribute("preserveAspectRatio", "xMinYMin");
    this.container.appendChild(canvas);
    return canvas;
  }

  setupCanvas() {
    const bounding = this.canvas.getBoundingClientRect();
    this.canvas.setAttribute(
      "viewBox",
      `0 0 ${bounding.width} ${bounding.height}`
    );
    // Pan middle mouse or two touches
    // Zoom two finger moving in opposite or scroll
    //this.canvas.addEventListener(
    //  "pointermove",
    //  (e  : PointerEvent) => console.log(e.clientX, e.clientY)
    //);
  }

  handlePointerMove(e : PointerEvent) {
    this.pointerPos.x = e.clientX;
    this.pointerPos.y = e.clientY;
    this.emitter.emit("pointerMoved", this.pointerPos);
  }

  handleNodeCreation(nodeType: new () => BaseNode, interactivePlacement : boolean) : BaseNode {
    const node = new RendererNode(
      this.canvas,
      this.emitter,
      nodeType,
      this.pointerPos,
      interactivePlacement
    );
    return node.getGraphNode();
  }

}

