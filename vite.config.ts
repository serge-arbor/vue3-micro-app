import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from 'vite-plugin-qiankun';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('MicroAppExample', { useDevMode: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: 'http://127.0.0.1:3333/'
});
