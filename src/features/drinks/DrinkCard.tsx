import {
  Badge,
  Flex,
  Image,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { DrinkIngredients } from "./DrinkIngridients"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { type DrinkData } from "./drinksApiSlice"

export const DrinkCard = ({
  id,
  name,
  category,
  alcoholic,
  glass,
  instructions,
  image,
  ingredients,
}: DrinkData) => {
  return (
    <Paper
      shadow="xs"
      p="xl"
      key={id}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Stack>
          <Title>{name}</Title>
          <Stack>
            <Badge color="pink">{category}</Badge>
            <Badge color="teal">{alcoholic}</Badge>
            <Badge color="yellow">{glass}</Badge>
          </Stack>
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
      <DrinkIngredients ingredients={ingredients} />
    </Paper>
  )
}
