<template>
  <div class="color-picker-container"> 
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
          <input type="text" v-model="stringComponentValues[idx]"/>
          <p>{{componentNames[idx]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vector4}  from "three";
import { PropType, defineComponent } from 'vue'

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
  },
  computed: {
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
      console.log("move");
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
      console.log("coord", top, left);
      const len = Math.sqrt(left * left + top * top);
      let angle = 0;
      console.log("angle", Math.atan(left/top));
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
      console.log("final angle", angle * 180 / Math.PI);
      this.hue = this.clamp(0, 360, angle * 180 / Math.PI);
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
    genColor() {
      //console.log({h:this.hue,s:this.saturation,v: this.value});
      const [h, s, l] = this.hsvToHsl(this.hue, this.saturation, this.value);
      return `hsl(${h.toFixed(2)}deg, ${s * 100}%, ${l * 100}%)`;
    },
    hsvToHsl(h : number, s : number, v : number) {
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
      return [h, s, l];
    },
    rgb2hsv (r : number, g : number, b : number) {
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
      return {
          h: h * 360,
          s: s,
          v: v
      };
    },
    // h 0 <=360, s,v,a 0<=1
    hsvToRgb(H : number, S : number, V : number) {
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
      let {h, s, v} = this.rgb2hsv(r, g, b);
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
    },
    clamp(min : number, max: number, value : number) {
      return Math.min(Math.max(min, value), max);
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
      this.$emit("newColor", this.genColor());
    },
    saturation() {
      this.$emit("newColor", this.genColor());
    },
    value() {
      this.$emit("newColor", this.genColor());
    },
  },
  mounted() {
    (<HTMLElement>this.$refs.wheel)
      .addEventListener("pointerdown", this.handlePointerDownWheel);
    (<HTMLElement>this.$refs.bar)
      .addEventListener("pointerdown", this.handlePointerDownBar);
    (<HTMLElement>this.$refs.barSelector).style.top = "0";
    this.setSelector();
    this.getWheelCoordinates();
    this.colorSpace = "HSV";
    this.updateComponentValues();
  }
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
  &-el {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-el p {
    margin-block: 0.5rem;
  }
  &-el input {
    width: 83%;
    line-height: 1.6rem;
    text-align: center;
    color: #eee;
    background: #111111;
    font-family: monospace;
    outline: 0.5px solid #696969;
    border: none;
    border-radius: 0.15rem;
  }
}
</style>
