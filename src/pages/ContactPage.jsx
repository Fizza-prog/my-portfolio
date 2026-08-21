import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles, site } from '../data/site'

export default function ContactPage() {
  usePageTitle(pageTitles.contact)

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Contact</p>

          <h1>Let's talk about what you're building.</h1>

          <p>
            If you have a project, internship opportunity, collaboration,
            or technical problem you'd like to discuss, you can reach me
            through the links below.
          </p>
        </Container>
      </section>

      {/* Contact options */}
      <section className="section">
        <Container>
          <div className="contact-grid">
            <a
              className="contact-card"
              href={`mailto:${site.socialLinks.email}`}
            >
              <span className="contact-label">Email</span>

              <h2>{site.socialLinks.email}</h2>

              <p>
                Send me an email directly.
              </p>
            </a>

            <a
              className="contact-card"
              href={site.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">GitHub</span>

              <h2>View my code ↗</h2>

              <p>
                Explore my repositories and development work.
              </p>
            </a>

            <a
              className="contact-card"
              href={site.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">LinkedIn</span>

              <h2>Connect with me ↗</h2>

              <p>
                Find me on LinkedIn for professional opportunities.
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="cta-block">
            <p className="eyebrow">Get In Touch</p>

            <h2>Have something worth building?</h2>

            <p>
              I'm open to discussing projects, opportunities, and
              collaborations.
            </p>

            <a
              className="button button-primary"
              href={`mailto:${site.socialLinks.email}`}
            >
              Send an Email →
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}