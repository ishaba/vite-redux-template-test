import "@mantine/core/styles.css"

import { RouterProvider, createRouter } from "@tanstack/react-router"

import { MantineProvider } from "@mantine/core"
import { Provider } from "react-redux"
import React from "react"
import { createRoot } from "react-dom/client"
import { routeTree } from "./routeTree.gen"
import { store } from "./app/store"

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
})

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
