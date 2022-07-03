import { BaseNode } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ShaderVariable } from "../shaders/CommonShader";
import { Vector4 } from "three";

export class PrincipledBSDF extends BaseNode {
  inputVariables : InputVariablesMap;

  constructor() {
    super(
      "Principled BSDF",
      {inputList : [
        new BaseInput(
          "base-color",
          "color",
          "color",
        <ShaderVariable>{
          name : "color",
          type : "vec4",
          value : new Vector4(0.3, 0.8, 1, 1)
        }
        ),
        new BaseInput(
          "emission-color",
          "color",
          "color",
        <ShaderVariable>{
          name : "color",
          type : "vec4",
          value : new Vector4(0, 0, 0, 1)
        }
        ),
      ]},
      new BaseOutput("BSDF", "shader"),
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
  }

  compile(vert: VertexShader, frag : FragmentShader): [string, string] {
    let baseColorVarName = "";
    let emissionColorVarName = "";
    if (this.inputVariables["base-color"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["base-color"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      [ baseColorVarName, ] = prevParent.compile(vert, frag);
    } else {
      const baseColorValue : ShaderVariable =
        this.inputVariables["base-color"].getValue();
      baseColorVarName = vert.generateVariableID("princ_base_color_");
      const line : string = `vec4 ${baseColorVarName} = ${baseColorValue.type}` +
        `(${baseColorValue.value.x}, ${baseColorValue.value.y}, ` +
        `${baseColorValue.value.z}, ${baseColorValue.value.w});`;
      frag.addToMain(line);
    }
    if (this.inputVariables["emission-color"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["emission-color"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      [ emissionColorVarName, ] = prevParent.compile(vert, frag);
    } else {
      const emissionColorValue : ShaderVariable =
        this.inputVariables["emission-color"].getValue();
      emissionColorVarName = vert.generateVariableID("princ_emission_color_");
      const line : string = `vec4 ${emissionColorVarName} = ${emissionColorValue.type}` +
        `(${emissionColorValue.value.x}, ${emissionColorValue.value.y}, ` +
        `${emissionColorValue.value.z}, ${emissionColorValue.value.w});`;
      frag.addToMain(line);
    }
    const princOutputID = vert.generateVariableID("princ_bsdf_");
    const line = `vec4 ${princOutputID} = ${baseColorVarName} + ${emissionColorVarName};`;
    frag.addToMain(line);
    return [ princOutputID, "" ];
  }

  setInputValue(name : string, value: any) {
    this.inputVariables[name].setValue(value);
  }
}
