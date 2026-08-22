import { site } from "../data/Site";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-500">Contact</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s work together.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Have a project, opportunity, or idea you&apos;d like to discuss?
          You can reach me through the links below.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <a
          href={`mailto:${site.socialLinks.email}`}
          className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400"
        >
          <h2 className="font-semibold">Email</h2>
          <p className="mt-2 break-words text-sm text-zinc-600">
            {site.socialLinks.email}
          </p>
        </a>

        <a
          href={site.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400"
        >
          <h2 className="font-semibold">GitHub</h2>
          <p className="mt-2 text-sm text-zinc-600">View my repositories</p>
        </a>

        <a
          href={site.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-400"
        >
          <h2 className="font-semibold">LinkedIn</h2>
          <p className="mt-2 text-sm text-zinc-600">Connect with me</p>
        </a>
      </section>
    </main>
  );
}