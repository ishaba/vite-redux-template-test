import { DrinkCodes } from "#src/constants/config"
import { Drinks } from "./Drinks"
import { renderWithProviders } from "#src/utils/test-utils"
import { screen } from "@testing-library/react"

test("Drinks component should render title", () => {
  renderWithProviders(<Drinks drinkCode={DrinkCodes.A1} />)

  expect(screen.getByText(DrinkCodes.A1)).toBeDefined()
})

test("Drinks component should render image", () => {
  renderWithProviders(<Drinks drinkCode={DrinkCodes.A1} />)

  expect(screen.queryAllByAltText(DrinkCodes.A1)).toBeDefined()
})
