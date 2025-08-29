import { defineConfig, ViteUserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const config: ViteUserConfig = defineConfig({
  base: "/todo-mindbox/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});

export default config;
