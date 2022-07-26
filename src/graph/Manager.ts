import mitt, {Emitter} from "mitt";
import { BaseNode } from "./nodes/BaseNode";
import { ShaderGraphRenderer } from "./ShaderGraphRenderer";
import { Scene } from "./Scene";
import { Link, LinkElement } from "./renderer/Link";
import { ViewManager } from "./renderer/ViewManager";
import { createApp } from "vue";
import ManagerComponent from "../components/ManagerComponent.vue";

export interface PointerPosition {
  x: number;
  y: number;
}

export type Events = {
  pointerMoved: PointerPosition;
  createNode : new () => BaseNode;
  showMenu: undefined;
  rotateView: undefined;
  deleteNode: undefined;
  fixLink : LinkElement;
  recompile : undefined;
  newShaders : [string, string];
  resizeCanvas : undefined;
  resizeGraph: undefined;
  repositionLinks: undefined;
  cancelLink: undefined;
  addLink: Link;
  exportFragment: undefined;
  exportVertex: undefined;
};

export class Manager {
  element : HTMLElement;

  emitter: Emitter<Events>;

  svgElement: HTMLElement | undefined;

  containerElement : HTMLElement | undefined;

  canvasElement: HTMLElement | undefined;

  dividerElement: HTMLElement | undefined;

  sceneManager : Scene | undefined;

  graphManager : ShaderGraphRenderer | undefined;

  viewManager : ViewManager | undefined;


  constructor(element : HTMLElement) {
    this.element = element;
    this.emitter = mitt();
    const managerComponent = createApp(
      ManagerComponent,
      {
        emitter : this.emitter,
        callback : (
            container : HTMLElement,
            graphView : HTMLElement,
            divider : HTMLElement,
            canvasView : HTMLElement
        ) => {
          this.setElements(
            container,
            graphView,
            divider,
            canvasView
          );
        },
      }
    );
    managerComponent.mount(this.element);
  }

  setElements(
      container : HTMLElement,
      graphView : HTMLElement,
      divider : HTMLElement,
      canvasView : HTMLElement
  ) {
    this.containerElement = container;
    this.svgElement = graphView;
    this.dividerElement = divider;
    this.canvasElement = canvasView;
    this.graphManager = this.createGraphManager();
    this.sceneManager = this.createScene();
    this.viewManager = new ViewManager(
      this.emitter,
      this.containerElement,
      this.svgElement,
      this.canvasElement,
      this.dividerElement
    );
  }

  createScene() : Scene {
    if (this.canvasElement === undefined) {
      throw "[Manager::createScene] canvasElement is undefined";
    }
    return new Scene(this.canvasElement, this.emitter);
  }

  createGraphManager() : ShaderGraphRenderer {
    if (this.svgElement === undefined) {
      throw "[Manager::createGraphManager] svgElement is undefined";
    }
    return new ShaderGraphRenderer(this.svgElement, this.emitter);
  }
}
