"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#fff", color: "#24282B" }}>
        <div style={{ maxWidth: "28rem", margin: "0 auto", textAlign: "center", paddingTop: "4rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>Something went wrong</h2>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
            We couldn’t load the app. Try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 600,
              border: "none",
              backgroundColor: "#F8CF41",
              color: "#24282B",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
