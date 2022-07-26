import { BaseNode } from "./nodes/BaseNode";
import { VertexShader } from "./shaders/VertexShader";
import { FragmentShader } from "./shaders/FragmentShader";

export class GLSLManager {
  #startNode: BaseNode | null;

  constructor(startNode: BaseNode | null) {
    this.#startNode = startNode;
  }

  setStartNode(startNode: BaseNode) {
    this.#startNode = startNode;
  }

  compile() : [string, string]{
    if (this.#startNode === null) {
      throw "[CodeManager] No start node specified!";
    }
    const vert = new VertexShader();
    const frag = new FragmentShader();
    const shaders = this.#startNode.compile(vert, frag);

    return [shaders[0].trim(), shaders[1].trim()];
  }

}
