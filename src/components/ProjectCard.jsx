import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img
          src={project.thumbnail}
          alt={`${project.title} project screenshot`}
        />
      </div>

      <div className="project-card-content">
        <p className="project-card-label">
          {project.isCaseStudy ? 'Featured Case Study' : 'Project'}
        </p>

        <h3>{project.title}</h3>

        <p className="project-card-description">
          {project.shortDescription}
        </p>

        <div className="project-card-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {project.isCaseStudy && project.caseStudyPath && (
            <Link to={project.caseStudyPath}>
              View Case Study →
            </Link>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}