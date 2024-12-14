import type { MantineColorScheme } from "@mantine/core"
import { Select } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/core"

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Select
      data={["light", "dark", "auto"]}
      value={colorScheme}
      onChange={value => setColorScheme(value as MantineColorScheme)}
    />
  )
}
