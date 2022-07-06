import { Events } from "../Manager";
import { Emitter } from "mitt";

export class KeyboardHandler {
  emitter: Emitter<Events>;

  constructor(emitter: Emitter<Events>) {
    this.emitter = emitter;
    const keyDownHandler = (e : KeyboardEvent) => this.handleKeyDown(e);
    addEventListener("keydown", keyDownHandler);
  }

  handleKeyDown(e : KeyboardEvent) {
    console.log(e);
    if (!e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey && e.key === "A") {
      this.emitter.emit("showMenu");
    } else if (!e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey && e.key === "W") {
      this.emitter.emit("rotateView");
    } else if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.key === "x") {
      console.log("delete Node");
      this.emitter.emit("deleteNode");
    }
  }
}
