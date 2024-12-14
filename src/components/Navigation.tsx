import { ColorSchemeToggle } from "#src/components/ColorSchemeToggle"
import { DrinkCodes } from "#src/constants/config"
import { Link } from "@tanstack/react-router"
import { NavLink } from "@mantine/core"

export const Navigation = ({ close }: { close: () => void }) => {
  return (
    <>
      {Object.values(DrinkCodes).map(code => (
        <NavLink
          component={Link}
          key={code}
          to={`/${code}`}
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            padding: "4px 0",
          }}
          activeOptions={{ exact: true }}
          onClick={close}
          label={code}
          preload="intent"
          leftSection={<></>}
        ></NavLink>
      ))}
      <div style={{ height: "100%" }} />
      <ColorSchemeToggle />
    </>
  )
}
