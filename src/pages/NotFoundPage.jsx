import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'

export default function NotFoundPage() {
  usePageTitle(pageTitles.notFound)

  return (
    <Container>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </Container>
  )
}
