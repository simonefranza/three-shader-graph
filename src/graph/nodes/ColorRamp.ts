import { BaseNode } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { InputNumber } from "./InputNumber";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ShaderVariable, FunctionsMap } from "../shaders/CommonShader";
import { Vector3, Vector4 } from "three";
import { Gradient, Picker, Interpolation } from "./Gradient";

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
          1),
      ]},
      new BaseOutput("color", "color"),
    );
    this.gradient = new Gradient([{position: 0, color : new Vector4(1, 0, 0, 1)},
      {position: 0.6, color : new Vector4(0.5, 0.7, 0, 1)},
      {position: 1, color : new Vector4(0, 0, 1, 1)}], Interpolation.Linear);
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
  }
  getMixFunction(sizeVar : string) {
   let string = 
        `vec4 getGradientColor(vec4[${sizeVar}] colors, float[${sizeVar}] positions, float fac) {
      vec4 color = vec4(0);
      for(int i = 0; i < ${sizeVar} - 1; i++) {
        float dist = positions[i + 1] - positions[i];
        color += step(positions[i], fac) * (1. - step(positions[i + 1], fac)) * mix(colors[i], colors[i + 1], (fac - positions[i]) / dist);
      }
      return color;
    }`;
    return string;
  }

  compile(vert: VertexShader, frag : FragmentShader): [string, string] {
    let facVarName = "";
    if (this.inputVariables["fac"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["fac"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      [ facVarName, ] = prevParent.compile(vert, frag);
      let pickers : Picker[] = this.gradient.getPickers();
      if (pickers[0].position !== 0) {
        pickers.unshift({position: 0, color: pickers[0].color});
      }
      if (pickers[pickers.length - 1].position !== 1) {
        pickers.push({position: 1, color: pickers[pickers.length - 1].color});
      }
      let numPickerVarName = vert.generateVariableID("COL_RAMP_NUM_PICKER_");
      let pickerVarName = vert.generateVariableID("col_ramp_picker_color_");
      let pickerPosVarName = vert.generateVariableID("col_ramp_picker_pos_");
      frag.addToDefines({name: numPickerVarName, value: pickers.length, type: "int"});
      let colorLine = `vec4[${numPickerVarName}] ${pickerVarName};\n`;
      let posLine = `float[${numPickerVarName}] ${pickerPosVarName};\n`;
      pickers.forEach((picker, idx) => {
        colorLine += `${pickerVarName}[${idx}] = vec4(${super.formatValue(picker.color.x)}, ${super.formatValue(picker.color.y)}, ${super.formatValue(picker.color.z)}, ${super.formatValue(picker.color.w)});\n`;
        posLine += `${pickerPosVarName}[${idx}] = ${super.formatValue(picker.position)};\n`;
      });
      frag.addToMain(colorLine);
      frag.addToMain(posLine);
      frag.addToFunctions("getGradientColor(" + pickers.length + ")", this.getMixFunction(numPickerVarName));
      let finalColorVarName = vert.generateVariableID("col_ramp_color_");
      frag.addToMain(
        `vec4 ${finalColorVarName} = getGradientColor(${pickerVarName}, ${pickerPosVarName}, ${facVarName}.x);`);
      return [ finalColorVarName, "" ];
    } else {
      const facValue : ShaderVariable =
        this.inputVariables["fac"].getValue();
      let finalColorVarName = vert.generateVariableID("col_ramp_color_");
      console.log(facValue.value, "val");
      let color = this.gradient.getColorAt(facValue.value);
      const line : string = 
        `const vec4 ${finalColorVarName} = vec4(${super.formatValue(color.x)},${super.formatValue(color.y)},${super.formatValue(color.z)},${super.formatValue(color.w)});`;
      frag.addToMain(line);
      return [ finalColorVarName, "" ];
    }
  }
}
