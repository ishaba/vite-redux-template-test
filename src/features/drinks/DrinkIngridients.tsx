import { Space, Table, Text } from "@mantine/core"
import { type DrinkIngredientsType } from "./drinksApiSlice"

export const DrinkIngredients = ({
  ingredients,
}: {
  ingredients: DrinkIngredientsType[]
}) => {
  return (
    <>
      <Space h="md" />
      <Text size="xl">Ingredients:</Text>
      <Space h="sm" />
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Measure</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {ingredients.map(({ name, measure }) => (
            <Table.Tr key={`${name}-${measure}`}>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{measure}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  )
}
