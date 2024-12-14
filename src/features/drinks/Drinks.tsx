import styles from "./Drinks.module.css"
import { useGetDrinksQuery } from "./drinksApiSlice"

enum DrinkCodes {
  A1 = "a1",
  Kir = "kir",
  Margarita = "margarita",
  Mojito = "mojito",
}

export const Drinks = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } = useGetDrinksQuery(
    DrinkCodes.Margarita,
  )

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
