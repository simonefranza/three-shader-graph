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
${super.compileFunctions()}
out vec3 projPosition;
out vec3 newNormal;
void main() {
  ${super.compileMain()}
projPosition = position;
vec3 sg = position * 2.;

newNormal = normalMatrix * normal;

  gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 ) + vec4(newNormal, 1.0));

}`;
  }
}
