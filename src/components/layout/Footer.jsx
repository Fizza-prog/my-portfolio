import { site } from '../../data/site'
import Container from '../ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container>
        <p className="site-footer__text">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
