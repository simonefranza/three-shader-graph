import { CommonShader } from "./CommonShader";

export class FragmentShader extends CommonShader {
  constructor() {
    super();
  }

  generateCode() : string {
    return `
    // Uniforms
${super.compileUniforms()}
// Attributes 
${super.compileAttributes()}
// Varyings
${super.compileVaryings()}
// Ins 
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
