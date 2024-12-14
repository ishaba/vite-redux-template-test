import { Outlet, createRootRoute } from "@tanstack/react-router"

import { AppLayout } from "#src/components/AppLayout"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
