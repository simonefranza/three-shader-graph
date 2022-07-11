<template>
  <div ref="container" class="color-picker-container"> 
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

export default defineComponent({
  data() {
    return {
      hue : 0,
      saturation : 100,
      value: 1,
      alpha : 1,
      canvas : document.getElementById("renderer-canvas"),
      colorSpace : "",
      componentNames : ["H", "S", "V", "A"],
      componentValues : [0, 0, 0, 1],
      stringComponentValues : ["0", "0", "0", "1"],
    };
  },
  props: {
    defaultValue: {
      type: Object as PropType<Vector4>,
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
      (<HTMLElement>this.$refs.wheel).style.filter = `brightness(${this.value})`;
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
      this.hue = this.clamp(0, 360, angle * 180 / Math.PI);
      if (this.hue === 360) {
        this.hue = 0;
      }
      this.saturation = this.clamp(0, 1, len);
      const bar = (<HTMLElement>this.$refs.bar);
      const barBounding = bar.getBoundingClientRect();
      const barSelector = (<HTMLElement>this.$refs.barSelector);
      const {top : topValue} = this.scaleOffsetFromPixels(parseFloat(barSelector.style.top));
      this.value = this.clamp(0, 1, 1 - topValue / barBounding.height);
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
    genColorStringHex(r : number, g : number, b : number, a : number) {
      if (r < 0 || r > 255) {
        throw "[genColorStringHex] r is invalid: " + r;
      } else if (g < 0 || g > 255) {
        throw "[genColorStringHex] g is invalid: " + g;
      } else if (b < 0 || b > 255) {
        throw "[genColorStringHex] b is invalid: " + b;
      } else if (a < 0 || a > 1) {
        throw "[genColorStringHex] a is invalid: " + a;
      }
      return `#${Math.round(r).toString(16)}` +
        `${Math.round(g).toString(16)}${Math.round(b).toString(16)}` +
        `${Math.round(a * 255).toString(16)}`;
    },
    genColorStringRgba(r : number, g : number, b : number, a : number) {
      if (r < 0 || r > 255) {
        throw "[genColorStringRgba] r is invalid: " + r;
      } else if (g < 0 || g > 255) {
        throw "[genColorStringRgba] g is invalid: " + g;
      } else if (b < 0 || b > 255) {
        throw "[genColorStringRgba] b is invalid: " + b;
      } else if (a < 0 || a > 1) {
        throw "[genColorStringRgba] a is invalid: " + a;
      }
      return `rgba(${r}, ${g}, ${b}, ${a * 100}%)`;
    },
    genColorStringHsla(h : number, s : number, l : number, a : number) {
      if (h < 0 || h >= 360) {
        throw "[genColorStringHsla] h is invalid: " + h;
      } else if (s < 0 || s > 1) {
        throw "[genColorStringHsla] s is invalid: " + s;
      } else if (l < 0 || l > 1) {
        throw "[genColorStringHsla] l is invalid: " + l;
      } else if (a < 0 || a > 1) {
        throw "[genColorStringHsla] a is invalid: " + a;
      }
      return `hsla(${h.toFixed(2)}deg, ${(s * 100).toFixed(2)}%, ${(l * 100).toFixed(2)}%, ${(a * 100).toFixed(2)}%)`;
    },
    hsvToHsl(h : number, s : number, v : number) : [number, number, number] {
      // both hsv and hsl values are in [0, 1]
      let l = (2 - s) * v / 2;
      if (l != 0) {
        if (l == 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * v / (l * 2);
        } else {
            s = s * v / (2 - l * 2);
        }
      }
      let hue = this.clamp(0, 360, h);
      if (hue === 360) {
        hue = 0;
      }
      return [hue, this.clamp(0, 1, s), this.clamp(0, 1, l)];
    },
    rgb2hsv (r : number, g : number, b : number) : [number, number, number] {
      //https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
      let rabs, gabs, babs, rr, gg, bb, h, s, v : number, diff : number, diffc;
      rabs = r;
      gabs = g;
      babs = b;
      v = Math.max(rabs, gabs, babs),
      diff = v - Math.min(rabs, gabs, babs);
      diffc = (c : number) => (v - c) / 6 / diff + 1 / 2;
      if (diff == 0) {
          h = s = 0;
      } else {
          s = diff / v;
          rr = diffc(rabs);
          gg = diffc(gabs);
          bb = diffc(babs);
    
          if (rabs === v) {
              h = bb - gg;
          } else if (gabs === v) {
              h = (1 / 3) + rr - bb;
          } else if (babs === v) {
              h = (2 / 3) + gg - rr;
          } else {
            console.log({rabs, gabs, babs, v, r, g, b});
            throw "[rgb2hsv] h is undefined";
          }
          if (h < 0) {
              h += 1;
          } else if (h > 1) {
              h -= 1;
          }
      }
      return [ h * 360, s, v ];
    },
    // h 0 <=360, s,v,a 0<=1
    hsvToRgb(H : number, S : number, V : number) : [number, number, number] {
      if (H < 0 || H >= 360) {
        throw "[hsvToRgb] H value invalid: " + H;
      } else if (S < 0 || S > 1) {
        throw "[hsvToRgb] S value invalid: " + S;
      } else if (V < 0 || V > 1) {
        throw "[hsvToRgb] V value invalid: " + V;
      }
      const C = V * S;
      const X = C * (1 - Math.abs(((H / 60) % 2) - 1));
      const m = V - C;
      let R_, G_, B_;
      if (H < 60) {
        [R_, G_, B_] = [C, X, 0];
      } else if (H < 120) {
        [R_, G_, B_] = [X, C, 0];
      } else if (H < 180) {
        [R_, G_, B_] = [0, C, X];
      } else if (H < 240) {
        [R_, G_, B_] = [0, X, C];
      } else if (H < 300) {
        [R_, G_, B_] = [X, 0, C];
      } else {
        [R_, G_, B_] = [C, 0, X];
      }
      return [(R_ + m) * 255, (G_ + m) * 255, (B_ + m) * 255];
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
      let r = this.defaultValue.x;
      let g = this.defaultValue.y;
      let b = this.defaultValue.z;
      let [h, s, v] = this.rgb2hsv(r, g, b);
      console.log({h,s,v});
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
      console.log("angle", angle + Math.PI, h);
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
          this.componentValues = [this.hue, this.saturation, this.value, this.alpha];
          this.componentValues[0] = Math.floor(this.hue);
          this.componentValues[1] = Math.floor(this.saturation * 100);
          this.componentValues[2] = Math.floor(this.value * 100);
          break;
        case "HEX":
        case "RGB":
          const components = this.hsvToRgb(this.hue, this.saturation, this.value);
          this.componentValues = [...components, this.alpha];
          this.componentValues.forEach((el, idx) => {
            this.componentValues[idx] = Math.floor(el);
          });
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
      const hsvData : [number, number, number] = [this.hue, this.saturation, this.value];
      const hslData : [number, number, number, number] = [...this.hsvToHsl(...hsvData), this.alpha];
      const rgbData : [number, number, number, number] = [...this.hsvToRgb(...hsvData), this.alpha];
      this.$emit("newColorRawRgb", rgbData);
      this.$emit("newColorRawHsl", hslData);
      this.$emit("newColorRawHsv", [...hsvData, this.alpha]);
      this.$emit("newColorStringRgb", this.genColorStringRgba(...rgbData));
      this.$emit("newColorStringHex", this.genColorStringHex(...rgbData));
      this.$emit("newColorStringHsl", this.genColorStringHsla(...hslData));
    },
    clamp(min : number, max: number, value : number) {
      return Math.min(Math.max(min, value), max);
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
      switch(idx) {
        case 0:
          let tempInt = parseInt(newVal);
          if (tempInt < 0) {
            this.stringComponentValues[idx] = '0';
            tempInt = 0;
          } else if (tempInt >= 360) {
            tempInt = tempInt % 360;
            this.stringComponentValues[idx] = (tempInt % 360).toFixed(0);
          } else {
            this.stringComponentValues[idx] = tempInt.toFixed(0);
          }
          this.hue = tempInt;
          break;
        case 1:
        case 2:
          const tempVal = parseInt(newVal);
          if (tempVal < 0) {
            this.stringComponentValues[idx] = '0%';
          } else if (tempVal >= 100) {
            this.stringComponentValues[idx] = '100%';
          } else {
            this.stringComponentValues[idx] = tempVal.toFixed(0) + '%';
          }
          break;
        default:
          throw "[ColorPicker::handleNewStringValueHSV] Invalid Index";
      }
    },
    handleNewStringValueRGB(newVal : string, idx : number) {
    },
    handleNewStringValueHEX(newVal : string, idx : number) {
    },
    setNewValue(newVal : string, idx : number) {
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
    document.addEventListener("pointerup", this.handlePointerUpClosing);
    (<HTMLElement>this.$refs.barSelector).style.top = "0";
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
</style>
