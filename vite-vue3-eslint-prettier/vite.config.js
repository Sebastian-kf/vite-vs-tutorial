import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import path to support alias path
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // build:{
  //   assetsInlineLimit: 4096,
  //   cssCodeSplit: true,
  //   sourcemap: "hidden",
  // },
});
