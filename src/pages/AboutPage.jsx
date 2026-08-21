import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles } from '../data/site'
import { skillGroups } from '../data/skills'

export default function AboutPage() {
  usePageTitle(pageTitles.about)

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <p className="eyebrow">About Me</p>

          <h1>I build useful software with a focus on solid engineering.</h1>

          <p>
            I'm a software engineering student and full-stack developer
            interested in building reliable web applications and
            understanding how systems work from frontend to database.
          </p>
        </Container>
      </section>

      {/* What I Build */}
      <section className="section">
        <Container>
          <div className="about-content">
            <p className="eyebrow">What I Build</p>

            <h2>Full-stack web applications</h2>

            <p>
              I work primarily with React on the frontend and Node.js,
              Express, and PostgreSQL on the backend.
            </p>

            <p>
              My projects focus on practical application architecture:
              authentication, authorization, API design, database
              relationships, reusable components, and responsive
              interfaces.
            </p>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="section case-study-muted">
        <Container>
          <p className="eyebrow">Technical Skills</p>

          <h2>Technologies I work with</h2>

          <div className="skills-grid about-skills">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Development Approach */}
      <section className="section">
        <Container>
          <p className="eyebrow">Development Approach</p>

          <h2>How I approach building software</h2>

          <div className="approach-grid">
            <article>
              <span>01</span>
              <h3>Understand the problem</h3>
              <p>
                I start by understanding what the application needs to
                accomplish before deciding how to implement it.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Design the system</h3>
              <p>
                I break the application into clear frontend, API, data,
                and authentication responsibilities.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Build incrementally</h3>
              <p>
                I prefer small working pieces that can be tested and
                debugged instead of building everything at once.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Debug and refine</h3>
              <p>
                When something fails, I trace the failure through the
                relevant layer instead of only treating the symptom.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="cta-block">
            <p className="eyebrow">Selected Work</p>

            <h2>Want to see what I've built?</h2>

            <p>
              Explore the projects and technical work behind this
              portfolio.
            </p>

            <a className="button button-primary" href="/work">
              View My Work →
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}