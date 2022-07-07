<template>
  <span class="">
    <div class="shader-node-title">{{title}}</div>
    <div class="shader-node-body">
      <div
        v-for="output in outputs"
        :key="output.getName()"
        class="shader-node-output"
      >
        <output-component
          :output="output"
          :renderer="renderer"
          :emitter="emitter"
        ></output-component>
      </div>
      <div
        v-for="input in inputs"
        :key="input.getName()"
        class="shader-node-input"
      >
        <input-component
          :input="input"
          :renderer="renderer"
          :emitter="emitter"
        ></input-component>
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
import { BaseOutput } from "../graph/nodes/BaseOutput";
import { BaseInput } from "../graph/nodes/BaseInput";
import { RendererNode } from "../graph/renderer/RendererNode";
import InputComponent from "./InputComponent.vue";
import OutputComponent from "./OutputComponent.vue";

export default defineComponent({
  components: {
    InputComponent,
    OutputComponent,
  },
  props: {
    title : {
      type: String,
      required: true,
    },
    outputs: {
      type: Object as PropType<BaseOutput[]>,
      required: true,
    },
    inputs: {
      type: Object as PropType<BaseInput[]>,
      required: true,
    },
    renderer : {
      type: Object as PropType<RendererNode>,
      required: true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    }
  }
});
</script>

<style lang="scss">
.shader-node-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px;
  user-select: none;
  overflow: visible;
}
.shader-node {
  position: static;
  box-sizing: border-box;
  width: 220px;
  font-family: monospace;
  color: #eee;
  pointer-events: none;
  border-radius: 0.5rem;
}
.highlight {
  box-shadow: 0 0 0px 1.5px white;
}
</style>

<style lang="scss" scoped>
.shader-node-title {
  background: salmon;
  text-align: center;
  box-shadow: 0px 0px 0px 0.5px #696969;
  border-radius: .5rem .5rem 0 0;
  padding-block: .5rem;
  color: black;
  font-size: 1rem;
}
.shader-node-body {
  background: #111;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 0px 0.5px #696969;
  border-radius: 0 0 .5rem .5rem;
  padding-block: .5rem;
  text-transform: capitalize;
}
.shader-node-output,
.shader-node-input {
  padding-inline: 20px;
  padding-block: 5px;
  position: relative;
}
.shader-node-output {
  text-align: right;
}
.shader-node-input {
  text-align: left;
}
</style>
