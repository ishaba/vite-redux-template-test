import {
  Badge,
  Flex,
  Group,
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

interface DrinkCardProps extends DrinkData {
  index: number
}

export const DrinkCard = ({
  id,
  name,
  category,
  alcoholic,
  glass,
  instructions,
  image,
  ingredients,
  index,
}: DrinkCardProps) => {
  return (
    <Paper shadow="xs" p="xl" key={id} className={css.root}>
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Stack className={css.content}>
          <Title>{name}</Title>
          <Group>
            <Badge color="#a61e4d">{category}</Badge>
            <Badge color="#862e9c">{alcoholic}</Badge>
            <Badge color="#1864ab">{glass}</Badge>
          </Group>
          <Text>{instructions}</Text>
        </Stack>
        <Space w="sm" h="sm" />
        <div className={css.image}>
          <Image
            w="100%"
            width="290"
            height="290"
            src={image}
            radius="md"
            loading={index === 0 ? "eager" : "lazy"}
            component={LazyLoadImage as React.FunctionComponent<any>}
            alt={name}
          />
        </div>
      </Flex>
      <DrinkIngredients ingredients={ingredients} />
    </Paper>
  )
}
