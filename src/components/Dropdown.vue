<template>
  <div v-if="options.length" :class="['dropdown-container', {'showList' : !hideList}]">
    <div class="dropdown-selected">
      <p>{{ options[currentSelected] }}</p>
      <button
        :class="['dropdown-button', {'showList' : !hideList}]"
        @click="hideList = !hideList"
      >
        <img alt="v" src="icons/arrow-down-icon.svg" />
      </button>
    </div>
    <div :class="['dropdown-list', {'hidden' : hideList}]">
      <div 
        class="dropdown-option"
        v-for="(option,idx) in options" :key="option">
        <p
          @click="chooseOption(idx)"
        >{{option}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      hideList : true,
      currentSelected : 0,
    };
  },
  props: {
    options: {
      required: true,
      type: Object as PropType<string[]>,
    },
    selected: {
      required: true,
      type: Number,
    },
  },
  watch: {
    selected() {
      this.currentSelected = this.selected;
    },
  },
  methods: {
    chooseOption(idx: number) {
      this.currentSelected = idx;
      this.hideList = true;
      this.$emit("optionChosen", this.currentSelected);
    },
  },
});
</script>



<style lang="scss" scoped>
.dropdown-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 5px;
  outline: 0.5px solid #696969;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  &.showList {
    border-radius: 5px 5px 0 0;
  }
}

.dropdown-selected {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: stretch;
  & p {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.dropdown-button {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: #892be2;
  padding-inline: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  width: 22px;
  & img {
    box-sizing: border-box;
    height: 12px;
    position: relative;
  }
  &.showList {
    border-radius: 0 5px 0 0;
  }
}
.dropdown-list {
  width: 100%;
  position: absolute;
  top: 100%;
  outline: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #252525;
  border-radius: 0 0 5px 5px;
  &.hidden {
    display: none;
  }
}
.dropdown-option {
  position: relative;
  & p {
    margin: 0;
    padding-block: 0.3rem;
    cursor: pointer;
  }
  &:after {
    content: ' ';
    width: 100%;
    height: 0.5px;
    background-color: #696969;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(50%);
  }
  &:last-child:after {
    height: 0; 
  }
  & p:hover {
    background-color: #353535;
  }
  &:last-child p:hover {
    border-radius: 0 0 5px 5px;
  }
}
</style>
