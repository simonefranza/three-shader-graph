import { InputList, BaseInput } from "./BaseInput";
import { OutputList, BaseOutput } from "./BaseOutput";
import { CommonShader } from "../shaders/CommonShader";

export abstract class BaseNode {
  #name: string;

  #inputs: InputList;

  #outputs: OutputList;

  constructor(
      name: string,
      inputs: InputList | BaseInput,
      outputs: OutputList | BaseOutput
  ) {
    this.#name = name;
    this.#inputs = inputs instanceof BaseInput ?
      <InputList>{inputList : [ inputs ]} :
      inputs;
    this.#inputs.inputList.forEach((inputElement) => {
      inputElement.setParent(this);
    });
    this.#outputs = outputs instanceof BaseOutput ?
      <OutputList>{outputList : [ outputs ]} :
      outputs;
    this.#outputs.outputList.forEach((outputElement) => {
      outputElement.setParent(this);
    });
  }

  getName() : string {
    return this.#name;
  }

  getInputs() : InputList{
    return this.#inputs;
  }

  getOutputs() : OutputList {
    return this.#outputs;
  }

  connectTo(output: BaseOutput, input: BaseInput) {
    // Check if input exist
    if (!this.#outputs.outputList.includes(output)) {
      throw `[BaseNode]: ${output} is not an output element of this node`;
    }
    if (!input.acceptsInputs(output.getType())) {
      throw `[BaseNode]: The input socket does not accept the type 
        ${output.getType()}`;
    }

  }

  formatValue(val : number) {
    return val.toString().includes(".") ? val : val + ".0";
  }

  abstract compile(
    shader: CommonShader,
    output : BaseOutput,
    format ?: OutputFormat) : [string, string];
}

export enum OutputFormat {
  SCALAR,
  VECTOR_3,
  VECTOR_4,
}

export interface NodeList {
  nodeList: BaseNode[];
}
