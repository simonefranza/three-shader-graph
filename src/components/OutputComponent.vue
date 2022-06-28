<template>
  <div 
    :class="['shader-node-output-link', output.getType()]"
    @pointerdown="(e) => handlePointerDown(e, output)"
    @pointerup="(e) => handlePointerUp(e)"
  ></div>
  <span>{{output.getName()}}</span>
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
      cancelLinkRoutine : () => {},
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
      this.link = this.renderer.createOutgoingLink(<HTMLElement>e.target, this.output);
      this.state = State.Busy;
      this.emitter.on("addLink", this.addLinkRoutine);
      this.emitter.on("cancelLink", this.cancelLinkRoutine);
    },
    handlePointerUp(e : PointerEvent) {
      switch(this.state) {
        case State.Open:
          this.handlePointerUpOpen(e);
          break;
        case State.Busy:
          this.handlePointerUpBusy();
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
    handlePointerUpBusy() {
      this.state = State.Open;
    },
    addLink(link : Link) {
      console.log("linked");
      this.state = State.Linked;
      this.removeListeners();
      this.link = link;
    },
    cancelLink() {
      console.log("cancelled");
      this.state = State.Open;
      this.removeListeners();
    },
    removeListeners() {
      this.emitter.off("addLink", this.addLinkRoutine);
      this.emitter.off("cancelLink", this.cancelLinkRoutine);
    },
  },
  mounted() {
    this.addLinkRoutine = (link : Link) => this.addLink(link);
    this.cancelLinkRoutine = () => this.cancelLink();
  },
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/_shader_in_out.scss";
.shader-node-output-link {
  right: 0;
  transform: translate(50%, -50%);
}
</style>
