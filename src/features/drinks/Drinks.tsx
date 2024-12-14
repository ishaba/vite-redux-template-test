import { DrinkCard } from "./DrinkCard"
import { DrinkCardSkeleton } from "./DrinkCardSkeleton"
import type { DrinkCodes } from "#src/constants/config"
import { Stack } from "@mantine/core"
import { useGetDrinksQuery } from "./drinksApiSlice"

export const Drinks = ({ drinkCode }: { drinkCode: DrinkCodes }) => {
  const { data, isError, isLoading, isSuccess } = useGetDrinksQuery(drinkCode)

  if (isError || data?.length === 0) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Stack>
        {[0, 1].map(i => (
          <DrinkCardSkeleton key={i} />
        ))}
      </Stack>
    )
  }

  if (isSuccess) {
    return (
      <Stack>
        {data.map(drink => (
          <DrinkCard key={drink.id} {...drink} />
        ))}
      </Stack>
    )
  }

  return null
}
