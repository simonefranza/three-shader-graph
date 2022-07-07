import { Emitter } from "mitt";
import { Events } from "../Manager";
import { BaseOutput } from "../nodes/BaseOutput";
import { BaseInput } from "../nodes/BaseInput";
import { RendererNode } from "./RendererNode";
import * as Utils from "./utils";

enum State {
  Initial,
  Fixed,
  Detached,
}

const DOMState = {
  Open : "open",
  Busy : "busy",
  Linked : "linked",
};

export class Link {
  canvas: SVGForeignObjectElement;

  emitter: Emitter<Events>;

  startElement?: HTMLElement;

  startOutput?: BaseOutput;

  startPosition: CanvasPosition;

  startNode?: RendererNode;

  endElement?: HTMLElement;

  endInput?: BaseInput;

  endPosition: CanvasPosition;

  endNode?: RendererNode;

  path: SVGPathElement;

  state: State;

  pointerMoveHandler: (e: PointerEvent) => void;

  pointerUpHandler: () => void;

  fixLinkHandler: (obj: LinkElement) => void;

  constructor(
      canvas: SVGForeignObjectElement,
      emitter: Emitter<Events>,
      startPosition: CanvasPosition,
      endPosition: CanvasPosition,
      inOutput: BaseInput | BaseOutput,
      startElement?: HTMLElement,
      endElement?: HTMLElement,
      startNode?: RendererNode,
      endNode?: RendererNode
  ) {
    this.canvas = canvas;
    this.emitter = emitter;
    this.startPosition = { x : startPosition.x, y : startPosition.y };
    this.endPosition = { x : endPosition.x, y : endPosition.y };
    if (startElement !== undefined && startElement !== null) {
      this.startElement = startElement;
      this.startElement.setAttribute("data-state", DOMState.Busy);
    }
    if (endElement !== undefined && endElement !== null) {
      this.endElement = endElement;
      this.endElement.setAttribute("data-state", DOMState.Busy);
    }
    if (inOutput instanceof BaseOutput) {
      this.startOutput = inOutput;
    } else if (inOutput instanceof BaseInput) {
      this.endInput = inOutput;
    }
    if (startNode !== undefined && startNode !== null) {
      this.startNode = startNode;
    }
    if (endNode !== undefined && endNode !== null) {
      this.endNode = endNode;
    }
    this.path = this.createLine();
    this.updateShape();
    this.state = State.Initial;

    this.pointerMoveHandler = (e: PointerEvent) => this.handlePointerMoveInitial(e);
    addEventListener("pointermove", this.pointerMoveHandler);

    this.pointerUpHandler = () => this.handlePointerUp();
    addEventListener("pointerup", this.pointerUpHandler);

    this.fixLinkHandler = (obj: LinkElement) => this.fixLink(obj);
    this.emitter.on("fixLink", this.fixLinkHandler);

    this.emitter.on("repositionLinks", () => this.moveLink());
  }

