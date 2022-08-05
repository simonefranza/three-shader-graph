import { BaseNode, OutputFormat } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { InputNumber } from "./InputNumber";
import { CommonShader, ShaderVariable } from "../shaders/CommonShader";
import { Gradient, Picker, Interpolation } from "./Gradient";
import { Color, ColorSpace } from "../utils/Color";

export class ColorRamp extends BaseNode {
  inputVariables : InputVariablesMap;

  gradient : Gradient;

  constructor() {
    super(
      "ColorRamp",
      {inputList : [
        new InputNumber(
          "fac",
          "number",
          0.5,
          0,
          1
        ),
      ]},
      new BaseOutput("color", "color"),
    );
    this.gradient = new Gradient([ {
      position : 0,
      color : new Color(ColorSpace.RGB, 0, 0, 0, 1),
      id : Math.floor(Math.random() * 1000000000)
    },
    {position : 1,
     color : new Color(ColorSpace.RGB, 255, 255, 255, 1),
     id : Math.floor(Math.random() * 1000000000)
    } ], Interpolation.Linear);
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
  }

  getMixFunctionConstant(sizeVar : string) {
    const string =
   `vec4 getGradientColorConstant(vec4[${sizeVar}] colors, float[${sizeVar}] positions, float fac) {
      vec4 color = vec4(0);
      for(int i = 0; i < ${sizeVar} - 1; i++) {
        float dist = positions[i + 1] - positions[i];
        color += step(positions[i], fac) * (1. - step(positions[i + 1], fac)) *
          colors[i];
      }
      return color;
    }`;
    return string;
  }

  getMixFunctionLinear(sizeVar : string) {
    const string =
     `vec4 getGradientColorLinear(vec4[${sizeVar}] colors, float[${sizeVar}] positions, float fac) {
      vec4 color = vec4(0);
      for(int i = 0; i < ${sizeVar} - 1; i++) {
        float dist = positions[i + 1] - positions[i];
        color += step(positions[i], fac) * (1. - step(positions[i + 1], fac)) *
          mix(colors[i], colors[i + 1], (fac - positions[i]) / dist);
      }
      return color;
    }`;
    return string;
  }

  compileLinearInterpolation (shader: CommonShader) : [string, string] {
    let facVarName = "";
    const connection : BaseOutput = this.inputVariables["fac"].getConnected();
    const prevParent : BaseNode = connection.getParent();
    [ facVarName, ] = prevParent.compile(shader, connection, OutputFormat.SCALAR);
    const pickers : Picker[] = this.gradient.getPickers();
    if (pickers[0].position !== 0) {
      pickers.unshift({
        position : 0,
        color : pickers[0].color,
        id : Math.floor(Math.random() * 1000000000)
      });
    }
    if (pickers[pickers.length - 1].position !== 1) {
      pickers.push({
        position : 1,
        color : pickers[pickers.length - 1].color,
        id : Math.floor(Math.random() * 1000000000)
      });
    }
    const numPickerVarName = shader.generateVariableID("COL_RAMP_NUM_PICKER_");
    const pickerVarName = shader.generateVariableID("col_ramp_picker_color_");
    const pickerPosVarName = shader.generateVariableID("col_ramp_picker_pos_");
    shader.addToDefines({name : numPickerVarName, value : pickers.length, type : "int"});
    let colorLine = `vec4[${numPickerVarName}] ${pickerVarName};\n`;
    let posLine = `float[${numPickerVarName}] ${pickerPosVarName};\n`;
    pickers.forEach((picker, idx) => {
      const unitRgb = picker.color.getUnitRgb();
      const alpha = picker.color.getAlpha();
      colorLine += `${pickerVarName}[${idx}] = ` +
        `vec4(${super.formatValue(unitRgb.x)}, ` +
        `${super.formatValue(unitRgb.y)}, ` +
        `${super.formatValue(unitRgb.z)}, ` +
        `${super.formatValue(alpha)});\n`;
      posLine += `${pickerPosVarName}[${idx}] = ${super.formatValue(picker.position)};\n`;
    });
    shader.addToMain(colorLine);
    shader.addToMain(posLine);
    shader.addToFunctions(
      "getGradientColorLinear(" +
        pickers.length +
        ")",
      this.getMixFunctionLinear(numPickerVarName)
    );
    const finalColorVarName = shader.generateVariableID("col_ramp_color_");
    shader.addToMain(
      `vec4 ${finalColorVarName} = ` +
        "getGradientColorLinear(" +
        `${pickerVarName}, ${pickerPosVarName}, ${facVarName});`
    );
    return [ finalColorVarName, "" ];

  }

