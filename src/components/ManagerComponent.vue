<template>
  <div ref="container" id="manager-container">
    <div ref="graphView" id="manager-svg"></div>
    <div ref="divider" id="manager-divider"></div>
    <canvas ref="canvasView" id="manager-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    callback: {
      required: true,
      type: Function,
    },
  },
  mounted() {
    this.callback(
      this.$refs.container,
      this.$refs.graphView,
      this.$refs.divider,
      this.$refs.canvasView
    );
  },
})
</script>


<style lang="scss" scoped>
#manager-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60fr 5px 40fr;
  grid-template-rows: 1fr;
  grid-template-areas: "svg divider canvas";
}

#manager-canvas {
  grid-area: canvas;
  width: 100%;
  height: 100%;
}

#manager-divider {
  grid-area: divider;
  width: 100%;
  height: 100%;
  background-color: #9b3df1;
  cursor: col-resize;
}

#manager-svg {
  grid-area: svg;
  background-image: radial-gradient(#2c2c2c 13%, transparent 13%);
  background-position: 0 0;
  background-size: 25px 25px;
  background-color: #1b1b1b;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
