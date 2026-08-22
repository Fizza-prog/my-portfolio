import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/Project";
import { site } from "../data/Site";
import { skillGroups } from "../data/Skills";

export default function HomePage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-zinc-500">
            Full-stack developer
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {site.claim}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            {site.hero.supportingText}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              {site.ctas.viewWork.label}
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-zinc-950"
            >
              {site.ctas.contactMe.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-zinc-500">
                Selected work
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects I&apos;ve built.
              </h2>
            </div>

            <Link
              href="/work"
              className="text-sm font-medium underline underline-offset-4"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
              >
                <div className="relative aspect-video bg-zinc-100">
                  {project.thumbnail && (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.caseStudyPath && (
                    <Link
                      href={project.caseStudyPath}
                      className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                    >
                      Read case study →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-500">Skills</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* About Preview */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-zinc-400">About me</p>

            <p className="mt-4 text-2xl leading-10 sm:text-3xl">
              {site.aboutPreview.text}
            </p>

            <Link
              href={site.aboutPreview.linkTo}
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4"
            >
              {site.aboutPreview.linkLabel} →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium text-zinc-500">Have a project?</p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something useful.
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          {site.ctas.contactMe.label}
        </Link>
      </section>
    </main>
  );
}