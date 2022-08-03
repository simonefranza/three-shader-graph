import { CommonShader } from "./CommonShader";

export class VertexShader extends CommonShader {
  constructor() {
    super();
  }

  generateCode() : string {
    return `
${super.compileDefines()}
${super.compileUniforms()}
${super.compileAttributes()}
${super.compileVaryings()}
${super.compileIns()}
${super.compileOuts()}
out vec3 projPosition;
${super.compileFunctions()}
void main() {
  projPosition = position;
  ${super.compileMain()}

}`;
  }
}
