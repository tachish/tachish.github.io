import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import * as path from "path"; 
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx()
    ],
    server: {
        port: 8080
    },
    build: {
        outDir: "./doc",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@types": path.resolve(__dirname, "src/types"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@components": path.resolve(__dirname, "src/components"),
            "@views": path.resolve(__dirname, "src/views"),
        },
    },
});
