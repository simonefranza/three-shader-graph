import { Emitter } from "mitt";
import { Events, PointerPosition } from "../Manager";
import { BaseNode } from "../nodes/BaseNode";
import { NodesList } from "../nodes/NodesList";

export class RendererMenu {
  container: HTMLElement;

  emitter: Emitter<Events>;

  menu: HTMLElement;

  style: string;

  pointerPos: PointerPosition;

  active: boolean;

  constructor(container: HTMLElement, emitter: Emitter<Events>, pos: PointerPosition) {
    this.container = container;
    this.emitter = emitter;
    this.style = `
      #shader-menu-svg-container {
        height: 100%;
        width: 100%;
        position: relative;
      }
      #shader-menu-container {
        position: absolute;
        top: 0;
        left: 0;
        padding: 3rem;
      }
      #shader-menu-body {
        background: #111;
        border-radius: 6px;
        padding: 1rem;
        position: static;
        box-sizing: border-box;
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 0px 0.5px #636363;
      }
      .shader-menu-el {
        color: #eee;
        margin: 0;
        width: 100%;
        padding-block: .5rem;
        padding-inline: .5rem;
        font-family: monospace;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .shader-menu-el:hover {
        background: #222;
      }
      .shader-menu-sep {
        position: relative;
        width: 100%;
        height: 1px;
        background: #eee;
        margin-block: 5px;
      }
    `;
    this.addStyles();
    this.menu = this.createMenu();
    this.active = false;
    this.pointerPos = { x: pos.x, y: pos.y };

    this.emitter.on("showMenu", () => this.handleKeyDown());

    const pointerPositionHandler = (e: PointerPosition) => this.handlePointerPosition(e);
    this.emitter.on("pointerMoved", pointerPositionHandler);
  }

  handleKeyDown() {
    this.menu.style.display = "";
    this.active = true;
    let boundingRect = this.menu.getBoundingClientRect();
    this.menu.style.transform =
      `translate(
        ${this.pointerPos.x - boundingRect.width / 2}px, 
        ${this.pointerPos.y - boundingRect.height / 2}px)`;
    boundingRect = this.menu.getBoundingClientRect();
    console.log("top", boundingRect.top);
    let newX = this.pointerPos.x - boundingRect.width / 2;
    let newY = this.pointerPos.y - boundingRect.height / 2;
    if (boundingRect.top < -3 * 16) {
      newY = -3 * 16;
    }
    if (boundingRect.bottom > innerHeight + 3 * 16) {
      newY = innerHeight - boundingRect.height + 3 * 16;
    }
    if (boundingRect.left < -3 * 16) {
      newX = -3 * 16;
    }
    this.menu.style.transform =
      `translate(
        ${newX}px, 
        ${newY}px)`;
  }

  addStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = this.style;
    document.head.appendChild(styleSheet);
  }

  createMenu(): HTMLElement {
    const container: HTMLElement =
      document.createElement("div");
    container.setAttribute("id", "shader-menu-container");
    const div = document.createElement("div");
    div.setAttribute("id", "shader-menu-body");
    container.appendChild(div);

    const separator = document.createElement("div");
    separator.setAttribute("class", "shader-menu-sep");

    const nodes = NodesList.getNodesList();
    nodes.forEach((nodeDesc, idx) => {
      const node = document.createElement("span");
      node.setAttribute("class", "shader-menu-el");
      node.textContent = nodeDesc.name;
      node.addEventListener("click", () => this.sendCreateEvent(nodeDesc.class));
      div.appendChild(node);
      if (idx !== nodes.length - 1) {
        div.appendChild(separator.cloneNode());
      }
    });

    this.container.appendChild(container);

    container.style.height = "100%";
    container.style.width = "100%";
    const bounding = div.getBoundingClientRect();
    container.setAttribute("width", `${bounding.width + 16 * 6}`);
    container.setAttribute("height", `${bounding.height + 16 * 6}`);
    container.style.height = "";
    container.style.width = "";
    container.style.display = "none";
    return container;
  }

  handlePointerPosition(pos: PointerPosition) {
    this.pointerPos.x = pos.x;
    this.pointerPos.y = pos.y;
    if (!this.active) {
      return;
    }
    const bounding = this.menu.getBoundingClientRect();
    if (this.pointerPos.x < bounding.left || this.pointerPos.x > bounding.right ||
      this.pointerPos.y < bounding.top || this.pointerPos.y > bounding.bottom) {
      this.hideMenu();
    }
  }

  hideMenu() {
    this.menu.style.display = "none";
    this.active = false;
  }

  sendCreateEvent(nodeClass: new () => BaseNode) {
    this.hideMenu();
    this.emitter.emit("createNode", nodeClass);
  }
}
