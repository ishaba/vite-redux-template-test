import { ColorSchemeToggle } from "#src/components/ColorSchemeToggle"
import { DrinkCodes } from "#src/constants/config"
import { Link } from "@tanstack/react-router"

export const Navigation = ({ close }: { close: () => void }) => {
  return (
    <>
      {Object.values(DrinkCodes).map(code => (
        <Link
          key={code}
          to={`/${code}`}
          activeProps={{
            style: { fontWeight: "bold" },
          }}
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            padding: "4px 0",
          }}
          activeOptions={{ exact: true }}
          onClick={close}
        >
          {code}
        </Link>
      ))}
      <div style={{ height: "100%" }} />
      <ColorSchemeToggle />
    </>
  )
}
