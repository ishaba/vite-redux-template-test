import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { defineConfig } from "vitest/config"
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss"
import preact from "@preact/preset-vite"
// import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    preact(),
    pluginPurgeCss({
      variables: true,
    }),
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