  createLine(): SVGPathElement {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "red");
    path.setAttribute("stroke-width", "3px");
    path.setAttribute("fill", "transparent");
    if (this.canvas.firstChild !== null) {
      this.canvas.insertBefore(path, this.canvas.firstChild);
    } else {
      throw "[Link] Adding link with no nodes";
    }
    return path;
  }

  setStartPosition(pos: CanvasPosition) {
    this.startPosition.x = pos.x;
    this.startPosition.y = pos.y;
    this.updateShape();
  }

  setEndPosition(pos: CanvasPosition) {
    this.endPosition.x = pos.x;
    this.endPosition.y = pos.y;
    this.updateShape();
  }

  updateShape(convertPositions?: boolean) {
    let [ start, end ] = [
      { x : 0, y : 0 },
      { x : 0, y : 0 },
    ];
    if (convertPositions === false) {
      [ start, end ] = [ this.startPosition, this.endPosition ];
    } else {
      [ start, end ] = this.convertCanvasPosition([
        this.startPosition,
        this.endPosition,
      ]);
    }
    const midPoint = <CanvasPosition>{
      x : (start.x + end.x) / 2,
      y : (start.y + end.y) / 2,
    };
    this.path.setAttribute(
      "d",
      `M ${start.x} ${start.y}
      Q ${start.x + Math.abs(end.x - start.x) / 3}
        ${start.y}, ${midPoint.x} ${midPoint.y} 
      T ${end.x} ${end.y}`
    );
  }

  handlePointerMoveInitial(e: PointerEvent) {
    if (this.state !== State.Initial) {
      throw "[Link::handlePointerMove] state is not Initial";
    }
    if (this.startElement === undefined) {
      this.startPosition.x = e.clientX;
      this.startPosition.y = e.clientY;
      this.updateShape();
    } else if (this.endElement === undefined) {
      this.endPosition.x = e.clientX;
      this.endPosition.y = e.clientY;
      this.updateShape();
    }
  }

  handlePointerMoveDetached(e: PointerEvent) {
    if (this.state !== State.Detached) {
      throw "[Link::handlePointerMove] state is not Detached";
    }
    if (this.startElement === undefined) {
      throw "[Link] startElement is undefined";
    }
    const boundingStart = this.startElement.getBoundingClientRect();
    const distances = this.convertCanvasDistances([
      boundingStart.width / 2,
      boundingStart.height / 2,
    ]);
    console.log(e.clientX, e.clientY);
    const positions = this.convertCanvasPosition([
      { x : boundingStart.left, y : boundingStart.top },
      { x : e.clientX, y : e.clientY},
    ]);
    this.startPosition.x = positions[0].x + distances[0];
    this.startPosition.y = positions[0].y + distances[1];
    this.endPosition.x = positions[1].x;
    this.endPosition.y = positions[1].y;
    this.updateShape(false);
  }

  handlePointerUp() {
    if (this.state !== State.Initial && this.state !== State.Detached) {
      throw "[Link::handlePointerMove] state is not Initial or Detached";
    }
    console.log("up");
    this.emitter.emit("cancelLink");
    this.deleteElement();
  }

  detachEnd() {
    if (this.endElement === undefined) {
      throw "[Link] Detaching end but endElement is undefined";
    }
    if (this.startElement === undefined) {
      throw "[Link] startElement is undefined";
    }
    this.state = State.Detached;
    this.pointerMoveHandler = (e: PointerEvent) => this.handlePointerMoveDetached(e);
    addEventListener("pointermove", this.pointerMoveHandler);
    addEventListener("pointerup", this.pointerUpHandler);
    this.emitter.on("fixLink", this.fixLinkHandler);
    // TODO unlink from node
    const boundingEnd = this.endElement.getBoundingClientRect();
    const boundingStart = this.startElement.getBoundingClientRect();
    const distances = this.convertCanvasDistances([
      boundingStart.width / 2,
      boundingStart.height / 2,
      boundingEnd.width / 2,
      boundingEnd.height / 2,
    ]);
    const positions = this.convertCanvasPosition([
      { x : boundingStart.left, y : boundingStart.top },
      { x : boundingEnd.left, y : boundingEnd.top },
    ]);
    this.startPosition.x = positions[0].x + distances[0];
    this.startPosition.y = positions[0].y + distances[1];
    this.endPosition.x = positions[1].x + distances[2];
    this.endPosition.y = positions[1].y + distances[3];
    this.endElement.setAttribute("data-state", DOMState.Open);
    this.endElement = undefined;
    this.updateShape(false);
  }

  deleteElement() {
    console.log("delete");
    this.path.remove();
    if (this.state === State.Initial) {
      removeEventListener("pointermove", this.pointerMoveHandler);
      removeEventListener("pointerup", this.pointerUpHandler);
      this.emitter.off("fixLink", this.fixLinkHandler);
    }
    if (this.startNode !== undefined) {
      this.startNode.removeOutgoingLink(this);
    }
    if (this.endNode !== undefined) {
      this.endNode.removeIncomingLink(this);
    }
    if (this.state === State.Fixed) {
      if (this.startOutput === undefined) {
        throw "[Link] startOutput is undefined, but state is fixed";
      } else if (this.endInput === undefined) {
        throw "[Link] startOutput is undefined, but state is fixed";
      }
      this.endInput.dropConnection();
      this.emitter.emit("recompile");
    }
    if (this.startElement !== undefined) {
      this.startElement.setAttribute("data-state", DOMState.Open);
    }
    if (this.endElement !== undefined) {
      this.endElement.setAttribute("data-state", DOMState.Open);
    }
  }

  fixLink(obj: LinkElement) {
    if (this.state !== State.Initial && this.state !== State.Detached) {
      throw "[Link::fixLink] state is not Initial or Detached";
    }
    switch (this.state) {
    case State.Initial:
      this.fixLinkInitial(obj);
      break;
    case State.Detached:
      this.fixLinkDetached(obj);
      break;
    default:
      throw "[Link::fixLink] state is not initial or Detached";
    }
    if (this.endInput === undefined) {
      throw "[Link] After fixing link, endInput is undefined";
    } else if (this.endNode === undefined) {
      throw "[Link] After fixing link, endNode is undefined";
    } else if (this.endElement === undefined) {
      throw "[Link] After fixing link, endElement is undefined";
    } else if (this.startOutput === undefined) {
      throw "[Link] After fixing link, startOutput is undefined";
    } else if (this.startNode === undefined) {
      throw "[Link] After fixing link, startNode is undefined";
    } else if (this.startElement === undefined) {
      throw "[Link] After fixing link, startElement is undefined";
    }
    this.startElement.setAttribute("data-state", "linked");
    this.endElement.setAttribute("data-state", "linked");
    this.startNode.addOutgoingLink(this, this.startOutput);
    this.endNode.addIncomingLink(this, this.endInput);
    this.startOutput.connectTo(this.endInput);
    this.state = State.Fixed;
    removeEventListener("pointermove", this.pointerMoveHandler);
    removeEventListener("pointerup", this.pointerUpHandler);
    this.emitter.off("fixLink", this.fixLinkHandler);
    this.emitter.emit("recompile");
  }

  fixLinkInitial(obj : LinkElement) {
    if (obj.startElement !== undefined) {
      this.startElement = obj.startElement;
      const bounding = this.startElement.getBoundingClientRect();
      this.startPosition.x = bounding.left + bounding.width / 2;
      this.startPosition.y = bounding.top + bounding.height / 2;
    }
    if (obj.startOutput !== undefined) {
      this.startOutput = obj.startOutput;
    }
    if (obj.startNode !== undefined) {
      this.startNode = obj.startNode;
    }
    if (obj.endElement !== undefined) {
      this.endElement = obj.endElement;
      const bounding = this.endElement.getBoundingClientRect();
      this.endPosition.x = bounding.left + bounding.width / 2;
      this.endPosition.y = bounding.top + bounding.height / 2;
    }
    if (obj.endInput !== undefined) {
      this.endInput = obj.endInput;
    }
    if (obj.endNode !== undefined) {
      this.endNode = obj.endNode;
    }
    this.updateShape();

  }

  fixLinkDetached(obj : LinkElement) {
    if (obj.endElement === undefined || obj.endInput === undefined || obj.endNode === undefined) {
      throw "[Link::fixLinkDetached] end elements are undefined";
    }
    this.endInput = obj.endInput;
    this.endNode = obj.endNode;

    this.endElement = obj.endElement;
    const boundingEnd = this.endElement.getBoundingClientRect();
    const distances = this.convertCanvasDistances([
      boundingEnd.width / 2,
      boundingEnd.height / 2,
    ]);
    const positions = this.convertCanvasPosition([
      { x : boundingEnd.left, y : boundingEnd.top },
    ]);
    this.endPosition.x = positions[0].x + distances[0];
    this.endPosition.y = positions[0].y + distances[1];
    this.updateShape(false);
  }

  moveLink() {
    if (this.endElement === undefined) {
      throw "[Link] endElement is undefined";
    }
    if (this.startElement === undefined) {
      throw "[Link] startElement is undefined";
    }
    const boundingStart = this.startElement.getBoundingClientRect();
    const boundingEnd = this.endElement.getBoundingClientRect();
    const distances = this.convertCanvasDistances([
      boundingStart.width / 2,
      boundingStart.height / 2,
      boundingEnd.width / 2,
      boundingEnd.height / 2,
    ]);
    const positions = this.convertCanvasPosition([
      { x : boundingStart.left, y : boundingStart.top },
      { x : boundingEnd.left, y : boundingEnd.top },
    ]);
    this.startPosition.x = positions[0].x + distances[0];
    this.startPosition.y = positions[0].y + distances[1];
    this.endPosition.x = positions[1].x + distances[2];
    this.endPosition.y = positions[1].y + distances[3];
    this.updateShape(false);
  }

  convertCanvasPosition(positions: CanvasPosition[]): CanvasPosition[] {
    const res: CanvasPosition[] = [];
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";
    }
    const bounding = this.canvas.getBoundingClientRect();
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    positions.forEach((pos) => {
      const [ x, y ] = Utils.convertPixelToUnit(
        viewBoxSplit,
        bounding,
        pos.x,
        pos.y
      );
      res.push({ x, y });
    });
    return [ ...res ];
  }

  convertCanvasDistances(distances: number[]): number[] {
    const viewBox = this.canvas.getAttribute("viewBox");
    if (viewBox === null) {
      throw "[RendererNodeMovement::handlePointerMoveInitial] viewBox is null";
    }
    const bounding = this.canvas.getBoundingClientRect();
    const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
    const res = Utils.convertPixelDistanceToUnit(
      viewBoxSplit,
      bounding,
      distances
    );
    return [ ...res ];
  }
}

export interface CanvasPosition {
  x: number;
  y: number;
}

export interface LinkElement {
  startElement?: HTMLElement;
  startNode?: RendererNode;
  startOutput?: BaseOutput;
  endElement?: HTMLElement;
  endNode?: RendererNode;
  endInput?: BaseInput;
}
