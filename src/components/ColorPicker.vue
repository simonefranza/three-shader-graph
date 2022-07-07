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
    };
  },
  props: {
    defaultValue: {
      type: Object as PropType<Vector4>,
      required: true,
    },
  },
  methods: {
    handlePointerDownWheel(e : PointerEvent) {
      const wheel = <HTMLElement>this.$refs.wheel;
      const bounding = wheel.getBoundingClientRect();
      (<HTMLElement>this.$refs.wheelSelector)
        .style.top = `${e.clientY - bounding.top}px`;
      (<HTMLElement>this.$refs.wheelSelector)
        .style.left = `${e.clientX - bounding.left}px`;
      document.addEventListener("pointermove", this.handlePointerMoveWheel);
      document.addEventListener("pointerup", this.handlePointerUpWheel);
    },
    handlePointerDownBar(e : PointerEvent) {
      const bar= <HTMLElement>this.$refs.bar;
      const bounding = bar.getBoundingClientRect();
      (<HTMLElement>this.$refs.barSelector)
        .style.top = `${e.clientY - bounding.top}px`;
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
        (<HTMLElement>this.$refs.wheelSelector)
          .style.top = `${e.clientY - bounding.top}px`;
        (<HTMLElement>this.$refs.wheelSelector)
          .style.left = `${e.clientX - bounding.left}px`;
      } else {
        const normalizedScaled = [radius * diff[0] / length, radius * diff[1] / length];
        (<HTMLElement>this.$refs.wheelSelector)
          .style.left = `${-normalizedScaled[0] + radius}px`;
        (<HTMLElement>this.$refs.wheelSelector)
          .style.top = `${-normalizedScaled[1] + radius}px`;
      }
      this.getWheelCoordinates();
    },
    handlePointerMoveWheel(e : PointerEvent) {
      this.moveWheelSelector(e);
    },
    moveBarSelector(e : PointerEvent) {
      const bar = <HTMLElement>this.$refs.bar;
      const bounding = bar.getBoundingClientRect();
      const top = parseFloat((<HTMLElement>this.$refs.barSelector).style.top) ?? 0;
      if (e.clientY > bounding.top + bounding.height) {
        (<HTMLElement>this.$refs.barSelector).style.top = `${bounding.height}px`;
      } else if  (e.clientY < bounding.top) {
        (<HTMLElement>this.$refs.barSelector).style.top = `0`;
      } else {
        (<HTMLElement>this.$refs.barSelector).style.top = `${e.clientY - bounding.top}px`;
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
      const center = [bounding.left + bounding.width / 2, bounding.top + bounding.height / 2];
      const wheelSelector = (<HTMLElement>this.$refs.wheelSelector);
      const left = parseFloat(wheelSelector.style.left)  / radius - 1;
      const top = 1 - parseFloat(wheelSelector.style.top) / radius;
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
      this.hue = angle * 180 / Math.PI;
      this.saturation = len;
      const bar = (<HTMLElement>this.$refs.bar);
      const barBounding = bar.getBoundingClientRect();
      const barSelector = (<HTMLElement>this.$refs.barSelector);
      let topValue = parseFloat(barSelector.style.top);
      this.value = 1 - topValue / barBounding.height;
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
      let rabs, gabs, babs, rr, gg, bb, h, s, v : number, diff : number, diffc, percentRoundFn;
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
          }
          if (h < 0) {
              h += 1;
          }else if (h > 1) {
              h -= 1;
          }
      }
      return {
          h: h * 360,
          s: s,
          v: v
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
      barSelector.style.top = `${(-v + 1) * barBounding.height}px`;
      const angle = h * Math.PI / 180;
      console.log("angle", angle + Math.PI, h);
      const sin = Math.sin(angle + Math.PI / 2);
      const cos = Math.cos(angle + Math.PI / 2);
      const wheel = <HTMLElement>this.$refs.wheel;
      (<HTMLElement>this.$refs.wheel).style.filter = `brightness(${v})`;
      const bounding = wheel.getBoundingClientRect();
      const radius = bounding.width / 2;
      const wheelSelector = (<HTMLElement>this.$refs.wheelSelector);
      wheelSelector.style.left = `${s * radius * cos + radius}px`;
      wheelSelector.style.top = `${sin * s * radius + radius}px`;
    },
  },
  watch: {
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
  }
})
</script>
  
<style lang="scss" scoped>
.color-picker-container {
  position: absolute;
  transform: translate(-50%, 00%);
  background-color: #111;
  border-radius: 5px;
  left: 50%;
  bottom: 100%;
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
</style>
