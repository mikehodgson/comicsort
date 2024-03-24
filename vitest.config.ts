import { defineConfig, mergeConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
      coverage: {
        exclude: [...configDefaults.exclude, "*.config.js", ".eslintrc.cjs", "src/main.ts", "__tests__"],
      },
    },
  }),
);
