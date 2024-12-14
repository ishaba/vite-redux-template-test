import App from '../App'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$drinkId')({
  component: HomeComponent,
})

function HomeComponent() {
  return <App />
}
