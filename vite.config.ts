import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
  build: {
    outDir: "build",
  },
  define: {
    "process.env": {
      SERVICE_ID: JSON.stringify(process.env.SERVICE_ID),
      TEMPLATE_ID: JSON.stringify(process.env.TEMPLATE_ID),
      PUBLIC_KEY: JSON.stringify(process.env.PUBLIC_KEY),
    },
  },
});
