import { BaseNode } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { VertexShader } from "../shaders/VertexShader";
import { FragmentShader } from "../shaders/FragmentShader";
import { ShaderVariable, FunctionsMap } from "../shaders/CommonShader";
import { Vector3 } from "three";

export class NoiseTexture extends BaseNode {
  inputVariables : InputVariablesMap;

  noiseFunction : FunctionsMap;

  customNoiseFunction : string;

  constructor() {
    super(
      "Noise Texture",
      {inputList : [
        new BaseInput(
          "scale",
          "number",
          "number",
        <ShaderVariable>{
          name : "scale",
          type : "float",
          value : 5
        }
        ),
        // from 0 to 15, AKA octaves
        new BaseInput(
          "detail",
          "number",
          "number",
        <ShaderVariable>{
          name : "detail",
          type : "float",
          value : 0
        }
        ),
        // from 0 to 1, AKA persistance
        new BaseInput(
          "roughness",
          "number",
          "number",
        <ShaderVariable>{
          name : "roughness",
          type : "float",
          value : 0.5
        }
        ),
        new BaseInput(
          "distortion",
          "number",
          "number",
        <ShaderVariable>{
          name : "distortion",
          type : "float",
          value : 0.0
        }
        )
      ]},
      new BaseOutput("color", "color"),
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
    this.customNoiseFunction =
      `float noise(vec3 v) {
  float F = 1. / 3.;
  float factor = (v.x + v.y + v.z) * F;
  vec3 v_ = vec3(v.x + factor, v.y + factor, v.z + factor);
  vec3 v_b = floor(v_);
  vec3 v_i = fract(v_);
  float xGreaterY = step(v_i[1], v_i[0]);
  float xGreaterZ = step(v_i[2], v_i[0]);
  float yGreaterZ = step(v_i[2], v_i[1]);
  float greatest = xGreaterY * xGreaterZ * 0. + yGreaterZ * (1. - xGreaterY) * 1. +
      (1. - yGreaterZ) * (1. - xGreaterZ) * 2.;

  float mid = (xGreaterY + xGreaterZ) * ((1. - xGreaterY) + (1. - xGreaterZ)) * 0. + 
      (yGreaterZ + (1. - xGreaterY)) * ((1. - yGreaterZ) + xGreaterY) * 1. + 
      ((1. - yGreaterZ) + (1. - xGreaterZ)) * (yGreaterZ + xGreaterZ) * 2.;

  // Not really needed since last vector is always 1,1,1
  //float smallest = (1. - xGreaterY) * (1. - xGreaterZ) * 0. + (1. - yGreaterZ) * xGreaterY * 1. +
  //    yGreaterZ * xGreaterZ * 2.;
  vec3 empty = vec3(0, 0, 0);
  vec3 first = empty;

  empty[int(greatest)] += 1.;
  vec3 second = empty;

  empty[int(mid)] += 1.;
  vec3 third = empty;

  vec3 fourth = vec3(1, 1, 1);

  return 0.;
}`;
    this.noiseFunction = {
      "mod289(vec3)" : 
    `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,
      "mod289(vec4)" : 
`vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,
      "permute" :

`vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}`,
      "taylorInvSqrt(vec4)" :

`vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}`,
      "snoise(vec3)" :

`float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105. * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

  //
  // END
  //
`,
      "fbm" :

`// Author: Simone Franza
// Inspired from https://thebookofshaders.com/13/
float fbm(
    const float octaveInt,
    const float octaveFrac,
    vec3 v,
    const float persistance,
    float scale) {
  float maxAmp = 0.;
  float amp = .5;
  float freq = scale;
  float noise = 0.;

  for (float i = 0.; i < octaveInt + 1.; i++) {
    noise += snoise(v * freq) * amp;
    maxAmp += amp;
    amp *= persistance;
    freq *= 2.;
  }
  
  if (octaveFrac > 0.) {
    float newNoise = noise + snoise(v * freq) * amp;
    maxAmp += amp;
    noise = mix(noise, newNoise, octaveFrac);
  }

  noise /= maxAmp;
  noise /= 2.35;
  noise = noise * 0.5 + 0.5;

  return noise;
}
`};
  }
  //TODO add fbm functions ad hoc (https://www.shadertoy.com/view/lsl3RH) fbm1 fbm2 fbm3 ...

  compile(vert: VertexShader, frag : FragmentShader): [string, string] {
    const scaleValue : ShaderVariable =
      this.inputVariables["scale"].getValue();
    const detailValue : ShaderVariable =
      this.inputVariables["detail"].getValue();
    const roughnessValue : ShaderVariable =
      this.inputVariables["roughness"].getValue();
    const distortionValue : ShaderVariable =
      this.inputVariables["distortion"].getValue();

    //const lines = `gl_FragColor = ${colorVar.type}` +
    //  `(${colorVar.value.x}, ${colorVar.value.y}, ` +
    //  `${colorVar.value.z}, ${colorVar.value.w}) + ` +
    //  `${emissionColorVar.type}(${emissionColorVar.value.x}, ` +
    //  `${emissionColorVar.value.y}, ` +
    //  `${emissionColorVar.value.z}, ${emissionColorVar.value.w});`;
    vert.addToOuts(<ShaderVariable>{
      name : "projPosition",
      type : "vec3",
      value : new Vector3(0, 0, 0)
    });
    vert.addToMain("projPosition = position;");
    //vert.addToMain(
    //  `projPosition = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`);

    frag.addToIns(<ShaderVariable>{
      name : "projPosition",
      type : "vec3",
      value : new Vector3(0, 0, 0)
    });
    //const lines = `
    //  gl_FragColor = vec4(vec3(distance(vec3(0.5, 0.5, 0.5),projPosition * 2.)), 1);`;
    //frag.addToMain(lines);
    const stVar = frag.generateVariableID("nt_st_");
    const scaleVar = frag.generateVariableID("nt_scale_");
    const octaveIntVar = frag.generateVariableID("nt_octave_int_");
    const octaveFracVar = frag.generateVariableID("nt_octave_frac_");
    const persistanceVar = frag.generateVariableID("nt_persistance_");
    const distortionVar = frag.generateVariableID("nt_distortion_");
    const qVar = frag.generateVariableID("nt_q_");
    const fVar = frag.generateVariableID("nt_f_");
    const finalColor = frag.generateVariableID("nt_color_");
    frag.addAllToFunctions(this.noiseFunction);
    frag.addToMain(`
    vec3 ${stVar} = projPosition;
    // Scale the space in order to see the function
    float ${scaleVar} = ${super.formatValue(scaleValue.value)};
    const float ${octaveIntVar} = ${super.formatValue(Math.floor(detailValue.value))};
    const float ${octaveFracVar} = ${super.formatValue(detailValue.value % 1)};
    const float ${persistanceVar} = ${super.formatValue(roughnessValue.value)};
    const float ${distortionVar} = ${super.formatValue(distortionValue.value / 10)};

    // Derived from https://thebookofshaders.com/13/
    vec3 ${qVar} = vec3(
        fbm(
        ${octaveIntVar},
        ${octaveFracVar},
        ${stVar},
        ${persistanceVar},
        ${scaleVar}
        ),
        fbm(
        ${octaveIntVar},
        ${octaveFracVar},
        ${stVar}+vec3(2.3, 10.5, 60.),
        ${persistanceVar},
        ${scaleVar}
        ),
        fbm(
        ${octaveIntVar},
        ${octaveFracVar},
        ${stVar}+vec3(1.3, 2.5, 6.),
        ${persistanceVar},
        ${scaleVar}
    ));

    float ${fVar} = fbm(
      ${octaveIntVar},
      ${octaveFracVar},
      ${stVar} + ${distortionVar} * ${qVar},
      ${persistanceVar},
      ${scaleVar}
    );

    vec4 ${finalColor} = vec4(vec3(${fVar}), 1);`);
    return [ finalColor, "" ];
  }

  setInputValue(name : string, value: any) {
    this.inputVariables[name].setValue(value);
  }
}
