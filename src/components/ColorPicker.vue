<template>
  <div ref="container" class="color-picker-container"> 
    <button 
      @click="copyColor"
      class="color-picker-copy">
      <img src="icons/copy-icon.svg" alt="copy icon" />
    </button>
    <div class="color-picker-colors">
      <div ref="wheel" class="color-picker-wheel">
        <div ref="wheelSelector" class="color-picker-wheel-selector"></div>
      </div>
      <div ref="bar" class="color-picker-bar">
        <div ref="barSelector" class="color-picker-bar-selector"></div>
      </div>
    </div>
    <div class="color-picker-space-container">
      <div class="color-picker-space">
        <div 
          @click="colorSpace = 'HSV'"
          :class="['color-picker-space-el', {selected : colorSpace === 'HSV'}]"
        >
          <p>HSV</p>
        </div>
        <div
          @click="colorSpace = 'RGB'"
          :class="['color-picker-space-el', {selected : colorSpace === 'RGB'}]"
        >
          <p>RGB</p>
        </div>
        <div
          @click="colorSpace = 'HEX'"
          :class="['color-picker-space-el', {selected : colorSpace === 'HEX'}]"
        >
          <p>HEX</p>
        </div>
      </div>
    </div>
    <div class="color-picker-value-container">
      <div class="color-picker-value">
        <div v-for="(value, idx) in stringComponentValues" :key="idx" 
          class="color-picker-value-el">
          <input-field
            :value="stringComponentValues[idx]"
            @newValue="(newVal) => setNewValue(newVal, idx)"
            ></input-field>
          <p>{{componentNames[idx]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vector4}  from "three";
import { PropType, defineComponent } from 'vue'
import InputField from "./InputField.vue";
import { ColorSpace, Color } from "../graph/utils/Color";
import { clamp } from "../graph/utils/General";

export default defineComponent({
  data() {
    return {
      color : new Color(ColorSpace.HSV, 0, 0, 0, 0) as Color,
      canvas : document.getElementById("renderer-canvas"),
      colorSpace : "",
      componentNames : ["H", "S", "V", "A"],
      componentValues : [0, 0, 0, 100],
      stringComponentValues : ["0", "0", "0", "100"],
    };
  },
  props: {
    defaultValue: {
      type: Object as PropType<Color>,
      required: true,
    },
    showBelow: {
      type : Boolean,
      required: false,
      default: false,
    }
  },
  components: {
    InputField,
  },
  methods: {
    handlePointerDownWheel(e : PointerEvent) {
      const wheel = <HTMLElement>this.$refs.wheel;
      const bounding = wheel.getBoundingClientRect();
      const {left, top} = this.scaleOffsetToPixels(
        e.clientY - bounding.top,
        e.clientX - bounding.left
      );
      (<HTMLElement>this.$refs.wheelSelector)
        .style.left = `${left}px`;
      (<HTMLElement>this.$refs.wheelSelector)
        .style.top = `${top}px`;
      document.addEventListener("pointermove", this.handlePointerMoveWheel);
      document.addEventListener("pointerup", this.handlePointerUpWheel);
    },
    handlePointerDownBar(e : PointerEvent) {
      const bar= <HTMLElement>this.$refs.bar;
      const bounding = bar.getBoundingClientRect();
      const {top} = this.scaleOffsetToPixels(
        e.clientY - bounding.top,
      );
      (<HTMLElement>this.$refs.barSelector)
        .style.top = `${top}px`;
      document.addEventListener("pointermove", this.handlePointerMoveBar);
      document.addEventListener("pointerup", this.handlePointerUpBar);
    },
    moveWheelSelector(e : PointerEvent) {
      const wheel = <HTMLElement>this.$refs.wheel;
      const bounding = wheel.getBoundingClientRect();
      const radius = bounding.width / 2;
      const center = [bounding.left + bounding.width / 2, bounding.top + bounding.height / 2];
      const diff = [center[0] - e.clientX, center[1] - e.clientY];
      const length = Math.sqrt(diff[0] * diff[0] + diff[1]*diff[1]);
      if (length <= radius) {
        const {top, left} = this.scaleOffsetToPixels(
          e.clientY - bounding.top,
          e.clientX - bounding.left
        );
        (<HTMLElement>this.$refs.wheelSelector)
          .style.top = `${top}px`;
        (<HTMLElement>this.$refs.wheelSelector)
          .style.left = `${left}px`;
      } else {
        const normalizedScaled = [radius * diff[0] / length, radius * diff[1] / length];
        const {top, left} = this.scaleOffsetToPixels(
          -normalizedScaled[1] + radius,
          -normalizedScaled[0] + radius
        );
        (<HTMLElement>this.$refs.wheelSelector)
          .style.left = `${left}px`;
        (<HTMLElement>this.$refs.wheelSelector)
          .style.top = `${top}px`;
      }
      this.getWheelCoordinates();
    },
    handlePointerMoveWheel(e : PointerEvent) {
      this.moveWheelSelector(e);
    },
    moveBarSelector(e : PointerEvent) {
      const bar = <HTMLElement>this.$refs.bar;
      // TODO Fix issue when moving bar and pointer up is on node color (closes picker)
      const bounding = bar.getBoundingClientRect();
      if (e.clientY > bounding.top + bounding.height) {
        const {top} = this.scaleOffsetToPixels(
          bounding.height,
        );
        (<HTMLElement>this.$refs.barSelector).style.top = `${top}px`;
      } else if  (e.clientY < bounding.top) {
        (<HTMLElement>this.$refs.barSelector).style.top = `0`;
      } else {
        const {top} = this.scaleOffsetToPixels(
          e.clientY - bounding.top,
        );
        (<HTMLElement>this.$refs.barSelector).style.top = `${top}px`;
      }
      this.getWheelCoordinates();
      (<HTMLElement>this.$refs.wheel).style.filter = 
        `brightness(${this.color.getHsv().z})`;
    },
    handlePointerMoveBar(e : PointerEvent) {
      this.moveBarSelector(e);
    },
    getWheelCoordinates() {
      const wheel = <HTMLElement>this.$refs.wheel;
      const bounding = wheel.getBoundingClientRect();
      const radius = bounding.width / 2;
      const wheelSelector = (<HTMLElement>this.$refs.wheelSelector);
      const {left : scaledLeft, top : scaledTop} = 
       this.scaleOffsetFromPixels(
        parseFloat(wheelSelector.style.top),
        parseFloat(wheelSelector.style.left)
      );
      const top = 1 - scaledTop / radius;
      const left = scaledLeft / radius - 1;
      const len = Math.sqrt(left * left + top * top);
      let angle = 0;
      if (top === 0 && left === 0) {
        angle = 0;
      } else if (top >= 0 && left >= 0) {
        // top >= 0 left >= 0
        angle = Math.PI + Math.atan(left/top);
      } else if (top >= 0) {
        // top >= 0 left < 0
        angle = Math.atan(left/top) + Math.PI;
      } else if (left >= 0) {
        // top < 0 left >= 0
        angle = Math.atan(left/top) + 2 * Math.PI;
      } else {
        // top < 0 left < 0
        angle = Math.atan(left/top);
      }
      let hue = clamp(0, 360, angle * 180 / Math.PI);
      if (hue === 360) {
        hue = 0;
      }
      const saturation = clamp(0, 1, len);
      const bar = (<HTMLElement>this.$refs.bar);
      const barBounding = bar.getBoundingClientRect();
      const barSelector = (<HTMLElement>this.$refs.barSelector);
      const {top : topValue} = this.scaleOffsetFromPixels(parseFloat(barSelector.style.top));
      const value = clamp(0, 1, 1 - topValue / barBounding.height);
      console.log("sethsv", [hue, saturation, value], this.color.getAlpha());
      this.color.setHSV([hue, saturation, value]);
      this.updateComponentValues();
    },
    handlePointerUpWheel(e : PointerEvent) {
      this.moveWheelSelector(e);
      document.removeEventListener("pointermove", this.handlePointerMoveWheel);
      document.removeEventListener("pointerup", this.handlePointerUpWheel);
    },
    handlePointerUpBar(e : PointerEvent) {
      this.moveBarSelector(e);
      document.removeEventListener("pointermove", this.handlePointerMoveBar);
      document.removeEventListener("pointerup", this.handlePointerUpBar);
    },
    scaleOffsetToPixels(top : number, left ?: number) : {left : number, top : number} {
      if (this.canvas === null) {
        throw "[ColorPicker::scaleOffsetToPixels] canvas is null";
      }
      left = left || 0;
      const viewBox = this.canvas.getAttribute("viewBox");
      if (viewBox === null) {
        throw "[ColorPicker::scaleOffsetToPixels] viewBox is null";
      }
      const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
      const canvasBounding = this.canvas.getBoundingClientRect();
      return {
        left : left * viewBoxSplit[3] / canvasBounding.height,
        top : top * viewBoxSplit[2] / canvasBounding.width
      };
    },
    scaleOffsetFromPixels(top : number, left ?: number) : {left : number, top : number} {
      if (this.canvas === null) {
        throw "[ColorPicker::scaleOffsetFromPixels] canvas is null";
      }
      left = left || 0;
      const viewBox = this.canvas.getAttribute("viewBox");
      if (viewBox === null) {
        throw "[ColorPicker::scaleOffsetToPixels] viewBox is null";
      }
      const viewBoxSplit = viewBox.split(" ").map((el) => parseFloat(el));
      const canvasBounding = this.canvas.getBoundingClientRect();
      return {
        left : left / viewBoxSplit[3] * canvasBounding.height,
        top : top / viewBoxSplit[2] * canvasBounding.width
      };
    },
    setSelector() {
      const hsv = this.defaultValue.getHsv()
      const [h, s, v] = [hsv.x, hsv.y, hsv.z];
      //this.hue = h;
      //this.saturation = s;
      //this.value = v;
      const bar = (<HTMLElement>this.$refs.bar);
      const barBounding = bar.getBoundingClientRect();
      const barSelector = (<HTMLElement>this.$refs.barSelector);
      const {top : topBar} = this.scaleOffsetToPixels(
        (-v + 1) * barBounding.height
      );
      barSelector.style.top = `${topBar}px`;
      const angle = h * Math.PI / 180;
      const sin = Math.sin(angle + Math.PI / 2);
      const cos = Math.cos(angle + Math.PI / 2);
      const wheel = <HTMLElement>this.$refs.wheel;
      (<HTMLElement>this.$refs.wheel).style.filter = `brightness(${v})`;
      const bounding = wheel.getBoundingClientRect();
      const radius = bounding.width / 2;
      const wheelSelector = (<HTMLElement>this.$refs.wheelSelector);
      const {top : topWheel, left : leftWheel} = this.scaleOffsetToPixels(
        sin * s * radius + radius,
        s * radius * cos + radius
      );
      wheelSelector.style.left = `${leftWheel}px`;
      wheelSelector.style.top = `${topWheel}px`;
    },
    updateStringComponentValues() {
      switch(this.colorSpace) {
        case "HSV":
          this.componentValues.forEach((el : number, idx : number) => {
            if (idx > 0 && idx < 3) {
              this.stringComponentValues[idx] = el.toString() + "%";
            } else {
              this.stringComponentValues[idx] = el.toString();
            }
          });
          break;
        case "RGB":
          this.componentValues.forEach((el : number, idx : number) => {
            this.stringComponentValues[idx] = el.toString();
          });
          break;
        case "HEX":
          for (let i = 0; i < 3; i ++) {
            this.stringComponentValues[i] = this.componentValues[i].toString(16).toUpperCase();
          }
          this.stringComponentValues[3] = this.componentValues[3].toString();
          break;
        case "":
          break;
        default:
          throw "[colorSpace] Unknown color space";
      }
    },
    updateComponentValues() {
      switch (this.colorSpace) {
        case "HSV":
          const hsv = this.color.getHsv();
          this.componentValues = [
            Math.floor(hsv.x),
            Math.floor(hsv.y * 100),
            Math.floor(hsv.z * 100),
            this.color.getAlpha()];
          break;
        case "HEX":
        case "RGB":
          const rgb = this.color.getRgb();
          console.log("newRgb", rgb);
          this.componentValues = [
            Math.floor(rgb.x),
            Math.floor(rgb.y),
            Math.floor(rgb.z),
            this.color.getAlpha()];
          break;
        case "":
          break;
        default:
        throw "[colorSpace] Unknown color space";
      }
      this.updateStringComponentValues();
      this.emitNewColor();
    },
    emitNewColor() {
      const rgb = this.color.getRgb();
      const hsl = this.color.getHsl();
      const hsv = this.color.getHsv();
      const alpha = this.color.getAlpha();
      console.log("Emitting", hsv, alpha);
      const hsvData = [hsv.x, hsv.y, hsv.z, alpha];
      const hslData = [hsl.x, hsl.y, hsl.z, alpha];
      const rgbData = [rgb.x, rgb.y, rgb.z, alpha];
      const rgbString = this.color.getColorStringRgba();
      const hslString = this.color.getColorStringHsla();
      const hexString = this.color.getColorStringHex();
      this.$emit("newColorRawRgb", rgbData);
      this.$emit("newColorRawHsl", hslData);
      this.$emit("newColorRawHsv", hsvData);
      this.$emit("newColorStringRgb", rgbString);
      this.$emit("newColorStringHex", hexString);
      this.$emit("newColorStringHsl", hslString);
    },
    handlePointerDownClosing(e : PointerEvent) {
      const container = <HTMLElement>this.$refs.container;
      const bounding = container.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        return;
      }
      e.cancelBubble = true;
      e.preventDefault();
      document.addEventListener("pointerup", this.handlePointerUpClosing);
    },
    handlePointerUpClosing(e : PointerEvent) {
      const container = <HTMLElement>this.$refs.container;
      const bounding = container.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        return;
      }
      e.cancelBubble = true;
      e.preventDefault();
      this.$nextTick(() => {
        this.$emit("closeMe");
      });
    },
    handleNewStringValueHSV(newVal : string, idx : number) {
      const hsv = this.color.getHsv();
      let hue = hsv.x;
      let saturation = hsv.y;
      let value = hsv.z;
      switch(idx) {
        case 0:
          let tempInt = parseInt(newVal);
          if (tempInt < 0) {
            this.stringComponentValues[idx] = '0';
            tempInt = 0;
          } else if (tempInt >= 360) {
            this.stringComponentValues[idx] = (tempInt % 360).toFixed(0);
            tempInt = tempInt % 360;
          } else {
            this.stringComponentValues[idx] = tempInt.toFixed(0);
          }
          hue = tempInt;
          break;
        case 1:
          if (newVal.includes("%")) {
            newVal = newVal.replace("%", "");
          }
          let tempSat = parseInt(newVal);
          if (tempSat < 0) {
            tempSat = 0;
            this.stringComponentValues[idx] = '0%';
          } else if (tempSat >= 100) {
            tempSat = 1;
            this.stringComponentValues[idx] = '100%';
          } else {
            this.stringComponentValues[idx] = tempSat.toFixed(0) + '%';
            tempSat /= 100;
          }
          saturation = tempSat;
          break;
        case 2:
          if (newVal.includes("%")) {
            newVal = newVal.replace("%", "");
          }
          let tempValue = parseInt(newVal);
          if (tempValue < 0) {
            tempValue = 0;
            this.stringComponentValues[idx] = '0%';
          } else if (tempValue >= 100) {
            tempValue = 1;
            this.stringComponentValues[idx] = '100%';
          } else {
            this.stringComponentValues[idx] = tempValue.toFixed(0) + '%';
            tempValue /= 100;
          }
          value = tempValue;
          break;
        default:
          throw "[ColorPicker::handleNewStringValueHSV] Invalid Index";
      }
      console.log("setHSV", [hue, saturation, value]);
      this.color.setHSV([hue, saturation, value]);
    },
    handleNewStringValueRGB(newVal : string, idx : number) {
      const rgb = this.color.getRgb();
      let r = rgb.x;
      let g = rgb.y;
      let b = rgb.z;
      let tempInt = parseInt(newVal);
      if (tempInt < 0) {
        tempInt = 0;
        this.stringComponentValues[idx] = '0';
      } else if (tempInt > 255) {
        tempInt = 255;
        this.stringComponentValues[idx] = '255';
      } else {
        this.stringComponentValues[idx] = tempInt.toFixed(0);
      }
      const newColor : [number, number, number] = [r, g, b];
      newColor[idx] = tempInt;
      this.color.setRGB(newColor);
    },
    handleNewStringValueHEX(newVal : string, idx : number) {
      const hex = this.color.getHex();
      let r = hex.x;
      let g = hex.y;
      let b = hex.z;
      let tempInt = parseInt(newVal, 16);
      if (tempInt < 0) {
        tempInt = 0;
        this.stringComponentValues[idx] = '00';
      } else if (tempInt > 255) {
        tempInt = 255;
        this.stringComponentValues[idx] = 'FF';
      } else {
        this.stringComponentValues[idx] = tempInt.toString(16).toUpperCase();
      }
      const newColor : [number, number, number] = [r, g, b];
      newColor[idx] = tempInt;
      this.color.setHEX(newColor);
    },
    setNewValue(newVal : string, idx : number) {
      console.log("setnew", newVal, idx);
      if (idx === 3) {
        let tempInt = parseFloat(newVal);
        if (tempInt < 0) {
          tempInt = 0;
          this.stringComponentValues[idx] = '0';
        } else if (tempInt > 1) {
          tempInt = 1;
          this.stringComponentValues[idx] = '1';
        } else {
          this.stringComponentValues[idx] = tempInt.toFixed(2);
        }
        this.color.setAlpha(tempInt);
      } else {
        switch(this.colorSpace) {
          case "HSV":
            this.handleNewStringValueHSV(newVal, idx);
            break;
          case "RGB":
            this.handleNewStringValueRGB(newVal, idx);
            break;
          case "HEX":
            this.handleNewStringValueHEX(newVal, idx);
            break;
          default:
            throw "[ColorPicker:setNewValue] Invalid colorSpace";
        }
      }
      this.emitNewColor();
      this.setSelector();
    },
    copyColor() {
      let value = "";
      switch (this.colorSpace) {
        case "HSV":
          value = this.color.getColorStringHsla();
          break;
        case "HEX":
          value = this.color.getColorStringHex();
          break;
        case "RGB":
          value = this.color.getColorStringRgba();
          break;
        case "":
          break;
        default:
        throw "[copyColor] Unknown color space";
      }
      const inputEl = document.createElement("input");
      inputEl.value = value;
      document.body.appendChild(inputEl);
      inputEl.select();

      document.execCommand("copy");
      document.body.removeChild(inputEl);
      console.log("Copied", value);
    },
  },
  watch: {
    colorSpace() {
      switch (this.colorSpace) {
        case "HSV":
          this.componentNames = ["H", "S", "V", "A"];
          break;
        case "HEX":
        case "RGB":
          this.componentNames = ["R", "G", "B", "A"];
          break;
        case "":
          break;
        default:
        throw "[colorSpace] Unknown color space";
      }
      this.updateComponentValues();
    },
    defaultValue() {
      console.log("set Def", this.defaultValue);
      this.color.clone(this.defaultValue);
      this.setSelector();
    },
    hue() {
    },
    //saturation() {
    //  this.$emit("newColor", this.genColor());
    //},
    //value() {
    //  this.$emit("newColor", this.genColor());
    //},
  },
  mounted() {
    this.color.clone(this.defaultValue);
    const container = <HTMLElement>this.$refs.container;
    if (this.showBelow) {
      container.style.bottom = "auto";
      container.style.top = "100%";
    }
    (<HTMLElement>this.$refs.wheel)
      .addEventListener("pointerdown", this.handlePointerDownWheel);
    (<HTMLElement>this.$refs.bar)
      .addEventListener("pointerdown", this.handlePointerDownBar);
    document.addEventListener("pointerdown", this.handlePointerDownClosing);
    (<HTMLElement>this.$refs.barSelector).style.top = "0";
    console.log("mounted");
    this.setSelector();
    this.getWheelCoordinates();
    this.colorSpace = "HSV";
  },
  beforeUnmount() {
    (<HTMLElement>this.$refs.wheel)
      .removeEventListener("pointerdown", this.handlePointerDownWheel);
    (<HTMLElement>this.$refs.bar)
      .removeEventListener("pointerdown", this.handlePointerDownBar);
    document.removeEventListener("pointerdown", this.handlePointerDownClosing);
    document.removeEventListener("pointerup", this.handlePointerUpClosing);
  },
})
</script>
  
