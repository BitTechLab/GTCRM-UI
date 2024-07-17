import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  server: {
    host: '0.0.0.0',
    hmr: {
        host: "localhost",
    },
    // watch: {
    //     usePolling: true,
    //     // interval: 100,
    // },
  },
  resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
})
