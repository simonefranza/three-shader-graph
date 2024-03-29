import { BaseNode, OutputFormat } from "./BaseNode";
import { BaseOutput } from "./BaseOutput";
import { BaseInput, InputVariablesMap } from "./BaseInput";
import { InputNumber } from "./InputNumber";
import { ShaderVariable, FunctionsMap, CommonShader } from "../shaders/CommonShader";

export class VoronoiTexture extends BaseNode {
  inputVariables : InputVariablesMap;

  noiseFunction : FunctionsMap;

  featureOutput : FeatureOutput;

  smoothness: number;

  constructor() {
    super(
      "Voronoi Texture",
      {inputList : [
        new InputNumber(
          "scale",
          "number",
          5
        ),
        // from 0 to 1
        //new InputNumber(
        //  "smoothness",
        //  "number",
        //  0.5,
        //  0,
        //  5
        //),
        // from 0 to 1
        new InputNumber(
          "randomness",
          "number",
          1,
          0,
          1
        ),
      ]},
      new BaseOutput("color", "color"),
    );
    this.inputVariables = {};
    const list : BaseInput[] = super.getInputs().inputList;
    list.forEach((input : BaseInput) => {
      this.inputVariables[input.getName()] = input;
    });
    this.featureOutput = FeatureOutput.F1;
    this.smoothness = 0.5;

    this.noiseFunction = {
      "hash(vec3)" :
    `vec3 hash( vec3 p ){
  return fract(sin(vec3( dot(p,vec3(1.0,57.0,113.0)), 
                         dot(p,vec3(57.0,113.0,1.0)),
                         dot(p,vec3(113.0,1.0,57.0))))*43758.5453);

}`,
      "voronoi(vec3)" :
      `vec3 voronoi( const in vec3 x, float randomness) {
      //vec3 voronoi( const in vec3 x, float randomness, float smoothness ) {
    vec3 p = floor( x );
    vec3 f = fract( x );
    //float w = smoothness;

    float id = 0.0;
    vec2 res = vec2( 100.0 );
    for( int k=-1; k<=1; k++ ) {
        for( int j=-1; j<=1; j++ ) {
            for( int i=-1; i<=1; i++ ) {
                vec3 b = vec3( float(i), float(j), float(k) );
                vec3 r = vec3( b ) - f + randomness * hash( p + b );
                float d = dot( r, r );
                //float h = smoothstep( -1.0, 1.0, (res.x-d)/w );
                //float newD = mix( res.x, d, h ) - h*(1.0-h)*w/(1.0+3.0*w);

                //if( newD < res.x ) {
                if( d < res.x ) {
                    id = dot( p+b, vec3(1.0,57.0,113.0 ) );
                    //res = vec2( newD, res.x );         
                    res = vec2( d, res.x );         
                }
                //else if( newD < res.y ) {
                else if( d < res.y ) {
                    res.y = d;
                }
            }
        }
    }

    return vec3( sqrt( res ), abs(id) );
}`,
      "mod289(vec3)" :
      `
// Cellular noise ("Worley noise") in 3D in GLSL.
// Copyright (c) Stefan Gustavson 2011-04-19. All rights reserved.
// This code is released under the conditions of the MIT license.
// See LICENSE file for details.
// https://github.com/stegu/webgl-noise

// Modulo 289 without a division (only multiplications)
vec3 mod289(vec3 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}`,

      "mod7(vec3)" :
      `vec3 mod7(vec3 x) {
return x - floor(x * (1.0 / 7.0)) * 7.0;
}`,
      "pemute(vec3)" :
      `vec3 permute(vec3 x, float randomness) {
//return mod289((34.0 * x + 10.0) * x);
  return mod289(randomness * (34.0 * x + 10.0) * x + (1.0 - randomness) * x);
}`,
      "cellular(vec3)" :

      `// Cellular noise, returning F1 and F2 in a vec2.
// 3x3x3 search region for good F2 everywhere, but a lot
// slower than the 2x2x2 version.
// The code below is a bit scary even to its author,
// but it has at least half decent performance on a
// modern GPU. In any case, it beats any software
// implementation of Worley noise hands down.
//
// Adapted for randomness

vec2 cellular(vec3 P, float randomness) {
#define K 0.142857142857 // 1/7
#define Ko 0.428571428571 // 1/2-K/2
#define K2 0.020408163265306 // 1/(7*7)
#define Kz 0.166666666667 // 1/6
#define Kzo 0.416666666667 // 1/2-1/6*2
#define jitter 1.0 // smaller jitter gives more regular pattern

vec3 Pi = mod289(floor(P));
vec3 Pf = fract(P) - 0.5;

vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

vec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0), randomness);
vec3 p1 = permute(p + Pi.y - 1.0, randomness);
vec3 p2 = permute(p + Pi.y, randomness);
vec3 p3 = permute(p + Pi.y + 1.0, randomness);

vec3 p11 = permute(p1 + Pi.z - 1.0, randomness);
vec3 p12 = permute(p1 + Pi.z, randomness);
vec3 p13 = permute(p1 + Pi.z + 1.0, randomness);

vec3 p21 = permute(p2 + Pi.z - 1.0, randomness);
vec3 p22 = permute(p2 + Pi.z, randomness);
vec3 p23 = permute(p2 + Pi.z + 1.0, randomness);

vec3 p31 = permute(p3 + Pi.z - 1.0, randomness);
vec3 p32 = permute(p3 + Pi.z, randomness);
vec3 p33 = permute(p3 + Pi.z + 1.0, randomness);

vec3 ox11 = fract(p11*K) - Ko;
vec3 oy11 = mod7(floor(p11*K))*K - Ko;
vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

vec3 ox12 = fract(p12*K) - Ko;
vec3 oy12 = mod7(floor(p12*K))*K - Ko;
vec3 oz12 = floor(p12*K2)*Kz - Kzo;

vec3 ox13 = fract(p13*K) - Ko;
vec3 oy13 = mod7(floor(p13*K))*K - Ko;
vec3 oz13 = floor(p13*K2)*Kz - Kzo;

vec3 ox21 = fract(p21*K) - Ko;
vec3 oy21 = mod7(floor(p21*K))*K - Ko;
vec3 oz21 = floor(p21*K2)*Kz - Kzo;

vec3 ox22 = fract(p22*K) - Ko;
vec3 oy22 = mod7(floor(p22*K))*K - Ko;
vec3 oz22 = floor(p22*K2)*Kz - Kzo;

vec3 ox23 = fract(p23*K) - Ko;
vec3 oy23 = mod7(floor(p23*K))*K - Ko;
vec3 oz23 = floor(p23*K2)*Kz - Kzo;

vec3 ox31 = fract(p31*K) - Ko;
vec3 oy31 = mod7(floor(p31*K))*K - Ko;
vec3 oz31 = floor(p31*K2)*Kz - Kzo;

vec3 ox32 = fract(p32*K) - Ko;
vec3 oy32 = mod7(floor(p32*K))*K - Ko;
vec3 oz32 = floor(p32*K2)*Kz - Kzo;

vec3 ox33 = fract(p33*K) - Ko;
vec3 oy33 = mod7(floor(p33*K))*K - Ko;
vec3 oz33 = floor(p33*K2)*Kz - Kzo;

vec3 dx11 = Pfx + jitter*ox11;
vec3 dy11 = Pfy.x + jitter*oy11;
vec3 dz11 = Pfz.x + jitter*oz11;

vec3 dx12 = Pfx + jitter*ox12;
vec3 dy12 = Pfy.x + jitter*oy12;
vec3 dz12 = Pfz.y + jitter*oz12;

vec3 dx13 = Pfx + jitter*ox13;
vec3 dy13 = Pfy.x + jitter*oy13;
vec3 dz13 = Pfz.z + jitter*oz13;

vec3 dx21 = Pfx + jitter*ox21;
vec3 dy21 = Pfy.y + jitter*oy21;
vec3 dz21 = Pfz.x + jitter*oz21;

vec3 dx22 = Pfx + jitter*ox22;
vec3 dy22 = Pfy.y + jitter*oy22;
vec3 dz22 = Pfz.y + jitter*oz22;

vec3 dx23 = Pfx + jitter*ox23;
vec3 dy23 = Pfy.y + jitter*oy23;
vec3 dz23 = Pfz.z + jitter*oz23;

vec3 dx31 = Pfx + jitter*ox31;
vec3 dy31 = Pfy.z + jitter*oy31;
vec3 dz31 = Pfz.x + jitter*oz31;

vec3 dx32 = Pfx + jitter*ox32;
vec3 dy32 = Pfy.z + jitter*oy32;
vec3 dz32 = Pfz.y + jitter*oz32;

vec3 dx33 = Pfx + jitter*ox33;
vec3 dy33 = Pfy.z + jitter*oy33;
vec3 dz33 = Pfz.z + jitter*oz33;

vec3 d11 = dx11 * dx11 + dy11 * dy11 + dz11 * dz11;
vec3 d12 = dx12 * dx12 + dy12 * dy12 + dz12 * dz12;
vec3 d13 = dx13 * dx13 + dy13 * dy13 + dz13 * dz13;
vec3 d21 = dx21 * dx21 + dy21 * dy21 + dz21 * dz21;
vec3 d22 = dx22 * dx22 + dy22 * dy22 + dz22 * dz22;
vec3 d23 = dx23 * dx23 + dy23 * dy23 + dz23 * dz23;
vec3 d31 = dx31 * dx31 + dy31 * dy31 + dz31 * dz31;
vec3 d32 = dx32 * dx32 + dy32 * dy32 + dz32 * dz32;
vec3 d33 = dx33 * dx33 + dy33 * dy33 + dz33 * dz33;

// Sort out the two smallest distances (F1, F2)
#if 0
// Cheat and sort out only F1
vec3 d1 = min(min(d11,d12), d13);
vec3 d2 = min(min(d21,d22), d23);
vec3 d3 = min(min(d31,d32), d33);
vec3 d = min(min(d1,d2), d3);
d.x = min(min(d.x,d.y),d.z);
return vec2(sqrt(d.x)); // F1 duplicated, no F2 computed
#else
// Do it right and sort out both F1 and F2
vec3 d1a = min(d11, d12);
d12 = max(d11, d12);
d11 = min(d1a, d13); // Smallest now not in d12 or d13
d13 = max(d1a, d13);
d12 = min(d12, d13); // 2nd smallest now not in d13
vec3 d2a = min(d21, d22);
d22 = max(d21, d22);
d21 = min(d2a, d23); // Smallest now not in d22 or d23
d23 = max(d2a, d23);
d22 = min(d22, d23); // 2nd smallest now not in d23
vec3 d3a = min(d31, d32);
d32 = max(d31, d32);
d31 = min(d3a, d33); // Smallest now not in d32 or d33
d33 = max(d3a, d33);
d32 = min(d32, d33); // 2nd smallest now not in d33
vec3 da = min(d11, d21);
d21 = max(d11, d21);
d11 = min(da, d31); // Smallest now in d11
d31 = max(da, d31); // 2nd smallest now not in d31
d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
d12 = min(d12, d21); // 2nd smallest now not in d21
d12 = min(d12, d22); // nor in d22
d12 = min(d12, d31); // nor in d31
d12 = min(d12, d32); // nor in d32
d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
d11.y = min(d11.y,d12.z); // Only two more to go
d11.y = min(d11.y,d11.z); // Done! (Phew!)
return sqrt(d11.xy); // F1, F2
#endif
}`
    };
  }

