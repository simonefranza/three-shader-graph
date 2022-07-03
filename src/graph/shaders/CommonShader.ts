import { Vector3 } from "three";

export interface FunctionsMap {
  [key:string] : string
}

export abstract class CommonShader {
  #defines : ShaderVariable[]; 

  #varyings: ShaderVariable[];

  #attributes: ShaderVariable[];

  #uniforms: ShaderVariable[];

  #main: string[];

  #functions: FunctionsMap;

  #in: ShaderVariable[];

  #out: ShaderVariable[];

  #variableList : string[];

  constructor() {
    this.#defines = [];
    this.#varyings = [];
    this.#attributes = [];
    this.#uniforms = [];
    this.#main = [];
    this.#functions = {};
    this.#in = [];
    this.#out = [];
    this.#variableList = [];
  }

  abstract generateCode() : string;

  getDefines() {
    return this.#defines;
  }

  getVaryings() {
    return this.#varyings;
  }

  getAttributes() {
    return this.#attributes;
  }

  getUniforms() {
    return this.#uniforms;
  }

  getMain() {
    return this.#main;
  }

  getFunctions() {
    return this.#functions;
  }

  generateVariableID(prefix : string) {
    let counter = 0;
    this.#variableList.forEach((name) => {
      if (name.startsWith(prefix)) {
        counter++;
      }
    });
    const newName = prefix + counter;
    this.#variableList.push(newName);
    return newName;
  }

  compileVariables(type : string, variables: ShaderVariable[]) : string {
    let str = "";
    variables.forEach((variable : ShaderVariable) => {
      str += type + " " + variable.type + " " + variable.name + ";\n";
    });
    return str;
  }

  compileDefines() : string {
    let str = "";
    this.#defines.forEach((variable : ShaderVariable) => {
      str += "#define " + variable.name + " " + variable.value + "\n";
    });
    return str;
  }

  compileVaryings() : string {
    return this.compileVariables("varying", this.#varyings);
  }

  compileAttributes() : string {
    return this.compileVariables("attribute", this.#attributes);
  }

  compileUniforms() : string {
    return this.compileVariables("uniform", this.#uniforms);
  }

  compileIns() : string {
    return this.compileVariables("in", this.#in);
  }

  compileOuts() : string {
    return this.compileVariables("out", this.#out);
  }

  compileMain() : string {
    let str = "";
    this.#main.forEach((line) => {
      str += line + "\n";
    });
    return str;
  }

  compileFunctions() : string {
    let str = "";
    for ( let funcName in this.#functions) {
      str += this.#functions[funcName] + "\n";
    }
    return str;
  }

  addToDefines(shaderVar : ShaderVariable) {
    this.#defines.push(shaderVar);
  }

  addToMain(str : string) {
    this.#main.push(str);
  }

  addToIns(shaderVar : ShaderVariable) {
    if (this.#in.find((el) => el.name === shaderVar.name)) {
      console.log(`[CommonShader] In variable ${shaderVar.name} is already present`);
      return;
    }
    this.#in.push(shaderVar);
  }

  addToOuts(shaderVar : ShaderVariable) {
    if (this.#out.find((el) => el.name === shaderVar.name)) {
      console.log(`[CommonShader] Out variable ${shaderVar.name} is already present`);
      return;
    }
    this.#out.push(shaderVar);
  }

  addAllToFunctions(functionsObj : FunctionsMap) {
    for (let functionName in functionsObj) {
      this.addToFunctions(functionName, functionsObj[functionName]);
    }
  }

  addToFunctions(functionName : string, functionString: string) {
    if (functionName in this.#functions) {
      console.log(`[CommonShader] Function ${functionName} is already present`);
      return;
    }
    this.#functions[functionName] = functionString;
  }
}

export interface ShaderVariable {
  name: string;
  type: string;
  value: any;
}
