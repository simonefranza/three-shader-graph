<template>
  <div class="gradient-picker-container"> 
    <span>Delete Add</span>
    <div class="gradient-picker-gradient">
      <div ref="gradientBar" class="gradient-picker-gradient-bar">
        <GradientPick 
          @pointerdown="selectedPicker = idx"
          v-for="(pick, idx) in pickers"
          :key="colors[idx]"
          :position="pick.position"
          :color="colors[idx]"
          :isSelected="selectedPicker === idx"
          @newPosition="setPickerPosition"
        >
          </GradientPick>
      </div>
    </div>
    <span v-if="selectedPicker >= 0" class="gradient-picker-picker-info">
      <span
        class="gradient-color-picker-position"
      >
        Pos
        <input-field 
          :value="tempPickerPosition"
          @newValue="setNewPosition"
        ></input-field>
      </span>
      <div 
        class="gradient-color-picker-color-container"
        >
        <div 
          class="gradient-color-picker-color-bg"
          >
          </div>
        <div 
          class="gradient-color-picker-color"
          :style="{backgroundColor : colors[selectedPicker]}"
          @pointerup="toggleColorPicker"
          >
        </div>
      </div>
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
import InputField from "./InputField.vue";

export default defineComponent({
  components: {
    GradientPick,
    ColorPicker,
    InputField,
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
    genColors() {
      this.pickers.forEach((picker, idx) => {
        this.colors[idx] = picker.color.getColorStringRgba();
      });
    },
    updateColor(color : [number, number, number, number]) {
      this.pickers[this.selectedPicker].color.setRGB(color);
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    updateGradient() {
      const gradientBar = <HTMLElement>this.$refs.gradientBar;
      let newGradient = 'linear-gradient(to right, ';
      this.pickers.forEach((picker, idx) => {
        newGradient += `${picker.color.getColorStringRgba()} ${Math.round(picker.position * 100)}%`
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
    //updatePickerPositions() {
    //  this.pickers.forEach((pick, idx) => {
    //    this.picksPosition[idx] = pick.position;
    //  });
    //},
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
    setPickerPosition(newPos : number) {
      const tempPicker = this.pickers[this.selectedPicker];
      this.pickers[this.selectedPicker].position = newPos;
      this.pickers.sort((a, b) => {
        return a.position - b.position;
      });
      this.selectedPicker = this.pickers.indexOf(tempPicker);
      this.tempPickerPosition = (100 * newPos).toFixed(0);
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    setNewPosition(newVal : string) {
      this.tempPickerPosition = Math.random().toString();
      this.$nextTick(() => {
        this.tempPickerPosition = newVal;
      });
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
      // To force watcher
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
.gradient-color-picker-color-container {
  height: 22px;
}
.gradient-color-picker-color-container {
  width: 40%;
  border-radius: 5px;
  outline: 0.5px solid #696969;
  position: relative;
}
.gradient-color-picker-color-bg,
.gradient-color-picker-color {
  position: absolute;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.gradient-color-picker-color-bg {
  background-image:
    linear-gradient(45deg, #888 25%, transparent 25%),
    linear-gradient(-45deg, #888 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #888 75%),
    linear-gradient(-45deg, white 75%, #888 75%);
  background-size: 22px 22px;
  background-position: 0 0, 0 11px, 11px -11px, -11px 0px;
}
.gradient-color-picker-color{
  background: red;
}
.gradient-color-picker-position {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
