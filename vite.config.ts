import PluginCritical from "rollup-plugin-critical"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { defineConfig } from "vitest/config"
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    pluginPurgeCss({
      variables: true,
    }),
    // PluginCritical({
    //   criticalUrl: "https://vite-redux-template-test.vercel.app/",
    //   criticalBase: "./",
    //   criticalPages: [{ uri: "", template: "index" }],
    //   criticalConfig: {
    //     base: "dist/",
    //     inline: true,
    //   },
    // }),
  ],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
  },
})
