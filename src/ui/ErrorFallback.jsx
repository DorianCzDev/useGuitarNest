export default function ErrorFallback({ error }) {
  return (
    <main className="mx-auto flex justify-center items-center flex-col gap-6 h-dvh w-full bg-primary-900 text-fontPrimary-500">
      <h1 className="text-3xl font-semibold">Something went wrong :(</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-secondary-500 text-fontPrimary-500 px-6 py-3 text-lg"
        onClick={() =>
          (window.location.href = import.meta.env.VITE_BACKEND_URL
            ? import.meta.env.VITE_BACKEND_URL
            : "http://localhost:5173")
        }
      >
        Back
      </button>
    </main>
  );
}
