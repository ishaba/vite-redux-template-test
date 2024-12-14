import { createFileRoute, notFound } from "@tanstack/react-router"

import { DrinkCodes } from "#src/constants/config"
import { Drinks } from "#src/features/drinks/Drinks"

export const Route = createFileRoute("/$drinkId")({
  loader: async ({ params: { drinkId } }) => {
    // @ts-expect-error
    if (!Object.values(DrinkCodes).includes(drinkId)) throw notFound()
  },
  component: DrinksPage,
  notFoundComponent: () => {
    return <p>Coctail not found</p>
  },
})

function DrinksPage() {
  const { drinkId } = Route.useParams()

  return <Drinks drinkCode={drinkId as DrinkCodes} />
}
