<template>
  <div ref="container" id="container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Manager } from "../graph/Manager";

export default defineComponent({
  data() {
    return {
      scale: 1,
    };
  },
  mounted() {
    new Manager(<HTMLElement>this.$refs.container);
  },
})
</script>

<style scoped>

#container {
  width: 100vw;
  height: 100vh;
}
</style>
