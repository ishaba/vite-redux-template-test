import { Flex, Paper, Skeleton, Space, Stack } from "@mantine/core"

export const DrinkCardSkeleton = ({ key }: { key: number }) => {
  return (
    <Paper
      shadow="xs"
      p="xl"
      key={key}
      style={{ width: "800px", margin: "0 auto" }}
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Stack>
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
        <Skeleton height={360} w="50%" radius="md" />
      </Flex>
    </Paper>
  )
}
