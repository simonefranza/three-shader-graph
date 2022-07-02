<template>
  <div class="shader-node-number-input">
    <span v-if="state === State.Init"
      :class="['shader-node-number-input-container', {'single-element' : isSmallRange}]"
    >
      <span v-if="!isSmallRange" class="shader-node-arrow-left"
      @pointerdown="handlePointerDown">
        <img alt="Left arrow" src="/icons/arrow-left.svg" 
          class="shader-node-arrow-img"
        />
      </span>
      <span class="shader-node-number-input-body"
      @pointerdown="handlePointerDown">
        <span class="shader-node-number-input-label">{{input.getName()}}</span>
        <span class="shader-node-number-input-value">{{value?.toFixed(3)}}</span>
      </span>
      <span v-if="!isSmallRange" class="shader-node-arrow-right"
      @pointerdown="handlePointerDown">
        <img alt="Right arrow" src="/icons/arrow-right.svg" 
          class="shader-node-arrow-img"
        /></span>
    </span>
    <span v-else
      class="shader-node-number-input-active"
      >
      <input class="shader-node-number-input-field" type="text" v-model="value"/>
      </span>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { InputNumber } from "../graph/nodes/InputNumber";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";
enum State {
  Init,
  Active
};
export default defineComponent({
  data() {
    return {
      value: null as null | number,
      maxValue : undefined as undefined | number,
      minValue : undefined as undefined | number,
      range: undefined as undefined | number,
      State,
      state: State.Init,
      lastPositionX: 0,
      startElement : null as null | HTMLElement,
      pointerMoved : false,
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
  computed: {
    isSmallRange() {
      if (this.range === undefined) {
        return false;
      }
      return this.range <= 2;
    },
    defaultDiff() {
      return this.isSmallRange ? 0.007 : 0.2;
    },
  },
  methods: {
    handlePointerDown(e : PointerEvent) {
      this.lastPositionX = e.clientX;
      this.startElement = <HTMLElement>e.target;
      document.addEventListener("pointermove", this.handlePointerMove);
      document.addEventListener("pointerup", this.handlePointerUp);
    },
    handlePointerMove(e : PointerEvent) {
      this.pointerMoved = true;
      let diffX = e.clientX - this.lastPositionX;
      let displacement = Math.abs(Math.floor(diffX));
      if (diffX > 0) {
        this.increaseValue(this.defaultDiff * displacement);
      } else if (diffX < 0) {
        this.decreaseValue(this.defaultDiff * displacement);
      }
      console.log(diffX);
      this.lastPositionX = e.clientX;
    },
    handlePointerUp(e : PointerEvent) {
      if (this.startElement === null) {
        throw "[NumberInput] Start element is null";
      }
      console.log(this.pointerMoved,
      this.startElement.classList.contains('shader-node-arrow-left'));
      if (!this.pointerMoved &&
        this.startElement.classList.contains('shader-node-arrow-right')) {
        this.increaseValue();
      } else  if (!this.pointerMoved &&
          this.startElement.classList.contains('shader-node-arrow-left')) {
        this.decreaseValue();
      } else {
        //
      }
      this.pointerMoved = false;
      document.removeEventListener("pointermove", this.handlePointerMove);
      document.removeEventListener("pointerup", this.handlePointerUp);
    },
    increaseValue(amount ?: number) {
      if (this.value === null) {
        throw "[NumberInput] value is null";
      }
      amount = amount || this.defaultDiff;
      if (this.maxValue === undefined) {
        this.value += amount;
      } else if (this.value + amount <= this.maxValue) {
        this.value += amount;
      } else {
        this.value = this.maxValue;
      }
    },
    decreaseValue(amount ?: number) {
      if (this.value === null) {
        throw "[NumberInput] value is null";
      }
      amount = amount || this.defaultDiff;
      if (this.minValue === undefined) {
        this.value -= amount;
      } else if (this.value - amount >= this.minValue) {
        this.value -= amount;
      } else {
        this.value = this.minValue;
      }
    }
  },
  mounted() {
    this.value = this.input.getValue().value;
    this.minValue = this.input.getMinValue();
    this.maxValue = this.input.getMaxValue();
    if(this.minValue !== undefined && this.maxValue !== undefined) {
      this.range = this.maxValue - this.minValue;
    }
  },
  watch: {
    value(_, oldVal) {
      if (oldVal === null || this.value === null) return;

      console.log("new value", this.value, oldVal);
      const value = this.value !== "" ? parseFloat(this.value) : 0;
      this.input.setValue(value);
      this.emitter.emit("recompile");
    },
  },
});
</script>

<style lang="scss" scoped>
.shader-node-number-input-container {
  display: grid;
  grid-template-columns: 15px 1fr 15px;
  position: relative;
  height: 1.35rem;
  &.single-element {
    grid-template-columns: 1fr;
  }
}
.shader-node-number-input {
  pointer-events: all;
  width: 100%;
  background-color: #252525;
  border-radius: 5px;
  box-sizing: border-box;
}
.shader-node-input-field {
  display: inline;
  width: 50px;
  pointer-events: all;
}
.shader-node-arrow-left,
.shader-node-arrow-right {
  display: inline-block;
  width: 15px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
}

.shader-node-arrow-left:hover {
  border-radius: 5px 0 0 5px;
}
.shader-node-arrow-right:hover {
  border-radius: 0 5px 5px 0;
}

.shader-node-arrow-img {
  pointer-events: none;
  width: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.shader-node-number-input-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5px;
  cursor: col-resize;
  &:hover {
    background-color: #444;
  }
}
</style>
