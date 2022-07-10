<template>
  <div
    ref="pickContainer"
    @pointerdown="handlePointerDown"
    class="gradient-pick-container"
    :style="{left : stylePosition}"
  >
  <div
    :class="['gradient-pick', {selected: isSelected}]"
    :style="{'background-color': color}"
  >
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      gradientBar : undefined as HTMLElement | undefined,
    };
  },
  props: {
    color: {
      type : String,
      required: true,
    },
    position: {
      type : Number,
      required: true,
    },
    isSelected : {
      type : Boolean,
      required: true,
    },
  },
  computed: {
    stylePosition() {
      return `${this.position * 100}%`;
    },
  },
  methods: {
    computePickerPosition(e : PointerEvent) {
      const bounding = this.gradientBar!.getBoundingClientRect();
      let left = 0;
      if (e.clientX < bounding.left) {
        left = 0;
      } else if (e.clientX > bounding.right) {
        left = 1;
      } else {
        const distFromLeft = e.clientX - bounding.left;
        left = distFromLeft / bounding.width;
      }
      //const container = <HTMLElement>this.$refs.pickContainer;
      //container.style.left = `${left * 100}%`;
      return left;
    },
    handlePointerDown() {
      document.addEventListener("pointermove", this.handlePointerMove);
      document.addEventListener("pointerup", this.handlePointerUp);
    },
    handlePointerMove(e : PointerEvent) {
      const left = this.computePickerPosition(e);
      this.$emit("newPosition", left);
    },
    handlePointerUp(e : PointerEvent) {
      const left = this.computePickerPosition(e);
      this.$emit("newPosition", left);
      document.removeEventListener("pointermove", this.handlePointerMove);
      document.removeEventListener("pointerup", this.handlePointerUp);
    },
  },
  mounted() {
    const container = <HTMLElement>this.$refs.pickContainer;
    this.gradientBar = <HTMLElement>container.parentNode;
  }
})
</script>


<style lang="scss" scoped>
.gradient-pick-container {
  transform: translate(-50%, -100%);
  position: absolute;
  width: 10px;
  top: -50%;
}
.gradient-pick {
  background: red;
  width: 10px;
  height: 10px;
  position: relative;
  border-radius: 10px;
  outline: 0.5px solid #eee;
  cursor: pointer;
  &.selected {
    outline: 1.5px solid #eee;
  }

  &::before{
    position: relative;
    content: "";
    height: 10px;
    background-color: #111;
    width: 2px;
    display: block;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, 50%);
    z-index: -1;
    border: 0.5px solid #eee;
  }
}
</style>
