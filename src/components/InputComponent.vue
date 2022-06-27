<template>
  <div
    :class="['shader-node-input-link', input.getType()]"
    @pointerdown="(e) => renderer.createIncomingLink(e.target, input)"
    @pointerup="(e) => renderer.fixLink({
      endElement : e.target,
      endNode : renderer,
      endInput : input
    })"
  ></div>
  <span class="shader-node-input-label">{{input.getName()}}</span>
  <input class="shader-node-input-field" type="text" v-model="value"/>

</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { BaseInput } from "../graph/nodes/BaseInput";
import { RendererNode } from "../graph/renderer/RendererNode";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";

export default defineComponent({
  data() {
    return {
      value: null,
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
  mounted() {
    this.value = this.input.getValue().value;
  },
  watch: {
    value(_, oldVal) {
      if (oldVal === null) return;

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
