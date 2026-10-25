import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    // Each component chunk imports its own CSS, so consumers only import tokens once.
    libInjectCss(),
    dts({ include: ["src"], exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"] }),
  ],
  css: {
    modules: { generateScopedName: "gg-[local]_[hash:base64:5]" },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", /^@goodgame\/style/],
    },
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: { modules: { classNameStrategy: "non-scoped" } },
  },
});
