import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-zinc-500">404</p>

      <h1 className="mt-3 text-4xl font-bold">Page Not Found</h1>

      <p className="mt-4 text-zinc-600">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white"
      >
        Back Home
      </Link>
    </main>
  );
}