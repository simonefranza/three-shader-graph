import { BaseOutput } from "./BaseOutput";
import { BaseNode } from "./BaseNode";
import { ShaderVariable } from "../shaders/CommonShader";

export class BaseInput {
  #name: string;

  #type: string;

  #acceptedInputs: string[];

  #parent: BaseNode | null;

  #connected: BaseOutput | null;

  #value: ShaderVariable | null;

  #defaultValue : ShaderVariable;

  constructor(
      name: string,
      type: string,
      acceptedInputs: string[] | string,
      value: ShaderVariable,
      connected ?: BaseOutput
  ) {
    this.#name = name;
    this.#type = type;
    this.#acceptedInputs = typeof acceptedInputs === "string" ?
      [ acceptedInputs ] :
      [ ...acceptedInputs ];
    this.#parent = null;
    if (connected instanceof BaseOutput)  {
      this.#connected = connected;
    } else {
      this.#connected = null;
    }
    this.#value =  value;
    this.#defaultValue = <ShaderVariable> {
      name : value.name,
      type : value.type,
      value : value.value
    };
  }

  // Getters
  getName() : string {
    return this.#name;
  }

  getType() : string {
    return this.#type;
  }

  getAcceptedInputs() : string[] {
    return this.#acceptedInputs;
  }

  getParent() : BaseNode {
    if (this.#parent === null) {
      throw "[BaseInput] Parent is null, please set it";
    }
    return this.#parent;
  }

  getConnected() : BaseOutput{
    if (this.#connected === null) {
      throw "[BaseInput] Nothing is connected to this input. " +
            "Call isConnected to check";
    }
    return this.#connected;
  }

  getValue() : ShaderVariable {
    if (this.#value === null) {
      //TODO
      return <ShaderVariable>{name : "", type : "", value : ""};
    } else {
      return this.#value;
    }
  }

  isConnected() : boolean {
    return this.#connected instanceof BaseOutput;
  }

  // Setters
  setParent(parent: BaseNode) {
    this.#parent = parent;
  }

  setValue(value : any) {
    if (this.#value === null) {
      throw `[BaseInput (${this.#name})] Trying to assign value to null`;
    }
    this.#value.value = value;
  }

  acceptsInputs(type: string) : boolean {
    for (let i = 0; i < this.#acceptedInputs.length; i++) {
      if (
        this.#acceptedInputs[i] === type ||
        this.#acceptedInputs[i] === "any"
      ) {
        return true;
      }
    }
    return false;
  }

  connectTo(output: BaseOutput) {
    this.#connected = output;
    this.#value = null;
  }

  dropConnection() {
    if (this.#connected === null) {
      throw "[BaseInput] Connected is null, cannot drop connection";
    }
    this.#connected.dropConnection(this);
    this.#connected = null;
    this.#value = <ShaderVariable> {
      name : this.#defaultValue.name,
      type : this.#defaultValue.type,
      value : this.#defaultValue.value
    };
  }


}

export interface InputList {
  inputList: BaseInput[];
}

export interface InputVariablesMap {
  [key: string] : BaseInput
}
