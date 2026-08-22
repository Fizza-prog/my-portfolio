import { skillGroups } from "../data/Skills";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-500">About me</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          I build reliable web applications.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          I&apos;m a software engineering student and full-stack developer
          interested in building practical web applications with clean
          architecture and usable interfaces.
        </p>
      </section>

      {/* Approach */}
      <section className="mt-20 max-w-3xl">
        <h2 className="text-2xl font-semibold">How I work</h2>

        <div className="mt-6 space-y-4 text-zinc-600 leading-7">
          <p>
            I focus on understanding the problem before writing code. I care
            about clear component structure, predictable data flow, and
            maintainable backend and frontend architecture.
          </p>

          <p>
            I also use debugging, testing, and iterative development to
            understand why something works rather than simply making the
            immediate error disappear.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Skills & technologies</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <h3 className="font-semibold">{group.category}</h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}