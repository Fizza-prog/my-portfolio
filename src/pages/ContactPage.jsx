import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'

export default function ContactPage() {
  usePageTitle(pageTitles.contact)

  return (
    <Container>
      <h1>Contact</h1>
    </Container>
  )
}
