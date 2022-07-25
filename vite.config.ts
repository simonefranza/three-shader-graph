import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base : "/three-shader-graph/",
  plugins : [ vue() ],
  resolve : {
    alias : {
      "@" : path.resolve(__dirname, "./src")
    },
  },
});
