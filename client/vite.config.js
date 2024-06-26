import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "static", // Set the output folder to 'static'
    assetsDir: "assets", // Set the assets folder to 'assets'
    base: "/", // Set the base path for the project

    // Configure the build manifest to include hashed filenames
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,

    // Configure the build to generate assets with hashed filenames

    rollupOptions: {
      output: {
        entryFileNames: "static/assets/js/[name]-[hash].js",
        assetFileNames: "static/assets/css/[name]-[hash].[ext]",
        chunkFileNames: "static/assets/js/[name]-[hash].js",
      },
    },
  },
});
