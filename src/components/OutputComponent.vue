<template>
  <div 
    :class="['shader-node-output-link', output.getType()]"
    @pointerdown="(e) => handlePointerDown(e, output)"
    @pointerup="(e) => handlePointerUp(e)"
    data-state="open"
    ref="outputEl"
  ></div>
  <span>{{state}} - {{output.getName()}}</span>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { BaseOutput } from "../graph/nodes/BaseOutput";
import { RendererNode } from "../graph/renderer/RendererNode";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
import {Link} from "../graph/renderer/Link";

enum State {
  Open,
  Busy,
  Linked,
}

export default defineComponent({
  data() {
    return {
      state : State.Open,
      link : null as null | Link,
      addLinkRoutine : (_ : Link) => {},
      observerRoutine: (_ : MutationRecord[], __ : MutationObserver) => {},
      observer : null as null | MutationObserver,
    };
  },
  props: {
    output: {
      type: Object as PropType<BaseOutput>,
      required: true,
    },
    renderer : {
      type: Object as PropType<RendererNode>,
      required: true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    },
  },
  methods: {
    handlePointerDown(e : PointerEvent) {
      console.log(this.state, this.state === State.Open);
      switch(this.state) {
        case State.Open:
          this.handlePointerDownOpen(e);
          break;
        case State.Busy:
          throw "[OutputComponent] is busy, how is pointer down?";
        case State.Linked:
          console.log("create new ray, and eventually pop open menu");
          break;
        default: 
          throw "[OutputComponent::handlePointerDown] case not implemented? " + this.state;
      }
    },
    handlePointerDownOpen(e : PointerEvent) {
      this.emitter.on("addLink", this.addLinkRoutine);
      this.link = this.renderer.createOutgoingLink(<HTMLElement>e.target, this.output);
      //this.state = State.Busy;
    },
    handlePointerUp(e : PointerEvent) {
      switch(this.state) {
        case State.Open:
          this.handlePointerUpOpen(e);
          break;
        case State.Busy:
          break;
        case State.Linked:
          break;
        default:
        throw "[OutputComponent] Case not implemented: " + this.state;
      }
    },
    handlePointerUpOpen(e : PointerEvent) {
      this.emitter.on("addLink", this.addLinkRoutine);
      this.renderer.fixLink({
        startElement : <HTMLElement>e.target,
        startNode : this.renderer,
        startOutput: this.output
      });
    },
    addLink(link : Link) {
      console.log("linked");
      //this.state = State.Linked;
      this.link = link;
    },
    removeListeners() {
      this.emitter.off("addLink", this.addLinkRoutine);
    },
    observerCallback(mutationList : MutationRecord[], observer : MutationObserver) {
      for(const mutation of mutationList) {
        if (!(mutation.type === 'attributes' && typeof mutation.attributeName === "string")) {
          continue;
        }
        const state = (<HTMLElement>this.$refs.outputEl).getAttribute(mutation.attributeName);
        switch(state) {
            case "open":
              console.log("[OutputComponent] new state open");
              this.setStateOpen();
              break;
            case "busy":
              console.log("[OutputComponent] new state busy");
              this.setStateBusy();
              break;
            case "linked":
              console.log("[OutputComponent] new state linked");
              this.setStateLinked();
              break;
            default:
             throw "[InputComponent] Unknown data-state: " + state;
        }
      }
    },
    setStateOpen() {
      this.state = State.Open;
      this.removeListeners();
    },
    setStateBusy() {
      this.state = State.Busy;
    },
    setStateLinked() {
      this.state = State.Linked;
      this.removeListeners();
    },
  },
  mounted() {
    this.addLinkRoutine = (link : Link) => this.addLink(link);
    const targetNode = <HTMLElement>this.$refs.outputEl;
    this.observerRoutine = 
      (record : MutationRecord[], observer : MutationObserver) => 
      this.observerCallback(record, observer);
    this.observer = new MutationObserver(this.observerCallback);
    this.observer.observe(targetNode, { attributes: true});
  },
})
</script>

<style lang="scss" scoped>
@import "../../public/scss/shader_in_out.scss";
.shader-node-output-link {
  right: 0;
  transform: translate(50%, -50%);
}
</style>