<style lang="scss" scoped>
.color-picker-container {
  position: absolute;
  transform: translate(-50%, 00%);
  background-color: #252525;
  border-radius: 5px;
  left: 50%;
  bottom: 100%;
  box-shadow: 0px 0px 0px 0.5px #696969;
  min-width: 250px;
  z-index: 10;
}

.color-picker-colors {
  width: 100%;
  position: relative;
  height: 160px;
  background-color: #252525;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}

.color-picker-wheel {
  background: conic-gradient(from 180deg, 
    hsl(0,100%,50%), 
    hsl(60,100%,50%),
    hsl(120,100%,50%),
    hsl(180,100%,50%),
    hsl(240,100%,50%),
    hsl(300,100%,50%),
    hsl(360deg,100%,50%)),
    radial-gradient(closest-side,hsl(0deg 0% 100%),transparent);
  height: 100%;
  position: relative;
  background-blend-mode: overlay;
  color: hsl(30deg 67% 98%);
  border-radius: 100%;
  aspect-ratio: 1;
  display: inline-block;
  &-selector {
    width: 3px;
    height: 3px;
    top: 10px;
    left: 20px;
    border: 1px solid black;
    transform: translate(-50%, -50%);
    border-radius: 3px;
      background-color: white;
      position: absolute;

  }
}
.color-picker-bar {
  height: 100%;
  width: 11px;
  background-image: linear-gradient(to bottom, white, black);
  display: inline-block;
  border-radius: 4px;
  position: relative;
  &-selector {
    width: 3px;
    height: 3px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    position: absolute;
  }
}

.color-picker-space-container,
.color-picker-value-container {
  width: 100%;
  position: relative;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  box-sizing: border-box;
}
.color-picker-space {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
  border-radius: 0.5rem;
  outline: 0.5px solid #696969;
  &-el:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }
  &-el:not(:first-child):not(:last-child)::after,
  &-el:not(:first-child):not(:last-child)::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0.5px;
    background-color: #696969;
    top: 0;
  }
  &-el:not(:first-child):not(:last-child)::before {
    transform: translate(-50%, 0);
  }
  &-el:not(:first-child):not(:last-child)::after {
    right: 0;
    transform: translate(50%, 0);
  }
  &-el {
    width: 100%;
    position: relative;
    cursor: pointer;
  }
  &-el:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &-el p {
    margin: 0.5rem;
    text-align: center;
  }
  &-el.selected{
    background-color: blueviolet;
  }
}
.color-picker-value {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
  border-radius: 0.5rem;
  gap: 0.5rem;
  &-el {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-el p {
    margin-block: 0.5rem;
  }
}
.color-picker-copy {
  position: absolute;
  z-index: 100;
  background: #151515;
  padding: 0.6rem;
  border-radius: 30px;
  outline: 0.5px solid #696969;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
  border: none;
  box-sizing: initial;
  cursor: pointer;
  & img {
    filter: invert(1);
    fill: white;
    height: 80%;
    position: relative;
  }
}
</style>
