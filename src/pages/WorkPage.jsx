import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'

export default function WorkPage() {
  usePageTitle(pageTitles.work)

  return (
    <Container>
      <h1>Work</h1>
    </Container>
  )
}
