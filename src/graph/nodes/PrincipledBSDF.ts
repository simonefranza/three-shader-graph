import { BaseNode, OutputFormat } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ColorVariable, CommonShader } from "../shaders/CommonShader";
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

  compileBaseColor(shader : CommonShader) : string {
    if (this.inputVariables["base-color"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["base-color"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      const [ baseColorVarName, ] = prevParent.compile(shader, connection, OutputFormat.VECTOR_4);
      return baseColorVarName;
    } else {
      const baseColorValue : ColorVariable =
      this.inputVariables["base-color"].getValue();
      const baseColorVarName = shader.generateVariableID("princ_base_color_");
      console.log(baseColorValue, baseColorValue.value);
      const rgb = baseColorValue.value.getUnitRgb();
      const alpha = baseColorValue.value.getAlpha();
      const line : string = `vec4 ${baseColorVarName} = ${baseColorValue.type}` +
        `(${rgb.x}, ${rgb.y}, ${rgb.z}, ${alpha});`;
      shader.addToMain(line);
      return baseColorVarName;
    }
  }

  compileEmissionColor(shader :CommonShader) : string {
    if (this.inputVariables["emission-color"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["emission-color"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      const [ varName, ] = prevParent.compile(shader, connection, OutputFormat.VECTOR_4);
      return varName;

    } else {
      const emissionColorValue : ColorVariable =
        this.inputVariables["emission-color"].getValue();
      const rgb = emissionColorValue.value.getUnitRgb();
      const alpha = emissionColorValue.value.getAlpha();
      const emissionColorVarName = shader.generateVariableID("princ_emission_color_");
      const line : string = `vec4 ${emissionColorVarName} = ${emissionColorValue.type}` +
            `(${rgb.x}, ${rgb.y}, ${rgb.z}, ${alpha});`;
      shader.addToMain(line);
      return emissionColorVarName;
    }
  }

  compile(shader: CommonShader, output: BaseOutput, format ?: OutputFormat): [string, string] {
    const baseColorVarName = this.compileBaseColor(shader);
    const emissionColorVarName = this.compileEmissionColor(shader);
    const princOutputID = shader.generateVariableID("princ_bsdf_");
    switch (format) {
    case OutputFormat.SCALAR:
      shader.addToMain(`float ${princOutputID} = ` +
          `(${baseColorVarName} + ${emissionColorVarName}).x;`);
      break;
    case OutputFormat.VECTOR_3:
      shader.addToMain(`vec3 ${princOutputID} = ` +
          `(${baseColorVarName} + ${emissionColorVarName}).xyz;`);
      break;
    case OutputFormat.VECTOR_4:
    default:
      shader.addToMain(`vec4 ${princOutputID} = ` +
        `(${baseColorVarName} + ${emissionColorVarName}).xyzw;`);
      break;
    }
    return [ princOutputID, "" ];
  }

  setInputValue(name : string, value: any) {
    this.inputVariables[name].setValue(value);
  }
}
