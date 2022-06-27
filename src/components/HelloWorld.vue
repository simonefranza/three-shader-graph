<template>
  <div id="container">
    </div>
</template>

<script>
import { Manager } from "../graph/Manager";
let manager = null;
export default {
  data() {
    return {
      scale: 1,
    };
  },
  mounted() {
    manager = new Manager(document.getElementById("container"));
  },
}
</script>

<style scoped>

#container {
  width: 100vw;
  height: 100vh;
}
</style>
