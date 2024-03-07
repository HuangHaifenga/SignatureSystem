import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
     plugins: [vue(), viteCommonjs()],
     css: {
          preprocessorOptions: {
               scss: {
                    additionalData: `
          @import "./src/scss/fontface.scss";
          @import "./src/scss/scrollbar.scss";
        `
               }
          }
     },
     server: {
          host: '0.0.0.0',
          port: 8080,
     },
     build: {
          commonjsOptions: {
               include: /node_modules|superapi/
          },
          rollupOptions: {
               input: {
                    index: path.resolve(__dirname, "index.html"),
               }
          },
          outDir: "factory-front"
     },
     resolve: {
          alias: {
               '@': path.resolve(__dirname, './src'),
          },
     },
     base: 'SignatureSystem/',
})
