<template>
  <div ref="viewerBody" class="shader-viewer">
    <p>{{name}} Shader</p>
    <div class="shader-viewer-text" v-html="localShader"></div>
    <button 
      ref="copyIcon"
      @click="copyShader"
      class="shader-viewer-icons">
      <img src="/icons/copy-icon.svg" alt="copy icon" />
    </button>
    <button 
      @click="closeViewer"
      class="shader-viewer-close-icon">
      <img src="/icons/close-icon.svg" alt="x" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tickIconUrl from "/icons/tick-icon.svg";
import copyIconUrl from "/icons/copy-icon.svg"
export default defineComponent({
  data() {
    return {
      localShader : "",
    };
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    shader : {
      required: true,
      type: String,
    },
  },
  methods: {
    copyShader() {
      const inputEl = document.createElement("textarea");
      inputEl.value = this.shader;
      document.body.appendChild(inputEl);
      inputEl.select();

      document.execCommand("copy");
      document.body.removeChild(inputEl);
      console.log("Copied", inputEl.value);
      let btn = <HTMLElement>this.$refs.copyIcon;
      let img = btn.querySelector("img");
      img?.setAttribute("src", tickIconUrl);
      setTimeout(() => {
        img?.setAttribute("src", copyIconUrl);
      }, 1500);
    },
    handlePointerDown(e : PointerEvent) {
      const viewerBody = <HTMLElement>this.$refs.viewerBody;
      const bounding = viewerBody.getBoundingClientRect();
      if (e.clientX >= bounding.left && e.clientX <= bounding.right
        && e.clientY >= bounding.top && e.clientY <= bounding.bottom) {
        return;
      }
      let container = document.getElementById("viewer");
      if (container === null) {
        throw "[ShaderViewer:mounted] container is null";
      }
      container.addEventListener("pointerup", this.handlePointerUp);
    },
    handlePointerUp() {
      this.closeViewer();
    },
    closeViewer() {
      let container = document.getElementById("viewer");
      if (container === null) {
        throw "[ShaderViewer:mounted] container is null";
      }
      container.remove();
    },
  },
  created() {
    this.localShader = this.shader.replace(/\n/g, "<br/>");
  },
  mounted() {
    let container = document.getElementById("viewer");
    if (container === null) {
      throw "[ShaderViewer:mounted] container is null";
    }
    container.addEventListener("pointerdown", this.handlePointerDown);
  },
  beforeUnmount() {
    let container = document.getElementById("viewer");
    if (container === null) {
      throw "[ShaderViewer:mounted] container is null";
    }
    container.removeEventListener("pointerdown", this.handlePointerDown);
    container.removeEventListener("pointerup", this.handlePointerUp);
  },
})
</script>

<style lang="scss">
#viewer {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss" scoped>

.shader-viewer {
  width: min(90ch, 80%);
  max-height: min(800px, 80%);
  border: 1px solid #696969;
  border-radius: 10px;
  padding: 1rem;
  background-color: #222;
  position: relative;
  display: grid;
  grid-template-areas: "title" "shader" "button";
  grid-template-rows: 40px 1fr 40px;
  & p {
    grid-area: title;
    font-family: monospace;
    color: #eee;
    text-transform: capitalize;
    text-align: center;
    font-size: 1rem;
    font-style: bold;
  }
}
.shader-viewer-text {
  overflow: scroll;
  scroll-behavior: smooth;
  grid-area: shader;
  font-family: monospace;
  color: #eee;
}
.shader-viewer-icons {
  justify-self: center;
  grid-area: button;
  z-index: 100;
  background: #151515;
  padding: 0.6rem;
  border-radius: 30px;
  outline: 0.5px solid #696969;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: initial;
  cursor: pointer;
  &:hover {
    background: #252525;
  }
  &:active {
    background: #050505;
  }
  & img {
    height: 80%;
    position: relative;
  }
}

.shader-viewer-close-icon {
  position: absolute;
  right: 0;
  top: 0;
  height: calc(1rem + 20px);
  padding: 0.5rem;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  & img {
    height: 100%;
    position: relative;
  }
}
</style>
