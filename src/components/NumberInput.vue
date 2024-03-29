<template>
  <div ref="inputContainer" :class="['shader-node-number-input', {'connected': isConnected}]">
    <span v-if="state === State.Init && !isConnected"
      :class="['shader-node-number-input-container', {'single-element' : isSmallRange}]"
    >
      <span v-if="!isSmallRange" class="shader-node-arrow-left"
      @pointerdown="handlePointerDown">
        <img alt="Left arrow" src="/icons/arrow-left.svg" 
          class="shader-node-arrow-img"
        />
      </span>
      <span :class="['shader-node-number-input-body', {'single-element' : isSmallRange}]"
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
    <span v-else-if="!isConnected"
      class="shader-node-number-input-active"
      >
      <input ref="inputField" class="shader-node-number-input-field" type="text" v-model="tempValue"/>
    </span>
    <span v-else
      class="shader-node-number-input-connected"
    >
      <span class="shader-node-number-input-label">{{input.getName()}}</span>
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
      tempValue: "",
      maxValue : undefined as undefined | number,
      minValue : undefined as undefined | number,
      range: undefined as undefined | number,
      State,
      state: State.Init,
      lastPositionX: 0,
      startElement : null as null | HTMLElement,
      pointerMoved : false,
      isConnected : false,
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
      let diffX = e.clientX - this.lastPositionX;
      if (Math.abs(diffX) < 0.2) {
        return;
      }
      this.pointerMoved = true;
      let displacement = Math.abs(Math.floor(diffX));
      if (diffX > 0) {
        this.increaseValue(this.defaultDiff * displacement);
      } else if (diffX < 0) {
        this.decreaseValue(this.defaultDiff * displacement);
      }
      this.lastPositionX = e.clientX;
    },
    handlePointerUp(e : PointerEvent) {
      if (this.startElement === null) {
        throw "[NumberInput] Start element is null";
      }
      if (!this.pointerMoved &&
        this.startElement.classList.contains('shader-node-arrow-right')) {
        this.increaseValue();
      } else  if (!this.pointerMoved &&
          this.startElement.classList.contains('shader-node-arrow-left')) {
        this.decreaseValue();
      } else if (!this.pointerMoved) {
        this.state = State.Active;
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("pointerdown", this.handleSaveContent);
        this.$nextTick(() => {
          (<HTMLInputElement>this.$refs.inputField).focus();
          (<HTMLInputElement>this.$refs.inputField).select();
        });
      }
      this.pointerMoved = false;
      document.removeEventListener("pointermove", this.handlePointerMove);
      document.removeEventListener("pointerup", this.handlePointerUp);
    },
    resetInitState() {
      this.state = State.Init;
      this.value = parseFloat(this.tempValue);
      this.tempValue = this.value.toFixed(3).toString();

      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("pointerdown", this.handleSaveContent);
    },
    handleSaveContent(e : PointerEvent) {
      let container = <HTMLElement>this.$refs.inputContainer;
      let bounding = container.getBoundingClientRect();
      if (e.clientX < bounding.left || e.clientX > bounding.left + bounding.width ||
        e.clientY < bounding.top || e.clientY > bounding.top + bounding.height) {
        this.resetInitState();
      }
    },
    handleKeyDown(e : KeyboardEvent) {
      if (this.state === State.Active && e.key === "Enter") {
        this.resetInitState();
      }
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
      this.tempValue = this.value.toFixed(3).toString();
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
      this.tempValue = this.value.toFixed(3).toString();
    },
    checkIsConnected() {
      this.isConnected = this.input.isConnected();
    },
  },
  mounted() {
    this.emitter.on("recompile", this.checkIsConnected);
    this.value = this.input.getValue().value;
    if (this.value === null) {
      throw "[NumberInput] value is null";
    }
    this.tempValue = this.value.toString();
    this.minValue = this.input.getMinValue();
    this.maxValue = this.input.getMaxValue();
    if(this.minValue !== undefined && this.maxValue !== undefined) {
      this.range = this.maxValue - this.minValue;
    }
  },
  watch: {
    value(_, oldVal) {
      if (oldVal === null || this.value === null) return;

      const value = this.value;
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
.shader-node-number-input-connected {
  position: relative;
  height: 1.35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5px;
}
.shader-node-number-input {
  pointer-events: all;
  width: 100%;
  box-sizing: border-box;
  background-color: #252525;
  border-radius: 5px;
  &.connected {
    background-color: transparent;
  }
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

.shader-node-number-input-field {
  background: #555;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding-inline: 5px;
  outline: none;
  border: 0;
  position: relative;
  border-radius: 5px;
  color: #eee;
  font-family: monospace;
  height: 1.35rem;
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
  &.single-element {
    border-radius: 5px;
  }
}
.shader-node-number-input-active {
  height: 1.35rem;
  position: relative;
}
</style>
