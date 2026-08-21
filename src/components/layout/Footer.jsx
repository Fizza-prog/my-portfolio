import Container from '../ui/Container'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <div>
            <div className="footer-logo">F</div>

            <p>
              {site.claim}
            </p>
          </div>

          <div className="footer-links">
            <a
              href={`mailto:${site.socialLinks.email}`}
            >
              Email
            </a>

            <a
              href={site.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={site.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}