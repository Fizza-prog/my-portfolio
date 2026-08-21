import { Link } from 'react-router-dom'

import Container from '../components/ui/Container'
import ProjectCard from '../components/ProjectCard'

import { usePageTitle } from '../hooks/usePageTitle'

import { site, pageTitles } from '../data/site'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

export default function HomePage() {
  usePageTitle(pageTitles.home)

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)

  return (
    <main>
      {/* Hero */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <p className="eyebrow">Full-Stack Developer</p>

            <h1>{site.claim}</h1>

            <p className="hero-supporting-text">
              {site.hero.supportingText}
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/work">
                {site.ctas.viewWork.label}
              </Link>

              <Link className="button button-secondary" to="/contact">
                {site.ctas.contactMe.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section">
        <Container>
          <div className="intro-section">
            <p className="eyebrow">What I Build</p>

            <h2>Building products that solve real problems.</h2>

            <p>
              I work across the frontend and backend to build web
              applications with clear architecture, reliable systems,
              and interfaces designed for real users.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <Container>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Featured Projects</h2>
            </div>

            <Link to="/work">View all work →</Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="section">
        <Container>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Technical Skills</p>
              <h2>Tools I work with</h2>
            </div>
          </div>

          <div className="skills-grid">
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

      {/* About Preview */}
      <section className="section">
        <Container>
          <div className="about-preview">
            <p className="eyebrow">About</p>

            <h2>A practical approach to development.</h2>

            <p>{site.aboutPreview.text}</p>

            <Link to={site.aboutPreview.linkTo}>
              {site.aboutPreview.linkLabel} →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="cta-block">
            <p className="eyebrow">Let's Connect</p>

            <h2>Have a project or opportunity in mind?</h2>

            <p>
              I'm interested in building useful products and solving
              meaningful technical problems.
            </p>

            <Link
              className="button button-primary"
              to={site.ctas.getInTouch.to}
            >
              {site.ctas.getInTouch.label}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}