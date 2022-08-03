/*
 * Class: Scene
 *
 * This class is responsible for the three.js scene
 *
 */

import * as THREE from "three";
import { createApp } from "vue";
import Stats from "stats.js";
import { Events } from "./Manager";
import { Emitter } from "mitt";
import ShaderViewer from "@/components/ShaderViewer.vue";

interface ShaderStrings {
  fragment: string,
  vertex: string,
};

export class Scene {
  height: number;

  width: number;

  canvas: HTMLElement;

  stats: Stats;

  emitter: Emitter<Events>;

  scene: THREE.Scene;

  camera: THREE.PerspectiveCamera;

  renderer: THREE.WebGLRenderer;

  mesh: THREE.Mesh;

  clock: THREE.Clock;

  startedAnimation : boolean;

  shaders : ShaderStrings;
  //startNode1: PrincipledBSDF;

  //manager1: GLSLManager;

  constructor(canvas : HTMLElement, emitter : Emitter<Events> ) {
    const bounding = canvas.getBoundingClientRect();
    this.height = bounding.height;
    this.width = bounding.width;
    this.canvas = canvas;
    const div = document.createElement("div");
    div.style.gridArea = "canvas";
    div.style.width = "100%";
    div.style.height = "100%";
    this.stats = new Stats();
    // 0: fps, 1: ms, 2: mb, 3+: custom
    this.stats.showPanel( 0 );
    this.stats.dom.style.position = "relative";
    this.stats.dom.style.right = "0";
    this.stats.dom.style.left = "";
    this.stats.dom.style.display = "flex";
    this.stats.dom.style.justifyContent = "flex-end";
    if (this.canvas.parentNode === null) {
      throw "[Scene:constructor] canvas parent node is null";
    }
    this.canvas.parentNode.appendChild(div);
    div.appendChild(this.stats.dom);


    this.emitter = emitter;
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );

    this.camera.position.z = -10;
    this.camera.lookAt(0, 0, 0);
    this.scene = new THREE.Scene();
    this.scene.add( this.camera );
    this.renderer = new THREE.WebGLRenderer({
      canvas : canvas,
      alpha : true,
      antialias : true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    const [ vert, frag ] = [ "", "" ];

    const geometry = new THREE.SphereGeometry( 1, 124, 124);
    const material = new THREE.ShaderMaterial( {
      vertexShader : vert,
      fragmentShader : frag
    } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.position.set(0, 0, 0);
    this.scene.add( this.mesh );

    this.clock = new THREE.Clock();
    this.shaders = {fragment : "", vertex : ""};

    addEventListener("resize", () => this.handleResize());
    this.emitter.on("resizeCanvas", () => this.handleResize());
    this.startedAnimation = false;
    this.emitter.on("newShaders", (shaders: [string, string]) => this.updateShaders(shaders));
    this.emitter.emit("recompile");
    this.emitter.on("exportFragment", () => this.exportShader("fragment"));
    this.emitter.on("exportVertex", () => this.exportShader("vertex"));
  }

  animate() {
    this.stats.begin();
    this.renderer.render(this.scene, this.camera);
    const delta = this.clock.getDelta();
    this.mesh.rotation.z += delta * Math.PI / 6;
    this.mesh.rotation.x += delta * Math.PI / 6;
    this.mesh.rotation.y += delta * Math.PI / 6;
    this.stats.end();
    requestAnimationFrame(() => this.animate());
  }

  updateShaders([ vertShader, fragShader ] : [string, string]) {
    const material = <THREE.ShaderMaterial> this.mesh.material;
    console.log(fragShader, vertShader);
    this.shaders.fragment = fragShader;
    this.shaders.vertex = vertShader;
    material.fragmentShader = fragShader;
    material.vertexShader = vertShader;
    material.needsUpdate = true;
    if (!this.startedAnimation) {
      this.startedAnimation = true;
      this.animate();
    }
  }

  handleResize() {
    this.canvas.style.width = "";
    this.canvas.style.height = "";
    this.canvas.style.minHeight = "1px";
    this.canvas.removeAttribute("width");
    this.canvas.removeAttribute("height");
    const bounding = this.canvas.getBoundingClientRect();
    this.height = bounding.height;
    this.width = bounding.width;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.canvas.style.minHeight = "";
  }

  exportShader(name : "fragment" | "vertex") {
    console.log("export", name);
    const app = document.getElementById("app");
    if (app === null) {
      throw "[Scene::exportShader] app is null";
    }
    const div = document.createElement("div");
    div.setAttribute("id", "viewer");
    app.appendChild(div);
    console.log(name, this.shaders);
    const shaderViewer = createApp(
      ShaderViewer,
      {
        shader : this.shaders[name],
        name,
      }
    );
    shaderViewer.mount(div);
  }
}
