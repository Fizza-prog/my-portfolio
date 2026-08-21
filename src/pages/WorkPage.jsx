import Container from '../components/ui/Container'
import ProjectCard from '../components/ProjectCard'

import { usePageTitle } from '../hooks/usePageTitle'
import { pageTitles, site } from '../data/site'
import { projects } from '../data/projects'

export default function WorkPage() {
  usePageTitle(pageTitles.work)

  const orderedProjects = [...projects].sort(
    (a, b) => a.order - b.order
  )

  return (
    <main>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Selected Work</p>

          <h1>Projects I’ve built and shipped.</h1>

          <p>
            A selection of projects demonstrating my approach to
            frontend development, backend engineering, and product design.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="project-grid">
            {orderedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-block">
            <p className="eyebrow">Let's Connect</p>

            <h2>Interested in working together?</h2>

            <p>
              Get in touch if you have a project, opportunity, or
              technical problem worth discussing.
            </p>

            <a
              className="button button-primary"
              href={`mailto:${site.socialLinks.email}`}
            >
              {site.ctas.contactMe.label}
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}