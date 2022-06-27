import { Vector3 } from "three";

export abstract class CommonShader {
  #varyings: ShaderVariable[];

  #attributes: ShaderVariable[];

  #uniforms: ShaderVariable[];

  #main: string[];

  #functions: string[];

  #in: ShaderVariable[];

  #out: ShaderVariable[];

  #variableList : string[];

  constructor() {
    this.#varyings = [];
    this.#attributes = [];
    this.#uniforms = [];
    this.#main = [];
    this.#functions = [];
    this.#in = [];
    this.#out = [];
    this.#variableList = [];
  }

  abstract generateCode() : string;

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
    this.#functions.forEach((line) => {
      str += line + "\n";
    });
    return str;
  }

  addToMain(str : string) {
    this.#main.push(str);
  }

  addToIns(shaderVar : ShaderVariable) {
    // TODO check if is already in list
    this.#in.push(shaderVar);
  }

  addToOuts(shaderVar : ShaderVariable) {
  // TODO check if is already in list
    this.#out.push(shaderVar);
  }

  addToFunctions(functions: string) {
  // TODO check if is already in list
    this.#functions.push(functions);
  }
}

export interface ShaderVariable {
  name: string;
  type: string;
  value: any;
}
