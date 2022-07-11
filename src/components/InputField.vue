<template>
  <div class="input-field-container">
    <input ref="inputElement" v-model="tempValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      tempValue : "" as String,
    };
  },
  props: {
    value : {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    handleFocus(e : FocusEvent) {
      console.log("focus", e);
      document.addEventListener("keydown", this.handleKeyDown);
    },
    handleBlur(e : FocusEvent) {
      console.log("blur", e);
      document.removeEventListener("keydown", this.handleKeyDown);
    },
    handleKeyDown(e : KeyboardEvent) {
      if (e.key === "Enter") {
        console.log("enter");
        const inputEl = <HTMLElement>this.$refs.inputElement;
        inputEl.blur();
        this.$emit("newValue", this.tempValue);
      }
    },
  },
  watch: {
    value() {
      console.log("value", this.value);
      this.tempValue = this.value.toString();
    },
  },
  mounted() {
    const inputEl = <HTMLElement>this.$refs.inputElement;
    inputEl.addEventListener("focus", this.handleFocus);
    inputEl.addEventListener("blur", this.handleBlur);
    this.tempValue = this.value.toString();
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    const inputEl = <HTMLElement>this.$refs.inputElement;
    inputEl.removeEventListener("focus", this.handleFocus);
    inputEl.removeEventListener("blur", this.handleBlur);
  }
})
</script>

<style lang="scss" scoped>
input {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 5px;
  height: 1.35rem;
  background-color: #252525;
  color: #eee;
  text-align: center;
  font-family: monospace;
  outline: 0.5px solid #696969;
  line-height: 1.6rem;
}
</style>
