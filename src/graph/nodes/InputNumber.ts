import { BaseInput } from "./BaseInput";
import { ShaderVariable } from "../shaders/CommonShader";
import { BaseOutput } from "./BaseOutput";

export class InputNumber extends BaseInput {
  #minValue ?: number;

  #maxValue ?: number;

  constructor(
      name: string,
      acceptedInputs: string[] | string,
      defaultValue : number,
      minValue ?: number,
      maxValue ?: number,
      connected ?: BaseOutput,
  ) {
    super(name,
      "number",
      acceptedInputs,
        <ShaderVariable>{name, type : "number", value : defaultValue},
        connected);
    this.#minValue = minValue;
    this.#maxValue = maxValue;
  }

  getMinValue() : number | undefined {
    return this.#minValue;
  }

  getMaxValue() : number | undefined {
    return this.#maxValue;
  }
}
