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
import css from "./DrinkCard.module.css"

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
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Stack className={css.content}>
          <Title>{name}</Title>
          <Stack>
            <Badge color="pink">{category}</Badge>
            <Badge color="teal">{alcoholic}</Badge>
            <Badge color="yellow">{glass}</Badge>
          </Stack>
          <Text>{instructions}</Text>
        </Stack>
        <Space w="sm" h="sm" />
        <div className={css.image}>
          <Image
            w="100%"
            src={image}
            radius="md"
            loading="lazy"
            component={LazyLoadImage}
            alt={name}
          />
        </div>
      </Flex>
      <DrinkIngredients ingredients={ingredients} />
    </Paper>
  )
}