  compileConstantInterpolation (shader : CommonShader) : [string, string] {
    let facVarName = "";
    const connection : BaseOutput = this.inputVariables["fac"].getConnected();
    const prevParent : BaseNode = connection.getParent();
    [ facVarName, ] = prevParent.compile(shader, connection, OutputFormat.SCALAR);
    const pickers : Picker[] = this.gradient.getPickers();
    if (pickers[0].position !== 0) {
      pickers.unshift({
        position : 0,
        color : pickers[0].color,
        id : Math.floor(Math.random() * 1000000000)
      });
    }
    if (pickers[pickers.length - 1].position !== 1) {
      pickers.push({
        position : 1,
        color : pickers[pickers.length - 1].color,
        id : Math.floor(Math.random() * 1000000000)
      });
    }
    const numPickerVarName = shader.generateVariableID("COL_RAMP_NUM_PICKER_");
    const pickerVarName = shader.generateVariableID("col_ramp_picker_color_");
    const pickerPosVarName = shader.generateVariableID("col_ramp_picker_pos_");
    shader.addToDefines({name : numPickerVarName, value : pickers.length, type : "int"});
    let colorLine = `vec4[${numPickerVarName}] ${pickerVarName};\n`;
    let posLine = `float[${numPickerVarName}] ${pickerPosVarName};\n`;
    pickers.forEach((picker, idx) => {
      const unitRgb = picker.color.getUnitRgb();
      const alpha = picker.color.getAlpha();
      colorLine += `${pickerVarName}[${idx}] = ` +
        `vec4(${super.formatValue(unitRgb.x)}, ` +
        `${super.formatValue(unitRgb.y)}, ` +
        `${super.formatValue(unitRgb.z)}, ` +
        `${super.formatValue(alpha)});\n`;
      posLine += `${pickerPosVarName}[${idx}] = ${super.formatValue(picker.position)};\n`;
    });
    shader.addToMain(colorLine);
    shader.addToMain(posLine);
    shader.addToFunctions(
      "getGradientColorConstant(" +
        pickers.length +
        ")",
      this.getMixFunctionConstant(numPickerVarName)
    );
    const finalColorVarName = shader.generateVariableID("col_ramp_color_");
    shader.addToMain(
      `vec4 ${finalColorVarName} = ` +
        "getGradientColorConstant(" +
        `${pickerVarName}, ${pickerPosVarName}, ${facVarName});`
    );
    return [ finalColorVarName, "" ];

  }

  compile(shader: CommonShader, output : BaseOutput, format ?: OutputFormat): [string, string] {
    if (this.inputVariables["fac"].isConnected()) {
      let varName = "";
      const rampOutName = shader.generateVariableID("col_ramp_out_");
      switch (this.gradient.getInterpolation()) {
      case Interpolation.Linear:
        [ varName, ] = this.compileLinearInterpolation(shader);
        break;
      case Interpolation.Constant:
        [ varName, ] = this.compileConstantInterpolation(shader);
        break;
      default:
        throw "[ColorRamp:compile] Invalid interpolation: " + this.gradient.getInterpolation();
      }
      switch (format) {
      case OutputFormat.SCALAR:
        shader.addToMain(`float ${rampOutName} = ` +
            `${varName}.x;`);
        break;
      case OutputFormat.VECTOR_3:
        shader.addToMain(`vec3 ${rampOutName} = ` +
            `${varName}.xyz;`);
        break;
      case OutputFormat.VECTOR_4:
      default:
        shader.addToMain(`vec4 ${rampOutName} = ` +
            `${varName};`);
        break;
      }
      return [ rampOutName, "" ];
    } else {
      const facValue : ShaderVariable =
        this.inputVariables["fac"].getValue();
      const finalColorVarName = shader.generateVariableID("col_ramp_color_");
      const color = this.gradient.getColorAt(facValue.value);
      const unitRgb = color.getUnitRgb();
      const alpha = color.getAlpha();
      switch (format) {
      case OutputFormat.SCALAR:
        shader.addToMain(`const float ${finalColorVarName} = ` +
            `${super.formatValue(unitRgb.x)};`);
        break;
      case OutputFormat.VECTOR_3:
        shader.addToMain(`const vec3 ${finalColorVarName} = ` +
            `vec3(${super.formatValue(unitRgb.x)}, ` +
            `${super.formatValue(unitRgb.y)}, ` +
            `${super.formatValue(unitRgb.z)});`);
        break;
      case OutputFormat.VECTOR_4:
      default:
        shader.addToMain(`const vec4 ${finalColorVarName} = ` +
            `vec4(${super.formatValue(unitRgb.x)}, ` +
            `${super.formatValue(unitRgb.y)}, ` +
            `${super.formatValue(unitRgb.z)}, ` +
            `${super.formatValue(alpha)});`);
        break;
      }
      return [ finalColorVarName, "" ];
    }
  }

  getGradient() : Gradient {
    return this.gradient;
  }
}
