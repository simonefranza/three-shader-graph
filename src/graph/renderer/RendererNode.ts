import { Emitter } from "mitt";
import { Events, PointerPosition } from "../Manager";
import { BaseNode } from "../nodes/BaseNode";
import { BaseOutput } from "../nodes/BaseOutput";
import { BaseInput } from "../nodes/BaseInput";
import { Link, CanvasPosition, LinkElement } from "./Link";
import * as Utils from "./utils";
import {RendererNodeMovement} from "./RendererNodeMovement";
import GraphNode from "../../components/GraphNode.vue";
import {createApp } from "vue";

interface IncomingLink {
  link: Link,
  input: BaseInput,
}

interface OutgoingLink {
  link: Link,
  output: BaseOutput,
}

export enum State {
  Initial,
  Set,
  SelectedDown,
  SelectedUp,
  Moving
}

export class RendererNode {
  canvas: SVGForeignObjectElement;

  emitter: Emitter<Events>;

  svgNode?: SVGForeignObjectElement;

  movementManager : RendererNodeMovement;

  graphNode?: BaseNode;

  pointerPos: PointerPosition;

  startDragPos: PointerPosition;

  startDragPosUnit: PointerPosition;

  state: State;

  pointerMovedHandler: (e: PointerPosition) => void;

  deleteNodeHandler: () => void;

  incomingLinks: IncomingLink[];

  outgoingLinks: OutgoingLink[];

  //createLinkHandler : (link : HTMLElement) => void;

  //fixLinkHandler : () => void;

  constructor(
      canvas: SVGForeignObjectElement,
      emitter: Emitter<Events>,
      nodeType: new () => BaseNode,
      pos: PointerPosition,
      interactivePlacement: boolean
  ) {
    this.canvas = canvas;
    this.emitter = emitter;
    this.graphNode = new nodeType();
    this.pointerPos = { x : pos.x, y : pos.y };
    this.startDragPos = { x : 0, y : 0 };
    this.startDragPosUnit = { x : 0, y : 0 };
    this.pointerMovedHandler = (e: PointerPosition) => this.updatePointerPos(e);
    this.emitter.on("pointerMoved", this.pointerMovedHandler);
    this.incomingLinks = [];
    this.outgoingLinks = [];
    this.state = interactivePlacement ? State.Initial : State.Set;
    const canvasBounding = this.canvas.getBoundingClientRect();
    //this.createLinkHandler = (link : HTMLElement) => this.createLink(link);
    //this.fixLinkHandler = () => this.fixLink();
    this.svgNode = this.createSvg(interactivePlacement ?
      this.pointerPos :
      { x : canvasBounding.width / 2, y : canvasBounding.height / 2 });
    this.movementManager = new RendererNodeMovement(
      this.canvas,
      this.svgNode,
      this,
      this.emitter,
      interactivePlacement ? State.Initial : State.Set,
      this.pointerPos
    );
    this.svgNode.style.cursor = interactivePlacement ? "move" : "";

    //this.pointerMovedHandler = (e: PointerPosition) => this.handlePointerPosition(e);
    //this.emitter.on("pointerMoved", this.pointerMovedHandler);

    //this.pointerDownHandler = (e: PointerEvent) => this.handlePointerDown(e);
    //addEventListener("pointerdown", this.pointerDownHandler);

    //this.pointerUpHandler = () => this.handlePointerUp();
    //addEventListener("pointerup", this.pointerUpHandler);

    this.deleteNodeHandler = () => this.deleteNode();
    this.emitter.on("deleteNode", this.deleteNodeHandler);
  }

  updatePointerPos(pos : PointerPosition) {
    this.pointerPos.x = pos.x;
    this.pointerPos.y = pos.y;
  }

  getGraphNode(): BaseNode {
    if (this.graphNode === undefined) {
      throw "[RendererNode] graphNode is undefined";
    }
    return this.graphNode;
  }

