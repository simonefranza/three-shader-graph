import { CommonShader } from "./CommonShader";

export class VertexShader extends CommonShader {
  constructor() {
    super();
  }

  generateCode() : string {
    return `${super.compileUniforms()}
${super.compileAttributes()}
${super.compileVaryings()}
${super.compileIns()}
${super.compileOuts()}
${super.compileFunctions()}
void main() {
  ${super.compileMain()}
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}`;
  }
}
