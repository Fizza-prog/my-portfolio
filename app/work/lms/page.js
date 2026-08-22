import Link from "next/link";

export default function LmsCaseStudyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-medium text-zinc-500">
          Case Study · Full-Stack Application
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Learning Management System
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          A multi-tenant Learning Management System designed to manage schools,
          users, classes, attendance, exams, grades, fees, and academic
          workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Sequelize",
            "JWT",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold">Overview</h2>

          <div className="mt-6 max-w-3xl space-y-5 text-zinc-600 leading-7">
            <p>
              The LMS was developed as a full-stack application for managing
              academic operations across multiple schools.
            </p>

            <p>
              The system uses authentication and role-based authorization to
              control what different users can access and manage.
            </p>

            <p>
              The architecture is multi-tenant, with users and resources
              scoped to their respective school.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold">Architecture</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Frontend</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              React with component-based UI, React Router, Axios, protected
              routes, and authentication state management.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Backend</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Node.js and Express provide REST APIs, authentication,
              authorization, validation, and business logic.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Database</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              PostgreSQL with Sequelize models and relationships for schools,
              users, and academic data.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Authentication</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              JWT-based authentication with access and refresh tokens,
              protected routes, and role-based authorization.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold">Key Features</h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "JWT authentication",
              "Role-based authorization",
              "Multi-tenant school architecture",
              "User CRUD operations",
              "School management",
              "Attendance management",
              "Grades and examinations",
              "Fees management",
              "Email verification",
              "Password reset flow",
              "Refresh token authentication",
              "Protected frontend routes",
            ].map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenges */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold">Engineering Challenges</h2>

        <div className="mt-6 max-w-3xl space-y-5 text-zinc-600 leading-7">
          <p>
            A major challenge was implementing authorization correctly across
            multiple roles while ensuring users could only access resources
            belonging to their school.
          </p>

          <p>
            Authentication also required handling access-token expiration,
            refresh tokens, protected routes, and logout behavior consistently
            between the frontend and backend.
          </p>

          <p>
            Database constraints and relationships required careful handling of
            UUIDs, foreign keys, unique fields, validation, and soft deletion
            for schools with associated users.
          </p>
        </div>
      </section>

      {/* Back */}
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Link
            href="/work"
            className="text-sm font-medium underline underline-offset-4"
          >
            ← Back to work
          </Link>
        </div>
      </section>
    </main>
  );
}