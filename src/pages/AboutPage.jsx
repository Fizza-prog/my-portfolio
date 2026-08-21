import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'

export default function AboutPage() {
  usePageTitle(pageTitles.about)

  return (
    <Container>
      <h1>About</h1>
    </Container>
  )
}
