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
void main() {
  ${super.compileMain()}
//vec3 sg = position * 3.14 * 2.;
//
//vec3 newNormal = normalize(normalMatrix * normal);
//
//  gl_Position = projectionMatrix * (modelViewMatrix * vec4( position, 1.0 ) + 
//vec4(sin(sg.x) * newNormal, 1.0));
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}`;
  }
}
