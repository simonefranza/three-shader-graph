import { BaseNode } from "./BaseNode";
import { BaseOutput, OutputList } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ShaderVariable } from "../shaders/CommonShader";
import { Vector4 } from "three";

export class OutputNode extends BaseNode {
  inputVariables : InputVariablesMap;

  constructor() {
    super(
      "MaterialOutput",
      new BaseInput(
        "surface",
        "shader",
        "shader",
        <ShaderVariable>{
          name : "color",
          type : "vec4",
          value : new Vector4(0, 0, 0, 1)
        }
      ),
      <OutputList>{ outputList : [] }
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
  }

  compile(vert: VertexShader, frag : FragmentShader): [string, string] {
    if (this.inputVariables["surface"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["surface"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      const [ prevVert, ] = prevParent.compile(vert, frag);
      frag.addToMain(`gl_FragColor = ${prevVert};`);
    } else {
      const colorVar : ShaderVariable =
        this.inputVariables["surface"].getValue();
      console.log("color", colorVar);
      const lines : string = `gl_FragColor = ${colorVar.type}` +
          `(${colorVar.value.x}, ${colorVar.value.y}, ` +
          `${colorVar.value.z}, ${colorVar.value.w});`;
      frag.addToMain(lines);
    }

    return [ vert.generateCode(), frag.generateCode() ];
  }
}
