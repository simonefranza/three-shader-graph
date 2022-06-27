import * as THREE from "three";
import { Events } from "./Manager";
import {Emitter} from "mitt";

export class Scene {
  height: number;

  width: number;

  canvas: HTMLElement;

  emitter: Emitter<Events>;

  scene: THREE.Scene;

  camera: THREE.PerspectiveCamera;

  renderer: THREE.WebGLRenderer;

  cube: THREE.Mesh;

  clock: THREE.Clock;

  startedAnimation : boolean;
  //startNode1: PrincipledBSDF;

  //manager1: GLSLManager;

  constructor(canvas : HTMLElement, emitter : Emitter<Events> ) {
    const bounding = canvas.getBoundingClientRect();
    this.height = bounding.height;
    this.width = bounding.width;
    this.canvas = canvas;
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

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.ShaderMaterial( {
      vertexShader : vert,
      fragmentShader : frag
    } );
    this.cube = new THREE.Mesh( geometry, material );
    this.cube.position.set(0, 0, 0);
    this.scene.add( this.cube );

    this.clock = new THREE.Clock();

    addEventListener("resize", () => this.handleResize());
    this.emitter.on("resizeCanvas", () => this.handleResize());
    this.startedAnimation = false;
    this.emitter.on("newShaders", (shaders: [string, string]) => this.updateShaders(shaders));
    this.emitter.emit("recompile");
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
    const delta = this.clock.getDelta();
    this.cube.rotation.z += delta * Math.PI / 6;
    this.cube.rotation.x += delta * Math.PI / 6;
    this.cube.rotation.y += delta * Math.PI / 6;
  }

  updateShaders([ vertShader, fragShader ] : [string, string]) {
    const material = <THREE.ShaderMaterial> this.cube.material;
    material.fragmentShader = fragShader;
    material.vertexShader = vertShader;
    material.needsUpdate = true;
    if (!this.startedAnimation) {
      this.animate();
    }
  }

  handleResize() {
    this.canvas.style.width = "";
    this.canvas.style.height = "";
    this.canvas.removeAttribute("width");
    this.canvas.removeAttribute("height");
    const bounding = this.canvas.getBoundingClientRect();
    this.height = bounding.height;
    this.width = bounding.width;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }
}
