import type { DrinkCodes } from "#src/constants/config"
import { Drinks } from "#src/features/drinks/Drinks"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/$drinkId")({
  component: HomeComponent,
})

function HomeComponent() {
  const { drinkId } = Route.useParams()

  return <Drinks drinkCode={drinkId as DrinkCodes} />
}
