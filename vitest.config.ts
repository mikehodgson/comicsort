import { defineConfig, mergeConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [...configDefaults.exclude, ".stryker-tmp/**/*"],
      environment: "jsdom",
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
      coverage: {
        provider: "istanbul",
        reporter: ["text","html"],
        exclude: [
          ...configDefaults.exclude,
          "*.config.js",
          ".eslintrc.cjs",
          "src/main.ts",
          "__tests__",
          ".stryker-tmp/**/*",
        ],
      },
    },
  }),
);
