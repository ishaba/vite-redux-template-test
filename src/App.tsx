import { DrinkCodes } from "#src/constants/config"
import { Drinks } from "./features/drinks/Drinks"

export function App() {
  return <Drinks drinkCode={DrinkCodes.A1} />
}
