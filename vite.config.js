import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue3-ui-kit",
  plugins: [vue()],
  resolve: {
    alias: {
      //eslint-disable-next-line
      "@": path.resolve(__dirname, "src"),
    },
  },
});
