<template>
  <div class="gradient-picker-container"> 
    <div class="gradient-picker-top">
      <div class="gradient-picker-btn">
        <button 
          @pointerdown="removePicker"
          :class="['gradient-picker-btn-el', {'disabled' : !canRemovePicker}]">
          <img alt="-" src="/icons/minus-icon.svg" />
        </button>
        <button 
          @pointerdown="addPicker"
          class="gradient-picker-btn-el">
          <img alt="+" src="/icons/plus-icon.svg" />
        </button>
      </div>
      <div class="gradient-picker-interpolation">
        <dropdown
          :options="dropdownOptions"
          :selected="selectedInterpolation"
          @optionChosen="(idx) => { selectedInterpolation = idx }"
        ></dropdown>
      </div>
    </div>
    <div class="gradient-picker-gradient">
      <div ref="gradientBar" class="gradient-picker-gradient-bar">
        <GradientPick 
          @pointerdown="selectedPicker = idx"
          v-for="(pick, idx) in pickers"
          :key="pick.id"
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
        <color-picker-wrapper
          :emitter="emitter"
          :startColor="colors[selectedPicker]"
          @newColor="updateColor"
          >
          </color-picker-wrapper>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import GradientPick from "./GradientPick.vue";
import InputField from "./InputField.vue";
import Dropdown from "./Dropdown.vue";
import ColorPickerWrapper from "./ColorPickerWrapper.vue";

import { PropType, defineComponent } from 'vue'
import { ColorRamp } from "../graph/nodes/ColorRamp";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
import { Gradient, Picker, Interpolation } from "../graph/nodes/Gradient";
import { Color, ColorSpace } from "../graph/utils/Color";

export default defineComponent({
  components: {
    GradientPick,
    ColorPickerWrapper,
    InputField,
    Dropdown,
  },
  data() {
    return {
      gradient: null as null | Gradient,
      pickers: [] as Picker[],
      colors: [] as Color[],
      selectedPicker : -1,
      showColorPicker : false,
      tempPickerPosition : "",
      selectedInterpolation : 0,
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
  computed: {
    dropdownOptions() {
      const colors = Object.keys(Interpolation).filter((interpolation) => {
        return isNaN(Number(interpolation));
      });
      return colors;
    },
    canRemovePicker() {
      return this.pickers.length > 2;
    },
  },
  methods: {
    removePicker() {
      if (!this.canRemovePicker) {
        console.log("Cannot remove any more pickers");
        return;
      }
      this.pickers.splice(this.selectedPicker, 1);
      this.gradient?.setPickers(this.pickers);
      if (this.selectedPicker === this.pickers.length) {
        this.selectedPicker--;
      }
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    addPicker() {
      let newPos = this.pickers[this.selectedPicker].position;
      if (this.selectedPicker !== this.pickers.length - 1) {
        newPos = (newPos + this.pickers[this.selectedPicker + 1].position) / 2;
      } else {
        newPos = (newPos + this.pickers[this.selectedPicker - 1].position) / 2;
      }
      const newPicker = <Picker>{position: newPos, color: new Color(ColorSpace.HEX, 0, 0, 0, 1)};
      newPicker.color.clone(this.gradient!.getColorAt(newPos));
      let newIdx = 0;
      if (this.selectedPicker !== this.pickers.length - 1) {
        this.pickers.splice(this.selectedPicker + 1, 0, newPicker);
        newIdx = this.selectedPicker + 1;
      } else {
        this.pickers.splice(this.selectedPicker - 1, 0, newPicker);
        newIdx = this.selectedPicker - 1;
      }
      this.selectedPicker = newIdx;
      this.gradient?.setPickers(this.pickers);
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    genColors() {
      this.pickers.forEach((picker, idx) => {
        this.colors[idx] = picker.color;
      });
    },
    updateColor(color : Color) {
      this.pickers[this.selectedPicker].color.clone(color);
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    },
    updateGradientConstant() {
      const gradientBar = <HTMLElement>this.$refs.gradientBar;
      let newGradient = 'linear-gradient(to right, ';
      this.pickers.forEach((picker, idx) => {
        newGradient += `${picker.color.getColorStringRgba()} ` +
          `${Math.round(picker.position * 100)}%`
        if (idx !== this.pickers.length - 1) {
          newGradient += `, ${picker.color.getColorStringRgba()} ` +
            `${Math.round(this.pickers[idx + 1].position * 100)}%, `
        } else {
          newGradient += ")";
        }
      });
      gradientBar.style.backgroundImage = newGradient;
    },
    updateGradientLinear() {
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
    updateGradient() {
      switch (<Interpolation>this.selectedInterpolation) {
        case Interpolation.Constant:
          this.updateGradientConstant();
          break;
        case Interpolation.Linear:
          this.updateGradientLinear();
          break;
        default:
          throw "[GradientPicker:updateGradient] invalid interpolation";
      }
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
    selectedInterpolation() {
      this.gradient?.setInterpolation(<Interpolation>this.selectedInterpolation);
      this.emitter.emit("recompile");
      this.updateGradient();
      this.genColors();
      this.updateGraphNode();
    }
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

.gradient-picker-top {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gradient-picker-btn {
  width: 2.5rem;
  height: 1.2rem;
  border-radius: 13px;
  position: relative;
  outline: 0.5px solid #696969;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &-el {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #252525;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
  }
  &-el.disabled {
    background-color: #4a4a4a;
    cursor: initial;
  }
  &-el.disabled:active {
    background-color: #4a4a4a;
  }
  &-el:active{
    background-color: #151515;
  }
  &-el:first-child {
    border-radius: 13px 0 0 13px;
  }
  &-el:first-child:after {
    content: " ";
    height: 100%;
    width: 0.5px;
    background-color: #696969;
    position: absolute;
    right: 0;
    transform: translateX(50%);
    z-index: 100;
    top: 0;
  }
  &-el:last-child {
    border-radius: 0 13px 13px 0;
  }
  &-el img {
    width: 60%;
    height: 60%;
    position: relative;
  }
}
.gradient-picker-interpolation{
  height: 1.5rem;
  width: 50%;
  position: relative;
}
</style>
