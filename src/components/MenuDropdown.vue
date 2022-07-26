<template>
  <div ref="container" :class="['dropdown-list']">
    <div 
      class="dropdown-option"
      v-for="option in options" :key="option.name">
      <p
        @click="(e) => runCallback(e, option.callback)"
      >{{option.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

interface MenuOption {
  name: string,
  callback: Function,
};

export default defineComponent({
  data() {
    return {
    };
  },
  props: {
    options: {
      required: true,
      type: Object as PropType<MenuOption[]>,
    },
  },
  methods: {
    runCallback(e : PointerEvent, callback: Function) {
      e.cancelBubble = true;
      callback();
      this.$emit("closeMe");
    },
    handlePointerDownClosing(e : PointerEvent) {
      const container = <HTMLElement>this.$refs.container;
      const bounding = container.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        return;
      }
      e.cancelBubble = true;
      e.preventDefault();
      document.addEventListener("pointerup", this.handlePointerUpClosing);
    },
    handlePointerUpClosing(e : PointerEvent) {
      const container = <HTMLElement>this.$refs.container;
      const bounding = container.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        return;
      }
      e.cancelBubble = true;
      e.preventDefault();
      this.$nextTick(() => {
        this.$emit("closeMe");
      });
    },
  },
  mounted() {
    document.addEventListener("pointerdown", this.handlePointerDownClosing);
  },
  beforeUnmount() {
    document.removeEventListener("pointerdown", this.handlePointerDownClosing);
    document.removeEventListener("pointerup", this.handlePointerUpClosing);
  },
});
</script>



<style lang="scss" scoped>
.dropdown-list {
  width: max-content;
  position: absolute;
  top: calc(100% + 0.5px);
  left: 0;
  outline: 0.5px solid #696969;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: #252525;
  border-radius: 0 0 5px 5px;
}
.dropdown-option {
  position: relative;
  padding-inline: 1rem;
  & p {
    margin: 0;
    padding-block: 0.3rem;
    cursor: pointer;
  }
  &:after {
    content: ' ';
    width: 90%;
    height: 0.5px;
    background-color: #696969;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:last-child:after {
    height: 0; 
  }
  &:hover {
    background-color: #353535;
  }
  &:last-child:hover {
    border-radius: 0 0 5px 5px;
  }
}
</style>
