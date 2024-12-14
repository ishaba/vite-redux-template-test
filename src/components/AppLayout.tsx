import { AppShell, Burger, Group, Text } from "@mantine/core"

import { IconGlassCocktail } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Navigation } from "#src/components/Navigation"
import { useDisclosure } from "@mantine/hooks"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <Link to="/" style={{ textDecoration: "none" }}>
            <Group>
              <IconGlassCocktail />
              <Text size="xl">Drinks App</Text>
            </Group>
          </Link>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navigation close={close} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
