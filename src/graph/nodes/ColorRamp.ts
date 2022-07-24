import { BaseNode } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { InputNumber } from "./InputNumber";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ShaderVariable } from "../shaders/CommonShader";
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
    this.gradient = new Gradient([ {position : 0, color : new Color(ColorSpace.RGB, 0, 0, 0, 1)},
      {position : 1, color : new Color(ColorSpace.RGB, 255, 255, 255, 1)} ], Interpolation.Linear);
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

  compileLinearInterpolation (vert : VertexShader, frag: FragmentShader) : [string, string] {
    let facVarName = "";
    const connection : BaseOutput = this.inputVariables["fac"].getConnected();
    const prevParent : BaseNode = connection.getParent();
    [ facVarName, ] = prevParent.compile(vert, frag);
    const pickers : Picker[] = this.gradient.getPickers();
    if (pickers[0].position !== 0) {
      pickers.unshift({position : 0, color : pickers[0].color});
    }
    if (pickers[pickers.length - 1].position !== 1) {
      pickers.push({position : 1, color : pickers[pickers.length - 1].color});
    }
    const numPickerVarName = vert.generateVariableID("COL_RAMP_NUM_PICKER_");
    const pickerVarName = vert.generateVariableID("col_ramp_picker_color_");
    const pickerPosVarName = vert.generateVariableID("col_ramp_picker_pos_");
    frag.addToDefines({name : numPickerVarName, value : pickers.length, type : "int"});
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
    frag.addToMain(colorLine);
    frag.addToMain(posLine);
    frag.addToFunctions(
      "getGradientColorLinear(" +
        pickers.length +
        ")",
      this.getMixFunctionLinear(numPickerVarName)
    );
    const finalColorVarName = vert.generateVariableID("col_ramp_color_");
    frag.addToMain(
      `vec4 ${finalColorVarName} = ` +
        "getGradientColorLinear(" +
        `${pickerVarName}, ${pickerPosVarName}, ${facVarName}.x);`
    );
    return [ finalColorVarName, "" ];

  }

  compileConstantInterpolation (vert : VertexShader, frag: FragmentShader) : [string, string] {
    let facVarName = "";
    const connection : BaseOutput = this.inputVariables["fac"].getConnected();
    const prevParent : BaseNode = connection.getParent();
    [ facVarName, ] = prevParent.compile(vert, frag);
    const pickers : Picker[] = this.gradient.getPickers();
    if (pickers[0].position !== 0) {
      pickers.unshift({position : 0, color : pickers[0].color});
    }
    if (pickers[pickers.length - 1].position !== 1) {
      pickers.push({position : 1, color : pickers[pickers.length - 1].color});
    }
    const numPickerVarName = vert.generateVariableID("COL_RAMP_NUM_PICKER_");
    const pickerVarName = vert.generateVariableID("col_ramp_picker_color_");
    const pickerPosVarName = vert.generateVariableID("col_ramp_picker_pos_");
    frag.addToDefines({name : numPickerVarName, value : pickers.length, type : "int"});
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
    frag.addToMain(colorLine);
    frag.addToMain(posLine);
    frag.addToFunctions(
      "getGradientColorConstant(" +
        pickers.length +
        ")",
      this.getMixFunctionConstant(numPickerVarName)
    );
    const finalColorVarName = vert.generateVariableID("col_ramp_color_");
    frag.addToMain(
      `vec4 ${finalColorVarName} = ` +
        "getGradientColorConstant(" +
        `${pickerVarName}, ${pickerPosVarName}, ${facVarName}.x);`
    );
    return [ finalColorVarName, "" ];

  }

  compile(vert: VertexShader, frag : FragmentShader): [string, string] {
    if (this.inputVariables["fac"].isConnected()) {
      switch (this.gradient.getInterpolation()) {
      case Interpolation.Linear:
        return this.compileLinearInterpolation(vert, frag);
        break;
      case Interpolation.Constant:
        return this.compileConstantInterpolation(vert, frag);
        break;
      default:
        throw "[ColorRamp:compile] Invalid interpolation: " + this.gradient.getInterpolation();
      }
    } else {
      const facValue : ShaderVariable =
        this.inputVariables["fac"].getValue();
      const finalColorVarName = vert.generateVariableID("col_ramp_color_");
      console.log(facValue.value, "val");
      const color = this.gradient.getColorAt(facValue.value);
      const unitRgb = color.getUnitRgb();
      const alpha = color.getAlpha();
      const line  =
        `const vec4 ${finalColorVarName} = ` +
          `vec4(${super.formatValue(unitRgb.x)}, ` +
          `${super.formatValue(unitRgb.y)}, ` +
          `${super.formatValue(unitRgb.z)}, ` +
          `${super.formatValue(alpha)});`;
      frag.addToMain(line);
      return [ finalColorVarName, "" ];
    }
  }

  getGradient() : Gradient {
    return this.gradient;
  }
}
