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

enum State {
Open,
Linked,
}

export default defineComponent({
data() {
  return {
    state : State.Open,
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
  }
},
methods: {
handlePointerDown(e : PointerEvent) {
  this.renderer.createOutgoingLink(<HTMLElement>e.target, this.output);
},
handlePointerUp(e : PointerEvent) {
  this.renderer.fixLink({
  startElement : <HTMLElement>e.target,
  startNode : this.renderer,
  startOutput: this.output
      })
  }
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
