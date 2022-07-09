<template>
  <div
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
import { PropType, defineComponent } from 'vue'
import { Picker } from "../graph/nodes/Gradient";

export default defineComponent({
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
