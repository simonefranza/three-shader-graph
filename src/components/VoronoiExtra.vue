<template>
  <div class="voronoi-extra-container"> 
    <div class="voronoi-extra-top">
      <div class="voronoi-extra-interpolation">
        Output: <dropdown
          :options="dropdownOptions"
          :selected="selectedFeatureOutput"
          @optionChosen="(idx) => { selectedFeatureOutput = idx }"
        ></dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dropdown from "./Dropdown.vue";

import { PropType, defineComponent } from 'vue'
import { VoronoiTexture, FeatureOutput } from "../graph/nodes/VoronoiTexture";
import {Emitter} from "mitt";
import {Events} from "../graph/Manager";

export default defineComponent({
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedFeatureOutput: -1,
    };
  },
  props: {
    baseNode : {
      type : Object as PropType<VoronoiTexture>,
      required : true,
    },
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    },
  },
  computed: {
    dropdownOptions() {
      let colors = Object.keys(FeatureOutput).filter((featOutput) => {
        return isNaN(Number(featOutput));
      });
      return colors.map((el) => {
        return el.replace(/_/g, " ");
      });
    },
  },
  watch: {
    selectedFeatureOutput() {
      this.baseNode.setFeatureOutput(<FeatureOutput>this.selectedFeatureOutput);
      this.emitter.emit("recompile");
    },
  },
  methods: {
  },
  mounted() {
    this.selectedFeatureOutput = this.baseNode.getFeatureOutput();
  }
});
</script>

<style lang="scss" scoped>
.voronoi-extra-container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: all;
}

.voronoi-extra-top {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.voronoi-extra-interpolation{
  height: 1.5rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
