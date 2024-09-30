import { useNavigate } from "react-router-dom";

export default function ErrorFallback({ error }) {
  const navigate = useNavigate();
  console.log(error);
  return (
    <main className="mx-auto flex justify-center items-center flex-col gap-6 h-dvh w-full bg-primary-900 text-slate-200">
      <h1 className="text-3xl font-semibold">Something went wrong :(</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-secondary-500 text-neutral-200 px-6 py-3 text-lg"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </main>
  );
}
