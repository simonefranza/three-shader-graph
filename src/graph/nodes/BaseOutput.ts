import { BaseNode } from "./BaseNode";
import { InputList, BaseInput } from "./BaseInput";

export class BaseOutput {
  #name: string;

  #type: string;

  #connections: InputList;

  #parent: BaseNode | null;

  constructor(
      name: string,
      type: string,
      connections?: InputList| BaseInput | null
  ) {
    this.#name = name;
    this.#type = type;
    if (connections instanceof BaseInput) {
      this.#connections = <InputList>{inputList : [ connections ]};
    } else if (connections === null || connections === undefined) {
      this.#connections = <InputList>{inputList : []};
    } else {
      this.#connections = connections;
    }
    this.#parent = null;
  }

  // Getters
  getName() : string {
    return this.#name;
  }

  getType() : string {
    return this.#type;
  }

  getConnections() : InputList {
    return this.#connections;
  }

  getParent() : BaseNode {
    if (this.#parent === null) {
      throw "[BaseOutput] Parent is null, please set it";
    }
    return this.#parent;
  }


  // Setters
  setParent(parent: BaseNode) {
    this.#parent = parent;
  }

  connectTo(destination: BaseInput) {
    this.#connections.inputList.push(destination);
    destination.connectTo(this);
  }

  dropConnection(destination : BaseInput) {
    this.#connections.inputList =
      this.#connections.inputList.filter((connection) => connection !== destination);
  }

}

export interface OutputList {
  outputList: BaseOutput[];
}
