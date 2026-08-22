export default async function HealthPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Health check request failed");
  }

  const data = await response.json();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-medium text-zinc-500">System Check</p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Application Health
      </h1>

      <div className="mt-10 rounded-2xl border border-zinc-200 p-6">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <p className="font-semibold">Healthy</p>
        </div>

        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
            <dt className="text-zinc-500">Service</dt>
            <dd className="font-medium">Portfolio</dd>
          </div>

          <div className="flex justify-between gap-4 border-b border-zinc-100 pb-4">
            <dt className="text-zinc-500">Status</dt>
            <dd className="font-medium">200 OK</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Fetched data</dt>
            <dd className="font-medium">{data.title}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}