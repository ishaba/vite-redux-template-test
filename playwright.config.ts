import { defineConfig, devices } from "@playwright/test"

export const baseURL = `http://localhost:${process.env.PORT ?? 5173}`

export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  outputDir: "./tests/e2e/output",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  reporter: "html",
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests/e2e",
  timeout: 10 * 1000,
  use: {
    baseURL,
    trace: "on-first-retry",
  },

  webServer: {
    command: "npm run dev",
    reuseExistingServer: !process.env.CI,
    stderr: "pipe",
    stdout: "pipe",
    url: baseURL,
  },
  workers: process.env.CI ? 1 : undefined,
})
