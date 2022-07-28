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
${super.compileIns()}
// Outs 
${super.compileOuts()}
// Functions
${super.compileFunctions()}
in vec3 projPosition;
in vec3 newNormal;

// Main
void main() {
  ${super.compileMain()}
  vec3 sg = projPosition * 3.;

  //vec3 newNormal = normalize(normalMatrix * normal) * fract(sg.x);
gl_FragColor = vec4(floor(sg), 1.);
}
`;
  }
}
