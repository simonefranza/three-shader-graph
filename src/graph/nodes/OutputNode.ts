import { BaseNode, OutputFormat } from "./BaseNode";
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
      {inputList : [ new BaseInput(
        "surface",
        "shader",
        "shader",
        <ShaderVariable>{
          name : "color",
          type : "vec4",
          value : new Vector4(0, 0, 0, 1)
        }
      ),
      new BaseInput(
        "displacement",
        "displacement",
        "displacement",
        <ShaderVariable>{
          name : "displacement",
          type : "number",
          value : 0
        }
      )
      ],
      },
      <OutputList>{ outputList : [] }
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
  }

  compileSurface(vert: VertexShader, frag : FragmentShader) {
    if (this.inputVariables["surface"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["surface"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      const [ prevVert, ] = prevParent.compile(frag, connection, OutputFormat.VECTOR_4);
      frag.addToMain(`gl_FragColor = ${prevVert};`);
    } else {
      const colorVar : ShaderVariable =
      this.inputVariables["surface"].getValue();
      const lines : string = `gl_FragColor = ${colorVar.type}` +
        `(${colorVar.value.x}, ${colorVar.value.y}, ` +
        `${colorVar.value.z}, ${colorVar.value.w});`;
      frag.addToMain(lines);
    }
  }

  compileDisplacement(vert: VertexShader) {
    if (this.inputVariables["displacement"].isConnected()) {
      const connection : BaseOutput = this.inputVariables["displacement"].getConnected();
      const prevParent : BaseNode = connection.getParent();
      const [ prevVert, ] = prevParent.compile(vert, connection, OutputFormat.SCALAR);
      vert.addToMain("vec3 normNormal = normalize(normalMatrix * normal);");
      vert.addToMain(`gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 )
        + vec4(${prevVert} * normNormal, 1.0));`);
    } else {
      const displacementVar : ShaderVariable = this.inputVariables["displacement"].getValue();
      vert.addToMain("vec3 normNormal = normalize(normalMatrix * normal);");
      vert.addToMain(`gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 )
        + vec4(${super.formatValue(displacementVar.value)} * normNormal, 1.0));`);
    }
  }

  compileOutput(vert: VertexShader, frag : FragmentShader): [string, string] {
    this.compileSurface(vert, frag);
    this.compileDisplacement(vert);
    return [ vert.generateCode(), frag.generateCode() ];
  }

  compile() : [string, string] {
    throw "[OutputNode:compile] This method should not be used, please call compileOutput";
  }
}