  setFeatureOutput(fOut : FeatureOutput) {
    this.featureOutput = fOut;
  }

  getFeatureOutput() : FeatureOutput {
    return this.featureOutput;
  }

  compileF1F2(shader : CommonShader, outVN : string,
      noiseVN : string, format ?: OutputFormat) {
    let coord = "";
    switch (this.featureOutput) {
    //case FeatureOutput.SMOOTH_F1:
    case FeatureOutput.F1:
      coord = "x";
      break;
    case FeatureOutput.F2:
      coord = "y";
      break;
    default:
      throw "[VoronoiTexture:compileF1F2] Invalid FeatureOutput: " + this.featureOutput;
    }
    switch (format) {
    case OutputFormat.SCALAR:
      shader.addToMain(`float ${outVN} = ${noiseVN}.${coord};`);
      break;
    case OutputFormat.VECTOR_3:
      shader.addToMain(`vec3 ${outVN} = vec3(${noiseVN}.${coord});`);
      break;
    case OutputFormat.VECTOR_4:
    default:
      shader.addToMain(`vec4 ${outVN} = vec4(vec3(${noiseVN}.${coord}), 1);`);
      break;
    }
  }

  compile(shader: CommonShader, output : BaseOutput, format ?: OutputFormat): [string, string] {
    const scaleValue : ShaderVariable =
      this.inputVariables["scale"].getValue();
    const randomnessValue : ShaderVariable =
      this.inputVariables["randomness"].getValue();
    //const smoothnessValue : ShaderVariable =
    //  this.inputVariables["smoothness"].getValue();
    const noiseVN = shader.generateVariableID("vt_noise_");
    const randomnessVN = shader.generateVariableID("nt_rand_");
    //const smoothnessVN = shader.generateVariableID("nt_smooth_");
    const scaleVN = shader.generateVariableID("nt_scale_");
    const finalColor = shader.generateVariableID("vt_out_");
    shader.addAllToFunctions(this.noiseFunction);
    shader.addToMain(`const float ${randomnessVN} = ` +
      `${super.formatValue(randomnessValue.value)};`);
    shader.addToMain(`const float ${scaleVN} = ` +
      `${super.formatValue(scaleValue.value)};`);
    //    shader.addToMain(`vec2 ${noiseVN} = cellular(projPosition * ` +
    //        `${scaleVN}, ${randomnessVN});`);
    switch (this.featureOutput) {
    case FeatureOutput.F1:
    case FeatureOutput.F2:
      shader.addToMain(`vec3 ${noiseVN} = ` +
          //`voronoi(projPosition * ${scaleVN}, ${randomnessVN}, 0.0);`);
          `voronoi(projPosition * ${scaleVN}, ${randomnessVN});`);
      this.compileF1F2(shader, finalColor, noiseVN, format);
      break;
    //case FeatureOutput.SMOOTH_F1:
    //  shader.addToMain(`const float ${smoothnessVN} = ` +
    //    `${super.formatValue(smoothnessValue.value)};`);
    //  shader.addToMain(`vec3 ${noiseVN} = ` +
    //      `voronoi(projPosition * ${scaleVN}, ` +
    //      //`${randomnessVN}, ${super.formatValue(smoothnessValue.value)});`);
    //      `${randomnessVN});`);
    //  this.compileF1F2(shader, finalColor, noiseVN, format);
    //  break;
    default:
      throw "[VoronoiTexture:compile] Invalid FeatureOutput: " + this.featureOutput;
    }
    return [ finalColor, "" ];
  }

}

export enum FeatureOutput {
  F1,
  F2,
  //SMOOTH_F1,
}
