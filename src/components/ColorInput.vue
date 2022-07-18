<template>
  <div ref="inputContainer" class="shader-node-color-input">
    <span>{{input.getName()}}</span>
    <span 
      v-if="!isConnected"
      class="shader-node-color-input-active-container"
      >
      <span
        class="shader-node-color-input-bg"
        ></span>
      <span
        class="shader-node-color-input-active"
        ref="inputActive"
        :style="{backgroundColor : color}"
        @pointerup="togglePicker"
        ></span>
    </span>
    <ColorPicker ref="colorPicker" v-if="state === State.Active" 
      :defaultValue="startValue"
      @closeMe="togglePicker"
      @newColorStringHsl="updateColor"></ColorPicker>
  </div>
</template>

<script lang="ts">
import ColorPicker from "./ColorPicker.vue";
import { PropType, defineComponent } from 'vue'
import { InputNumber } from "../graph/nodes/InputNumber";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
import {Color, ColorSpace} from "../graph/utils/Color";
import {Vector4}  from "three";

enum State {
  Init,
  Active
}

export default defineComponent({
  data() {
    return {
      color: "",
      state: State.Init,
      State,
      isConnected : false,
      startValue: new Color(ColorSpace.HSV, 0, 0, 0, 0) as Color,
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
    ColorPicker,
  },
  computed: {
  },
  methods: {
    updateColor(newColor : string) {
      this.color = newColor;
      //(<HTMLElement>this.$refs.inputActive).style.backgroundColor = this.color;
      const split = newColor.split("(");
      const split2 = split[1].split(")");
      const split3 = split2[0].split(",");
      const h = parseFloat(split3[0]);
      const s = parseFloat(split3[1]) / 100;
      const l = parseFloat(split3[2]) / 100;
      let a = 1;
      if (split3.length === 4) {
        a = parseFloat(split3[3]) / 100;
      }
      let rgb = Color.hslToRgb(h, s, l);
      this.input.setValue(new Vector4(h, s, l, a));
      const color : Vector4 = this.input.getValue().value;
      this.startValue = new Color(ColorSpace.HSL, color.x, color.y, color.z, color.w);
      this.emitter.emit("recompile");
    },
    togglePicker(e : PointerEvent) {
      if (this.state === State.Init) {
        this.state = State.Active;
        e.cancelBubble = true;
      } else {
        this.$nextTick(() => {
          this.state = State.Init;
        });
      }
    },
    hidePicker() {
    },
    checkIsConnected() {
      this.isConnected = this.input.isConnected();
    },
  },
  mounted() {
    this.emitter.on("recompile", this.checkIsConnected);
    const color : Vector4 = this.input.getValue().value;
    this.startValue = new Color(ColorSpace.HSV, color.x, color.y, color.z, color.w);
    (<HTMLElement>this.$refs.inputActive).style.backgroundColor = this.startValue.getColorStringRgba();
  },
})
</script>
  

<style lang="scss" scoped>
.shader-node-color-input {
    pointer-events: all;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    height: 1.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shader-node-color-input-active-container {
  width: 50px;
  height: 1.35rem;
  position: relative;
  border-radius: 5px;
}
.shader-node-color-input-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(45deg, #888 25%, transparent 25%),
    linear-gradient(-45deg, #888 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #888 75%),
    linear-gradient(-45deg, white 75%, #888 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  position: absolute;
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
