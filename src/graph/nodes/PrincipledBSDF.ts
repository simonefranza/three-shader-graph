import { BaseNode } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ColorVariable } from "../shaders/CommonShader";
import { Color, ColorSpace } from "../utils/Color";

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
        <ColorVariable>{
          name : "color",
          type : "vec4",
          // color in hsv
          value : new Color(ColorSpace.HSV, 320, 0.75, 1, 1)
        }
        ),
        new BaseInput(
          "emission-color",
          "color",
          "color",
        <ColorVariable>{
          name : "color",
          type : "vec4",
          value : new Color(ColorSpace.HSV, 0, 0, 0, 1)
        }
        ),
      ]},
      new BaseOutput("BSDF", "shader"),
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    console.log("list", list);
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
      const baseColorValue : ColorVariable =
        this.inputVariables["base-color"].getValue();
      baseColorVarName = vert.generateVariableID("princ_base_color_");
      console.log(baseColorValue, baseColorValue.value);
      const rgb = baseColorValue.value.getUnitRgb();
      const alpha = baseColorValue.value.getAlpha();
      const line : string = `vec4 ${baseColorVarName} = ${baseColorValue.type}` +
        `(${rgb.x}, ${rgb.y}, ${rgb.z}, ${alpha});`;
      frag.addToMain(line);
    }
    if (this.inputVariables["emission-color"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["emission-color"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      [ emissionColorVarName, ] = prevParent.compile(vert, frag);
    } else {
      const emissionColorValue : ColorVariable =
        this.inputVariables["emission-color"].getValue();
      const rgb = emissionColorValue.value.getUnitRgb();
      const alpha = emissionColorValue.value.getAlpha();
      emissionColorVarName = vert.generateVariableID("princ_emission_color_");
      const line : string = `vec4 ${emissionColorVarName} = ${emissionColorValue.type}` +
        `(${rgb.x}, ${rgb.y}, ${rgb.z}, ${alpha});`;
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
