<template>
  <div ref="inputContainer" class="shader-node-number-input">
    <span>{{input.getName()}}</span>
    <span 
      v-if="!isConnected"
      ref="inputActive"
      class="shader-node-number-input-active"
      :style="{backgroundColor : color}"
      @pointerup="togglePicker"
      >
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
      startValue: new Vector4(1, 1, 1, 1),
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
    HSLToRGB(h : number, s : number, l : number) {
      //https://www.30secondsofcode.org/js/s/hsl-to-rgb
      s /= 100;
      l /= 100;
      const k = (n : number) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n : number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [f(0), f(8), f(4)];
    },
    updateColor(newColor : string) {
    console.log("new Color", newColor);
      this.color = newColor;
      //(<HTMLElement>this.$refs.inputActive).style.backgroundColor = this.color;
      const split = newColor.split("(");
      const split2 = split[1].split(")");
      const split3 = split2[0].split(",");
      const h = parseFloat(split3[0]);
      const s = parseFloat(split3[1]);
      const l = parseFloat(split3[2]);
      let a = 1;
      if (split3.length === 4) {
        console.log("parse", split[3]);
        a = parseFloat(split3[3]) / 100;
      }
      let rgb = this.HSLToRGB(h, s, l);
      console.log("value set colorinput",rgb[0], rgb[1], rgb[2],a);
      this.input.setValue(new Vector4(rgb[0], rgb[1], rgb[2],a));
      this.startValue = this.input.getValue().value;
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
    this.startValue = this.input.getValue().value;
    (<HTMLElement>this.$refs.inputActive).style.backgroundColor = 
`rgba(${255 * this.startValue.x}, ${255 * this.startValue.y},${255 * this.startValue.z},${this.startValue.w})`;
  },
})
</script>
  

<style lang="scss" scoped>
.shader-node-number-input {
    pointer-events: all;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    height: 1.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shader-node-number-input-active {
  height: 1.35rem;
    width: 50px;
    display: inline-block;
    background: red;
    border-radius: 5px;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color:white;
    z-index: -1;
    position: absolute;
  }
}
.shader-node-number-color {
  width: 100%

}
</style>
