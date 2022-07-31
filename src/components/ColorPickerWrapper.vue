<template>
  <div class="color-picker-wrapper">
    <span
      class="color-input-bg"
      ></span>
    <span
      class="color-input"
      ref="inputActive"
      :style="{backgroundColor : color}"
      @pointerdown="startToggle"
    ></span>
    <ColorPicker ref="colorPicker" v-if="state === State.Active" 
      :defaultValue="startValue"
      @closeMe="state = State.Init"
      @newColorStringHsl="updateColor"></ColorPicker>
  </div>
</template>

<script lang="ts">
import ColorPicker from "./ColorPicker.vue";
import { PropType, defineComponent } from 'vue'
import {Color, ColorSpace} from "../graph/utils/Color";
import { InputNumber } from "../graph/nodes/InputNumber";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";

enum State {
  Init,
  Active
}

export default defineComponent({
  data() {
    return {
      color: "",
      startValue: new Color(ColorSpace.HSV, 0, 0, 0, 0) as Color,
      state: State.Init,
      State,
    };
  },
  components: {
    ColorPicker,
  },
  props: {
    startColor: {
      type: Object as PropType<Color>,
      required: true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    },
  },
  methods: {
    updateColor(newColor : string) {
      this.color = newColor;
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
      this.startValue.setHSL([h, s, l, a]) ;
      this.$emit("newColor", this.startValue);
    },
    startToggle() {
      document.addEventListener("pointerup", this.checkToggle);
    },
    checkToggle(e : PointerEvent) {
      const btn = <HTMLElement>this.$refs.inputActive;
      const bounding = btn.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        document.removeEventListener("pointerup", this.checkToggle);
        this.state = this.state === State.Init ? State.Active : State.Init;
        return;
      }
      document.removeEventListener("pointerup", this.checkToggle);
    },
    updateColorInput() {
      this.startValue.clone(this.startColor);
      this.color = this.startValue.getColorStringRgba();
    }

  },
  watch: {
    startColor() {
      this.updateColorInput();
    },
  },
  mounted() {
    this.updateColorInput();
  },
});

</script>

<style lang="scss" scoped>
.color-picker-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.color-input {
  height: 100%;
  width: 100%;
  display: inline-block;
  background: red;
  position: relative;
  border-radius: 5px;
  outline: 0.5px solid #696969;
  cursor: pointer;
}
.color-input-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(45deg, #888 25%, transparent 25%),
    linear-gradient(-45deg, #888 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #888 75%),
    linear-gradient(-45deg, white 75%, #888 75%);
  background-size: 22px 22px;
  background-position: 0 0, 0 11px, 11px -11px, -11px 0px;
  position: absolute;
  border-radius: 5px;
}
</style>
