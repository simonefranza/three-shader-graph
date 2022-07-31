<template>
  <div ref="inputContainer" class="shader-node-color-input">
    <span>{{input.getName()}}</span>
    <span 
      v-if="!isConnected"
      class="shader-node-color-input-active-container"
      >
      <color-picker-wrapper
        :emitter="emitter"
        :startColor="input.getValue().value"
        @newColor="updateColor"
        >
        </color-picker-wrapper>
    </span>
  </div>
</template>

<script lang="ts">
import ColorPickerWrapper from "./ColorPickerWrapper.vue";
import { PropType, defineComponent } from 'vue'
import { ColorVariable } from "../graph/shaders/CommonShader";
import {Color} from "../graph/utils/Color";
import { InputNumber } from "../graph/nodes/InputNumber";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";

export default defineComponent({
  data() {
    return {
      isConnected : false,
    };
  },
  props: {
    input: {
      type: Object as PropType<InputNumber>,
      required: true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    },
  },
  components: {
    ColorPickerWrapper,
  },
  computed: {
  },
  methods: {
    updateColor(newColor: Color) {
      const inputColor : ColorVariable = this.input.getValue();
      inputColor.value.clone(newColor);
      this.emitter.emit("recompile");
    },
    checkIsConnected() {
      this.isConnected = this.input.isConnected();
    },
  },
  mounted() {
    this.emitter.on("recompile", this.checkIsConnected);
  },
})
</script>
  

<style lang="scss" scoped>
.shader-node-color-input {
    pointer-events: all;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shader-node-color-input-active-container {
  width: 50px;
  height: 22px;
  position: relative;
  border-radius: 5px;
}

.shader-node-color-input-active {
  height: 1.35rem;
  width: 50px;
  display: inline-block;
  background: red;
  position: relative;
  border-radius: 5px;
  outline: 0.5px solid #696969;
}
.shader-node-number-color {
  width: 100%

}
</style>
