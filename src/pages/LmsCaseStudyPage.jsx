import Container from '../components/ui/Container'
import { usePageTitle } from '../hooks/usePageTitle'

export default function LmsCaseStudy() {
  usePageTitle('LMS Case Study')

  return (
    <main>
      {/* Hero */}
      <section className="case-study-hero">
        <Container>
          <p className="eyebrow">Case Study</p>

          <h1>Learning Management System</h1>

          <p className="case-study-subtitle">
            A full-stack, multi-tenant Learning Management System
            designed for schools, administrators, teachers, and students.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Sequelize</span>
            <span>JWT</span>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">01 — Overview</p>

          <h2>Building a complete school management platform.</h2>

          <p>
            The LMS is a full-stack web application built to manage
            school operations and provide different experiences for
            administrators, teachers, and students.
          </p>

          <p>
            The system combines authentication, role-based
            authorization, school-level data isolation, user management,
            academic workflows, and administrative functionality in one
            application.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="case-study-section case-study-muted">
        <Container>
          <p className="eyebrow">02 — Problem</p>

          <h2>Managing multiple roles and schools reliably.</h2>

          <p>
            The application needed to support different user roles while
            ensuring that users could only access the data and operations
            appropriate to their role and school.
          </p>

          <p>
            This created challenges around authentication,
            authorization, data ownership, API protection, and keeping
            frontend and backend behavior consistent.
          </p>
        </Container>
      </section>

      {/* Solution */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">03 — Solution</p>

          <h2>A role-based, multi-tenant architecture.</h2>

          <p>
            The application uses JWT authentication together with
            role-based authorization. School ownership is represented
            through a school identifier so that administrative operations
            can be scoped appropriately.
          </p>

          <p>
            The frontend communicates with an Express API, while
            Sequelize provides the data-access layer for PostgreSQL.
          </p>
        </Container>
      </section>

      {/* Features */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">04 — Key Features</p>

          <h2>Core functionality</h2>

          <div className="case-study-feature-grid">
            <article>
              <h3>Authentication</h3>
              <p>
                Registration, login, email verification, password
                recovery, logout, and token refresh.
              </p>
            </article>

            <article>
              <h3>Role-Based Authorization</h3>
              <p>
                Different permissions and workflows for super admins,
                admins, teachers, and students.
              </p>
            </article>

            <article>
              <h3>School Management</h3>
              <p>
                Super administrators can create, update, view, and
                deactivate schools.
              </p>
            </article>

            <article>
              <h3>User Management</h3>
              <p>
                User creation and management with role and school-based
                access rules.
              </p>
            </article>

            <article>
              <h3>Academic Workflows</h3>
              <p>
                Support for features such as attendance, grades,
                timetable, exams, and classes.
              </p>
            </article>

            <article>
              <h3>Protected API</h3>
              <p>
                Backend routes are protected through authentication and
                authorization middleware.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section className="case-study-section case-study-muted">
        <Container>
          <p className="eyebrow">05 — Technical Stack</p>

          <h2>Technologies used</h2>

          <div className="stack-grid">
            <div>
              <h3>Frontend</h3>
              <p>React · Vite · JavaScript · Axios · React Router</p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>Node.js · Express · JWT · Nodemailer</p>
            </div>

            <div>
              <h3>Database</h3>
              <p>PostgreSQL · Sequelize</p>
            </div>

            <div>
              <h3>Development</h3>
              <p>Git · GitHub · VS Code</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Architecture */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">06 — Architecture</p>

          <h2>Frontend → API → Database</h2>

          <div className="architecture-flow">
            <div>React Frontend</div>
            <span>→</span>
            <div>Express API</div>
            <span>→</span>
            <div>Sequelize</div>
            <span>→</span>
            <div>PostgreSQL</div>
          </div>

          <p>
            Authentication and authorization are enforced across the API,
            while the frontend manages protected routes and authenticated
            application state.
          </p>
        </Container>
      </section>

      {/* Technical Decisions */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">07 — Technical Decisions</p>

          <h2>Designing for maintainability and access control.</h2>

          <div className="case-study-feature-grid">
            <article>
              <h3>JWT Authentication</h3>
              <p>
                Access and refresh tokens provide authenticated API
                access while allowing sessions to be renewed.
              </p>
            </article>

            <article>
              <h3>Role-Based Authorization</h3>
              <p>
                Permissions are enforced on protected backend routes
                rather than relying only on frontend visibility.
              </p>
            </article>

            <article>
              <h3>Multi-Tenant Data</h3>
              <p>
                School ownership is used to scope users and
                administrative operations.
              </p>
            </article>

            <article>
              <h3>Reusable API Client</h3>
              <p>
                Axios configuration centralizes API communication and
                authentication headers.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="case-study-section case-study-muted">
        <Container>
          <p className="eyebrow">08 — Challenges</p>

          <h2>Debugging real application failures.</h2>

          <p>
            Building the system involved debugging issues across the
            frontend, backend, API, authentication layer, and database.
          </p>

          <ul className="case-study-list">
            <li>Authentication and authorization failures</li>
            <li>JWT refresh-token handling</li>
            <li>Sequelize validation and database errors</li>
            <li>Foreign-key and UUID errors</li>
            <li>Frontend API integration issues</li>
            <li>Role and school-based access control</li>
          </ul>
        </Container>
      </section>

      {/* Screenshots */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">09 — Product Screens</p>

          <h2>The application in use.</h2>

          <div className="screenshot-placeholder-grid">
            <div>Dashboard screenshot</div>
            <div>Super Admin screenshot</div>
            <div>User Management screenshot</div>
            <div>School Management screenshot</div>
          </div>

          <p className="placeholder-note">
            Replace these placeholders with real screenshots from the
            working LMS before deployment.
          </p>
        </Container>
      </section>

      {/* Results */}
      <section className="case-study-section">
        <Container>
          <p className="eyebrow">10 — Outcome</p>

          <h2>A working full-stack application.</h2>

          <p>
            The project brought together frontend development, backend
            API engineering, relational database design,
            authentication, authorization, and deployment-oriented
            development into one complete application.
          </p>

          <p>
            No performance or business metrics are claimed here unless
            they can be supported by actual project evidence.
          </p>
        </Container>
      </section>

      {/* Links */}
      <section className="case-study-section">
        <Container>
          <div className="cta-block">
            <p className="eyebrow">Project</p>

            <h2>Explore the LMS</h2>

            <p>
              Add the real GitHub repository and live deployment link
              before publishing this case study.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                GitHub
              </a>

              <a
                className="button button-secondary"
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                Live Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}