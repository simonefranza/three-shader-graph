import { StateField } from "@codemirror/state";
import { Emitter } from "mitt";
import { Events, PointerPosition } from "../Manager";
import { RendererNode, State } from "./RendererNode";
import * as Utils from "./utils";

export class RendererNodeMovement {
  canvas : SVGForeignObjectElement;

  svgNode : SVGForeignObjectElement;

  nodeRenderer : RendererNode;

  emitter : Emitter<Events>;

  state : State;

  pointerPos: PointerPosition;

  startDragPos : PointerPosition;

  startDragPosUnit : PointerPosition;

  pointerDownHandler: (e: PointerEvent) => void;

  pointerMovedHandler: (e: PointerPosition) => void;

  pointerUpHandler: () => void;

  constructor(
      canvas : SVGForeignObjectElement,
      svgNode: SVGForeignObjectElement,
      renderer : RendererNode,
      emitter : Emitter<Events>,
      state : State,
      pos : PointerPosition
  ) {
    this.canvas = canvas;
    this.svgNode = svgNode;
    this.nodeRenderer = renderer;
    this.emitter = emitter;
    this.state = state;
    this.pointerPos = {x : pos.x, y : pos.y};
    this.startDragPos = {x : 0, y : 0};
    this.startDragPosUnit = {x : 0, y : 0};


    this.pointerDownHandler = (e: PointerEvent) => this.handlePointerDown(e);
    addEventListener("pointerdown", this.pointerDownHandler);

    this.pointerMovedHandler = (e: PointerPosition) => this.handlePointerMove(e);
    this.emitter.on("pointerMoved", this.pointerMovedHandler);

    this.pointerUpHandler = () => this.handlePointerUp();
  }

  removeListeners() {
    removeEventListener("pointerdown", this.pointerDownHandler);
    this.emitter.off("pointerMoved", this.pointerMovedHandler);
    if (this.state === State.SelectedDown || this.state === State.Moving) {
      removeEventListener("pointerup", this.pointerUpHandler);
    }
  }

  handlePointerDown(e: PointerEvent) {
    if (this.svgNode === undefined) {
      throw "[RendererNode] svgNode is undefined. " +
      "Did you forget to remove the pointerDown listener?";
    }
    switch (this.state) {
    case State.Initial:
      this.handlePointerDownInitial(e);
      break;
    case State.Set:
      this.handlePointerDownSet(e);
      break;
    case State.SelectedUp:
      this.handlePointerDownSelectedUp(e);
      break;
    case State.Moving:
      throw "[RendererNode] How is State.Moving when clicking on it?";
      break;
    case State.SelectedDown:
      throw "[RendererNode] How is State.SelectedDown when clicking on it?";
      break;
    default :
      throw "[RendererNodeMovement::handlePointerDown] State not implemented, " + this.state;
    }
  }

  handlePointerDownInitial(e : PointerEvent) {
    if (this.state !== State.Initial) {
      throw "[RendererNodeMovement::handlePointerDownInitial] State is not Initial";
    }
    if (e.buttons > 1) {
      e.preventDefault();
      this.nodeRenderer.deleteNode();
    } else  {
      this.setState(State.Set);
      this.svgNode.style.cursor = "";
    }
  }

  handlePointerDownSet(e : PointerEvent) {
    if (this.state !== State.Set) {
      throw "[RendererNodeMovement::handlePointerDownSet] State is not Set";
    }
    const nodeList = this.svgNode.getElementsByClassName("shader-node");
    if (nodeList.length === 0) {
      throw "[RendererNode::handlePointerDownSet] No element with class shader-node found.";
    }
    const node = nodeList[0];
    if (e.target === this.svgNode) {
      node.classList.add("highlight");
      this.svgNode.remove();
      this.canvas.appendChild(this.svgNode);
      this.setState(State.SelectedDown);
      this.saveStartPosition(e);
      addEventListener("pointerup", this.pointerUpHandler);
    }
  }

