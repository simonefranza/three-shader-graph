<template>
  <div
    :class="['shader-node-input-link', input.getType()]"
    @pointerdown="(e) => handlePointerDown(e)"
    @pointerup="(e) => handlePointerUp(e)"
    ref="inputEl"
  ></div>
  <span class="shader-node-input-label">{{state}} - {{input.getName()}}</span>
  <input class="shader-node-input-field" type="text" v-model="value"/>

</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { BaseInput } from "../graph/nodes/BaseInput";
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
      value: null,
      link: null as null | Link,
      state : State.Open,
      addLinkRoutine : (_ : Link) => {},
      observerRoutine: (_ : MutationRecord[], __ : MutationObserver) => {},
      observer : null as null | MutationObserver,
    };
  },
  props: {
    input: {
      type: Object as PropType<BaseInput>,
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
      switch(this.state) {
        case State.Open:
          this.handlePointerDownOpen(e);
          break;
        case State.Busy:
          throw "[InputComponent] is busy, how is pointer down?";
        case State.Linked:
          this.handlePointerDownLinked();
          break;
        default:
        throw "[InputComponent] Case not implemented: " + this.state;
      }
    },
    handlePointerDownOpen(e : PointerEvent) {
      console.log("creatae");
      this.link = this.renderer.createIncomingLink(<HTMLElement>e.target, this.input);
      //this.state = State.Busy;
      this.emitter.on("addLink", this.addLinkRoutine);
    },
    handlePointerDownLinked() {
      console.log("link", this.link);
      if (this.link === null) {
        throw "[InputComponent] link is null";
      }
      // TODO detach model
      //this.state = State.Busy;
      this.link.detachEnd();
      this.input.dropConnection();
      this.emitter.emit("recompile");
      this.emitter.on("addLink", this.addLinkRoutine);
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
        throw "[InputComponent] Case not implemented: " + this.state;
      }
    },
    handlePointerUpOpen(e: PointerEvent) {
      console.log("addi");
      this.emitter.on("addLink", this.addLinkRoutine);
      this.renderer.fixLink({
        endElement : <HTMLElement>e.target,
        endNode : this.renderer,
        endInput : this.input
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
        const state = (<HTMLElement>this.$refs.inputEl).getAttribute(mutation.attributeName);
        switch(state) {
            case "open":
              this.setStateOpen();
              break;
            case "busy":
              this.setStateBusy();
              break;
            case "linked":
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
    this.value = this.input.getValue().value;
    this.addLinkRoutine = (link : Link) => this.addLink(link);
    const targetNode = <HTMLElement>this.$refs.inputEl;
    this.observerRoutine = 
      (record : MutationRecord[], observer : MutationObserver) => 
      this.observerCallback(record, observer);
    this.observer = new MutationObserver(this.observerCallback);
    this.observer.observe(targetNode, { attributes: true});
  },
  watch: {
    value(_, oldVal) {
      if (oldVal === null || this.value === null) return;

      console.log("new value", this.value, oldVal);
      const value = this.value !== "" ? parseFloat(this.value) : 0;
      this.input.setValue(value);
      this.emitter.emit("recompile");
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/_shader_in_out.scss";
.shader-node-input-link {
  left: 0;
  transform: translate(-50%, -50%);
}
.shader-node-input-field {
  display: inline;
  width: 50px;
  pointer-events: all;
}
</style>
