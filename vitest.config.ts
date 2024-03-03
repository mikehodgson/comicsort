import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname
      }
    },
  }),
);
