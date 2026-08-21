import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'

export default function HomePage() {
  usePageTitle(pageTitles.home)

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}
