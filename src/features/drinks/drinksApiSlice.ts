// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface DrinkApi {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string

  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: string | null
  strIngredient6: string | null
  strIngredient7: string | null
  strIngredient8: string | null
  strIngredient9: string | null
  strIngredient10: string | null
  strIngredient11: string | null
  strIngredient12: string | null
  strIngredient13: string | null
  strIngredient14: string | null
  strIngredient15: string | null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: string | null
  strMeasure6: string | null
  strMeasure7: string | null
  strMeasure8: string | null
  strMeasure9: string | null
  strMeasure10: string | null
  strMeasure11: string | null
  strMeasure12: string | null
  strMeasure13: string | null
  strMeasure14: string | null
  strMeasure15: string | null
}

interface DrinksApiResponse {
  drinks: DrinkApi[]
}

type DrinkIngredients = {
  name: string
  measure?: string
}

interface DrinkData {
  id: string
  name: string
  category: string
  alcoholic: string
  glass: string
  instructions: string
  image: string
  ingredients: DrinkIngredients[]
}

type DrinksQueryResult = DrinkData[]

// Define a service using a base URL and expected endpoints
export const drinksApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
  }),
  reducerPath: "quotesApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Drinks"],
  endpoints: build => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getDrinks: build.query<DrinksQueryResult, string>({
      query: drinkCode => `?s=${drinkCode}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      transformResponse: (response: DrinksApiResponse) =>
        response.drinks.map(
          ({
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
            strDrinkThumb,
            ...rest
          }) => ({
            id: idDrink,
            name: strDrink,
            category: strCategory,
            alcoholic: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
            image: strDrinkThumb,
            ingredients: Object.entries(rest).reduce(
              (acc: DrinkData["ingredients"], [key, name]) => {
                if (key.startsWith("strIngredient") && name) {
                  const id = key.replace("strIngredient", "")
                  const measure =
                    rest[`strMeasure${id}` as keyof typeof rest] ?? ""
                  acc.push({ measure, name })
                }
                return acc
              },
              [],
            ),
          }),
        ),
      providesTags: (result, error, id) => [{ type: "Drinks", id }],
    }),
  }),
})

// Hooks are auto-generated by RTK-Query
// Same as `drinksApiSlice.endpoints.getDrinks.useQuery`
export const { useGetDrinksQuery } = drinksApiSlice
