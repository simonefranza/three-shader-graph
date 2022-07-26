<template>
  <div id="manager-menu">
    <div 
      v-for="(element, idx) in menuElements"
      :key="element.name"
      class="manager-menu-el"
      @pointerup="toggleDropdown(idx)"
      @pointerover="changeDropdown(idx)"
    >
      <p class="manager-menu-el-text">
        {{element.name}}
      </p>
      <menu-dropdown
        v-if="selectedMenu === idx"
        :options="element.options"
        @pointerup="(e) => {e.cancelBubble = true}"
        @closeMe="closeMenu"
      >
      </menu-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Emitter } from "mitt";
import { Events } from "../graph/Manager";
import { NodesListElement, NodesList } from "../graph/nodes/NodesList";
import MenuDropdown from "./MenuDropdown.vue";

interface MenuOption {
  name: string,
  callback: Function,
};
interface MenuElement {
  name: string,
  options: MenuOption[],
};
const ADD_OPTION = "Add";
const EXPORT_OPTION = "Export";

export default defineComponent({
  props: {
    emitter: {
      type: Object as PropType<Emitter<Events>>,
      required: true,
    }
  },
  components: {
    MenuDropdown,
  },
  data() {
    return {
      selectedMenu: -1,
      menuElements : [
        { 
          name : ADD_OPTION,
          options : [],
        },
        { 
          name : EXPORT_OPTION,
          options : [
            {
              name: "Fragment Shader",
              callback: () => this.emitter.emit("exportFragment"),
            },
            {
              name: "Vertex Shader",
              callback: () => this.emitter.emit("exportVertex"),
            },
          ],
        },
      ] as MenuElement[],
    };
  },
  methods: {
    toggleDropdown(idx: number) {
      if (this.selectedMenu === idx) {
        this.selectedMenu = -1;
      } else {
        this.selectedMenu = idx;
      }
    },
    changeDropdown(idx: number) {
      if (this.selectedMenu !== -1) {
        this.selectedMenu = idx;
      }
    },
    closeMenu() {
      this.selectedMenu = -1;
    }
  },
  created() {
    const addElement = this.menuElements.find((el) => el.name === ADD_OPTION);
    const nodesList : NodesListElement[] = NodesList.getNodesList();
    nodesList.forEach(({name, class : className}) => {
      addElement?.options.push({
        name,
        callback: () => this.emitter.emit("createNode", className)
      });
    });
  },
})
</script>

<style lang="scss" scoped>
#manager-menu {
  grid-area: menu;
  width: 100%;
  height: 100%;
  background: #222;
  position: relative;
  border-bottom: 0.5px solid #696969;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 9999;
  font-family: monospace;
  color: #eee;
  padding-inline: 5px;
}
.manager-menu-el {
  padding-inline: 1rem;
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &-text {
    padding: 0;
    margin: 0;
    user-select: none;
  }
  &:after {
    content: " ";
    width: 0.5px;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 100%;
    background-color: #696969;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: #333;
  }
}
</style>
