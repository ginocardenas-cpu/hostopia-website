import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Page not found</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist or was moved.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full font-semibold text-gray-900 transition-colors hover:opacity-90"
        style={{ backgroundColor: "#F8CF41", fontFamily: "Montserrat, sans-serif" }}
      >
        Back to home
      </Link>
    </div>
  );
}