  handlePointerDownSelectedUp(e : PointerEvent) {
    const nodeList = this.svgNode.getElementsByClassName("shader-node");
    if (nodeList.length === 0) {
      throw "[RendererNode] No element with class shader-node found.";
    }
    const node = nodeList[0];
    if (e.target !== this.svgNode) {
      node.classList.remove("highlight");
      this.setState(State.Set);
    } else {
      this.setState(State.SelectedDown);
      this.saveStartPosition(e);
      addEventListener("pointerup", this.pointerUpHandler);
    }
  }

  saveStartPosition(e : PointerEvent) {
    this.startDragPos = { x : e.clientX, y : e.clientY };
    const x = this.svgNode.getAttribute("x");
    const y = this.svgNode.getAttribute("y");
    if (x === null || y === null) {
      throw "[RendererNode] x or y is null";
    }
    this.startDragPosUnit = { x : parseFloat(x), y : parseFloat(y)};
  }

  handlePointerMove(pos : PointerPosition) {
    if (this.svgNode === undefined) {
      throw "[RendererNode] svgNode is undefined. " +
      "Did you forget to remove the pointerMove listener?";
    }
    this.pointerPos.x = pos.x;
    this.pointerPos.y = pos.y;

    switch (this.state) {
    case State.Initial:
      this.handlePointerMoveInitial();
      break;
    case State.Set:
      break;
    case State.SelectedDown:
      this.handlePointerMoveSelectedDown();
      this.handlePointerMoveMoving();
      break;
    case State.Moving:
      this.handlePointerMoveMoving();
      break;
    case State.SelectedUp:
      break;
    default:
      throw "[RendererNodeMovement::handlePointerMove] State not implemented, " + this.state;
      break;
    }
  }

  handlePointerMoveInitial() {
    if (this.state !== State.Initial) {
      throw "[RendererNodeMovement::handlePointerMoveInitial] State is not initial";
    }
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";
    }
    const bounding = this.canvas.getBoundingClientRect();
    const svgBounding = this.svgNode.getBoundingClientRect();
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    console.log("bounding", bounding.width, viewBoxSplit[2]);
    const positions = Utils.convertPixelToUnit(
      viewBoxSplit,
      bounding,
      this.pointerPos.x - svgBounding.width / 2,
      this.pointerPos.y - svgBounding.height / 2
    );
    this.svgNode.setAttribute("x", `${positions[0]}`);
    this.svgNode.setAttribute("y", `${positions[1]}`);
  }

  handlePointerMoveSelectedDown() {
    if (this.state !== State.SelectedDown) {
      throw "[RendererNodeMovement::handlePointerMoveSelectedDown] State is not SelectedDown";
    }
    this.setState(State.Moving);
  }

  handlePointerMoveMoving() {
    if (this.state !== State.Moving) {
      throw "[RendererNodeMovement::handlePointerMoveMoving] State is not Moving";
    }
    const bounding = this.canvas.getBoundingClientRect();
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[RendererNode] viewBox is null";
    }
    this.svgNode.style.cursor = "move";
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    const [ distX, distY ] = Utils.convertPixelDistanceToUnit(
      viewBoxSplit,
      bounding,
      [ this.pointerPos.x - this.startDragPos.x,
        this.pointerPos.y - this.startDragPos.y ]
    );
    this.svgNode.setAttribute("x", (this.startDragPosUnit.x + distX).toString());
    this.svgNode.setAttribute("y", (this.startDragPosUnit.y + distY).toString());

    this.nodeRenderer.moveLinks();
  }

  handlePointerUp() {
    if (this.svgNode === undefined) {
      throw "[RendererNode] svgNode is undefined. Did you forget to remove the pointerUp listener?";
    }
    switch (this.state) {
    case State.SelectedDown:
      break;
    case State.Moving:
      break;
    default:
      throw "[RendererNode::handlePointerUp] State is NOT SelectedDown or Moving";
      break;
    }
    this.setState(State.SelectedUp);
    this.svgNode.style.cursor = "";
    removeEventListener("pointerup", this.pointerUpHandler);
  }

  setState(state : State) {
    this.state = state;
    this.nodeRenderer.setState(this.state);
  }
}
