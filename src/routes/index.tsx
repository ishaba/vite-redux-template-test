import { createFileRoute, redirect } from "@tanstack/react-router"

import { DrinkCodes } from "#src/constants/config"

export const Route = createFileRoute("/")({
  loader: () => {
    redirect({
      to: "/$drinkId",
      params: { drinkId: DrinkCodes.A1 },
      throw: true,
    })
  },
})
