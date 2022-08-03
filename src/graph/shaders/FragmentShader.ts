import { CommonShader } from "./CommonShader";

export class FragmentShader extends CommonShader {
  constructor() {
    super();
  }

  generateCode() : string {
    return `
${super.compileDefines()}
// Uniforms
${super.compileUniforms()}
// Attributes 
${super.compileAttributes()}
// Varyings
${super.compileVaryings()}
// Ins 
in vec3 projPosition;
${super.compileIns()}
// Outs 
${super.compileOuts()}
// Functions
${super.compileFunctions()}

// Main
void main() {
  ${super.compileMain()}
}
`;
  }
}
