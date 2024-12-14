import { Flex, Paper, Skeleton, Space, Stack } from "@mantine/core"

import css from "./DrinkCard.module.css"

export const DrinkCardSkeleton = () => {
  return (
    <Paper shadow="xs" p="xl" style={{ width: "800px", margin: "0 auto" }}>
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Stack className={css.content}>
          <Skeleton height={42} w={100} />
          <Stack>
            <Skeleton height={20} w={120} radius="xl" />
            <Skeleton height={20} w={150} radius="xl" />
            <Skeleton height={20} w={100} radius="xl" />
          </Stack>
          <Space w="sm" h="sm" />
          <Skeleton height={12} width={350} />
          <Skeleton height={12} w={300} />
          <Skeleton height={12} w={250} />
          <Skeleton height={12} w={350} />
          <Skeleton height={12} w={100} />
        </Stack>
        <Space w="sm" h="sm" />
        <div className={css.image}>
          <Skeleton w="100%" radius="md" style={{ aspectRatio: "1/1" }} />
        </div>
      </Flex>
    </Paper>
  )
}
