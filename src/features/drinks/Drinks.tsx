import type { DrinkCodes } from "#src/constants/config"
import styles from "./Drinks.module.css"
import { useGetDrinksQuery } from "./drinksApiSlice"

export const Drinks = ({ drinkCode }: { drinkCode: DrinkCodes }) => {
  const { data, isError, isLoading, isSuccess } = useGetDrinksQuery(drinkCode)

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  console.log(data)

  if (isSuccess) {
    return (
      <div className={styles.container}>
        {data.map(({ name, category, id }) => (
          <blockquote key={id}>
            &ldquo;{name}&rdquo;
            <footer>
              <cite>{category}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    )
  }

  return null
}
