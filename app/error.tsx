"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-red-600">
        Something went wrong
      </h1>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
