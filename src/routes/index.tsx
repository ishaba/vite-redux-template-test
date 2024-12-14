import { DrinkCodes } from "#src/constants/config"
import { Drinks } from "#src/features/drinks/Drinks"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Drinks drinkCode={DrinkCodes.A1} />
}
