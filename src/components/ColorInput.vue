<template>
  <div ref="inputContainer" class="shader-node-number-input">
    <span>{{input.getName()}}</span>
    <span 
      v-if="!isConnected"
      ref="inputActive"
      class="shader-node-number-input-active"
      @pointerup="() => { toggleState(); }"
      >
    </span>
    <ColorPicker ref="colorPicker" v-if="state === State.Active" 
      :defaultValue="startValue"
      @newColor="updateColor"></ColorPicker>
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
      justActivated : false,
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
      this.color = newColor;
      (<HTMLElement>this.$refs.inputActive).style.backgroundColor = this.color;
      const split = newColor.split("(");
      const split2 = split[1].split(")");
      const split3 = split2[0].split(",");
      const h = parseFloat(split3[0]);
      const s = parseFloat(split3[1]);
      const l = parseFloat(split3[2]);
      let rgb = this.HSLToRGB(h, s, l);
      this.input.setValue(new Vector4(rgb[0], rgb[1], rgb[2],1));
      this.startValue = this.input.getValue().value;
      this.emitter.emit("recompile");
    },
    toggleState() {
      if (this.state === State.Init) {
        this.state = State.Active;
        this.justActivated = true;
        document.addEventListener("pointerdown", this.handlePointerDown);
      } else {
        this.$nextTick(() => {
          this.state = State.Init;
          document.removeEventListener("pointerdown", this.handlePointerDown);
        });
      }
    },
    setInit() {

    },
    handlePointerDown(e : PointerEvent) {
      const bounding = (<HTMLElement>this.$refs.colorPicker.$el).getBoundingClientRect();
      let x = e.clientX;
      let y = e.clientY;
      const boundingActive = (<HTMLElement>this.$refs.inputActive).getBoundingClientRect();
      if (x >= boundingActive.left && x <= boundingActive.left + boundingActive.width && 
        y >= boundingActive.top && y <= boundingActive.top + boundingActive.height) {
        return;
      }
      if (x < bounding.left || x > bounding.left + bounding.width || y < bounding.top ||
        y > bounding.top + bounding.height) {
        this.toggleState();
      }
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
}
.shader-node-number-color {
  width: 100%

}
</style>
