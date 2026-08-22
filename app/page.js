import Link from "next/link";
import { site } from "./data/Site";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium text-zinc-500">
          Full-stack developer
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          {site.claim}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          {site.hero.supportingText}
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/work"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}