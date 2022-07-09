<template>
  <div class="gradient-picker-container"> 
    <span>Delete Add</span>
    <div class="gradient-picker-gradient">
      <div ref="gradientBar" class="gradient-picker-gradient-bar">
        <GradientPick 
          @click="selectedPicker = idx"
          v-for="(pick, idx) in pickers"
          :key="pick.position"
          :position="pick.position"
          :color="colors[idx]"
          :isSelected="selectedPicker === idx"
        >
          </GradientPick>
      </div>
    </div>
    <span v-if="selectedPicker >= 0" class="gradient-picker-picker-info">
      <span
        class="gradient-color-picker-position"
      >
        Pos
        <input v-model="tempPickerPosition" />
      </span>
      <span 
        class="gradient-color-picker-color"
        :style="{backgroundColor : colors[selectedPicker]}"
        @pointerup="toggleColorPicker"
        >
      </span>
      <ColorPicker ref="colorPicker" v-if="showColorPicker" 
        :defaultValue="pickers[selectedPicker].color"
        :showBelow="true"
        @closeMe="toggleColorPicker"
        @newColorRawRgb="updateColor"></ColorPicker>
    </span>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { ColorRamp } from "../graph/nodes/ColorRamp";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
import { Gradient, Picker } from "../graph/nodes/Gradient";
import GradientPick from "./GradientPick.vue";
import ColorPicker from "./ColorPicker.vue";
import {Vector4} from "three";

export default defineComponent({
  components: {
    GradientPick,
    ColorPicker
  },
  data() {
    return {
      gradient: null as null | Gradient,
      pickers: [] as Picker[],
      colors: [] as string[],
      selectedPicker : -1,
      showColorPicker : false,
      tempPickerPosition : "",
    };
  },
  props: {
    baseNode : {
      type : Object as PropType<ColorRamp>,
      required : true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    },
  },
  methods: {
    convertVector4ToRgb(color : Vector4) {
      return `rgba(${color.x * 255}, ` +
      `${color.y * 255}, ` +
      `${color.z * 255}, ` +
      `${color.w})`;
    },
    genColors() {
      this.pickers.forEach((picker, idx) => {
        this.colors[idx] = this.convertVector4ToRgb(picker.color);
      });
    },
    updateColor(color : [number, number, number, number]) {
      this.pickers[this.selectedPicker].color.x = color[0] / 255;
      this.pickers[this.selectedPicker].color.y = color[1] / 255;
      this.pickers[this.selectedPicker].color.z = color[2] / 255;
      this.pickers[this.selectedPicker].color.w = color[3];
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    updateGradient() {
      const gradientBar = <HTMLElement>this.$refs.gradientBar;
      let newGradient = 'linear-gradient(to right, ';
      this.pickers.forEach((picker, idx) => {
        newGradient += `${this.convertVector4ToRgb(picker.color)} ${Math.round(picker.position * 100)}%`
        if (idx !== this.pickers.length - 1) {
          newGradient += ", ";
        } else {
          newGradient += ")";
        }
      });
      gradientBar.style.backgroundImage = newGradient;
    },
    updateGraphNode() {
      this.gradient?.setPickers([...this.pickers]);
      this.emitter.emit("recompile");
    },
    toggleColorPicker(e : PointerEvent) {
      if (!this.showColorPicker) {
        this.showColorPicker = true;
        e.cancelBubble = true;
      } else {
        this.$nextTick(() => {
          this.showColorPicker = false;
        });
      }
    },
  },
  watch: {
    pickers() {
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    selectedPicker() {
      if (!(this.selectedPicker >= 0 && this.selectedPicker < this.pickers.length)) {
        return;
      }
      this.tempPickerPosition = (100 * this.pickers[this.selectedPicker].position).toFixed(0);
    },
    tempPickerPosition() {
      if (this.tempPickerPosition.trim() === "") {
        return;
      }
      const tempPicker = this.pickers[this.selectedPicker];
      this.pickers[this.selectedPicker].position = Math.max(Math.min(parseFloat(this.tempPickerPosition) / 100, 1), 0);
      this.pickers.sort((a, b) => {
        return a.position - b.position;
      });
      this.selectedPicker = this.pickers.indexOf(tempPicker);
      this.tempPickerPosition = (100 * this.pickers[this.selectedPicker].position).toFixed(0);
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
  },
  mounted() {
    this.gradient = this.baseNode.getGradient();
    this.pickers = this.gradient.getPickers();
    this.selectedPicker = 0;
  }
});
</script>

<style lang="scss" scoped>
.gradient-picker-container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: all;
}
.gradient-picker-gradient {
  height: 1rem;
  width: 100%;
  position: relative;
  padding-block: 0.25rem;
  box-sizing: border-box;
  margin-block: 1rem;
  &-bar {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, white, black);
    box-sizing: border-box;
    position: relative;
    border: 1px solid #696969;
    border-radius: 0.5rem;
  }
}
.gradient-picker-picker-info {
  height: 2rem;
  width: 100%;
  position: relative;
  padding-block: 0.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.gradient-color-picker-position,
.gradient-color-picker-color {
  height: 1.35rem;
  display: inline-block;
  position: relative;
}
.gradient-color-picker-color {
  width: 40%;
  background: red;
  border-radius: 5px;
}
.gradient-color-picker-position {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  & input {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 1.35rem;
    background-color: #252525;
    color: #eee;
    text-align: center;
    font-family: monospace;
    outline: none;
  }
}
</style>