  createSvg(positionPixel: PointerPosition) {
    if (this.graphNode === undefined) {
      throw "[RendererNode] graphNode is undefined. Did you already delete this node?";
    }
    const name: string = this.graphNode.getName();
    const outputs: BaseOutput[] = this.graphNode.getOutputs().outputList;
    const inputs: BaseInput[] = this.graphNode.getInputs().inputList;

    const container: SVGForeignObjectElement =
      document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    container.setAttribute("class", "shader-node-container");

    const div = document.createElement("div");
    div.setAttribute("class", "shader-node");
    const graphNode = createApp(
      GraphNode,
      {
        title : name,
        outputs,
        inputs,
        renderer : this,
        emitter : this.emitter,
      }
    );
    graphNode.mount(div);

    container.appendChild(div);
    this.canvas.appendChild(container);

    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[RendererNode::createSvg] viewBox is null";
    }
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    const bounding = this.canvas.getBoundingClientRect();

    container.style.height = "100%";
    container.style.width = "100%";
    const divBounding = div.getBoundingClientRect();
    const [ width, height ] = Utils.convertPixelDistanceToUnit(viewBoxSplit,
      bounding.width,
      bounding.height,
      [ divBounding.width, divBounding.height ]);
    container.setAttribute("width", `${width + 4}`);
    container.setAttribute("height", `${height + 4}`);
    container.style.height = "";
    container.style.width = "";
    const [ x, y ] = Utils.convertPixelToUnit(
      viewBoxSplit,
      bounding.width,
      bounding.height,
      positionPixel.x - divBounding.width / 2,
      positionPixel.y - divBounding.height / 2
    );
    const position = {x, y};
    container.setAttribute("x", `${position.x}`);
    container.setAttribute("y", `${position.y}`);
    return container;
  }

  deleteNode() {
    if (this.svgNode === undefined) {
      throw "[RendererNode] svgNode is undefined. Did you already delete this instance?";
    }
    if (this.state === State.SelectedUp || this.state === State.Initial) {
      this.svgNode.remove();
      this.movementManager.removeListeners();

      this.emitter.off("deleteNode", this.deleteNodeHandler);
      this.incomingLinks.forEach(({ link }) => {
        link.deleteElement();
      });
      this.outgoingLinks.forEach(({ link }) => {
        link.deleteElement();
      });
    }
  }

  setState(state : State) {
    this.state = state;
  }

  createOutgoingLink(link: HTMLElement, output: BaseOutput) : Link {
    console.log("OutgoingLink");
    const bounding = link.getBoundingClientRect();
    const startPos = <CanvasPosition>{
      x : bounding.left + bounding.width / 2,
      y : bounding.top + bounding.height / 2
    };
    const endPos = <CanvasPosition>{ x : this.pointerPos.x, y : this.pointerPos.y };
    const newLink = new Link(
      this.canvas,
      this.emitter,
      startPos,
      endPos,
      output,
      link,
      undefined,
      this
    );
    return newLink;
  }

  createIncomingLink(link: HTMLElement, input: BaseInput) : Link {
    console.log("Incoming");
    const bounding = link.getBoundingClientRect();
    const startPos = <CanvasPosition>{ x : this.pointerPos.x, y : this.pointerPos.y };
    const endPos = <CanvasPosition>{
      x : bounding.left + bounding.width / 2,
      y : bounding.top + bounding.height / 2
    };
    const newLink = new Link(
      this.canvas,
      this.emitter,
      startPos,
      endPos,
      input,
      undefined,
      link,
      undefined,
      this
    );
    return newLink;
  }

  removeIncomingLink(link: Link) {
    this.incomingLinks = this.incomingLinks.filter(({ link : linkEl }) => linkEl !== link);
  }

  removeOutgoingLink(link: Link) {
    console.log(this.svgNode);
    this.outgoingLinks = this.outgoingLinks.filter(({ link : linkEl }) => linkEl !== link);
  }

  addIncomingLink(link: Link, input: BaseInput) {
    console.log("addIncoming", link);
    this.incomingLinks.push({ link, input });
    this.emitter.emit('addLink', link);
  }

  addOutgoingLink(link: Link, output: BaseOutput) {
    console.log("addOutgoing", link);
    this.outgoingLinks.push({ link, output });
    this.emitter.emit('addLink', link);
  }

  fixLink(obj: LinkElement) {
    this.emitter.emit("fixLink", obj);
  }

  moveLinks() {
    this.incomingLinks.forEach(({ link }) => {
      link.moveLink();
    });
    this.outgoingLinks.forEach(({ link }) => {
      link.moveLink();
    });
  }
}
