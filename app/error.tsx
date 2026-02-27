"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        We couldn’t load this page. Try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-full font-semibold text-gray-900 transition-colors hover:opacity-90"
        style={{ backgroundColor: "#F8CF41", fontFamily: "Montserrat, sans-serif" }}
      >
        Try again
      </button>
    </div>
  );
}
