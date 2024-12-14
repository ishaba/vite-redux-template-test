import {
  Badge,
  Flex,
  Group,
  Image,
  Paper,
  Space,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core"

import type { DrinkCodes } from "#src/constants/config"
import { LazyLoadImage } from "react-lazy-load-image-component"
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
      <Stack>
        {data.map(
          ({
            name,
            category,
            alcoholic,
            glass,
            instructions,
            id,
            ingredients,
            image,
          }) => (
            <Paper
              shadow="xs"
              p="xl"
              key={id}
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              <Flex direction={{ base: "column", md: "row" }}>
                <Stack>
                  <Title>{name}</Title>
                  <Group>
                    <Badge color="pink">{category}</Badge>
                    <Badge color="teal">{alcoholic}</Badge>
                    <Badge color="yellow">{glass}</Badge>
                  </Group>
                  <Text>{instructions}</Text>
                </Stack>
                <Space w="sm" h="sm" />
                <Image
                  w="50%"
                  src={image}
                  radius="md"
                  loading="lazy"
                  component={LazyLoadImage}
                  alt={name}
                />
              </Flex>
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
                    <Table.Tr key={name}>
                      <Table.Td>{name}</Table.Td>
                      <Table.Td>{measure}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Paper>
          ),
        )}
      </Stack>
    )
  }

  return null
}
