import { OutputNode } from "./nodes/OutputNode";
import { VertexShader } from "./shaders/VertexShader";
import { FragmentShader } from "./shaders/FragmentShader";

export class GLSLManager {
  #startNode: OutputNode | null;

  constructor(startNode: OutputNode | null) {
    this.#startNode = startNode;
  }

  setStartNode(startNode: OutputNode) {
    this.#startNode = startNode;
  }

  compile() : [string, string]{
    if (this.#startNode === null) {
      throw "[CodeManager] No start node specified!";
    }
    const vert = new VertexShader();
    const frag = new FragmentShader();
    const shaders = this.#startNode.compileOutput(vert, frag);

    return [ shaders[0].trim(), shaders[1].trim() ];
  }

}
