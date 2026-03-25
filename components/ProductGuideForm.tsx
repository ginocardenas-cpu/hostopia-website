"use client";

import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";

export default function ProductGuideForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submit; replace with your endpoint or form service
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: "#e8f7f7" }}
      >
        <p
          className="font-bold text-lg mb-2"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
        >
          Thank you!
        </p>
        <p
          className="text-base mb-6"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          Your copy of the Product Guide is ready. Click below to download.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
          style={{
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "#2CADB2",
            color: "#ffffff",
            boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
          }}
        >
          <ArrowDownToLine size={18} />
          Download Product Guide
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="pg-name"
          className="block text-sm font-semibold mb-1.5"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
        >
          Name *
        </label>
        <input
          id="pg-name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2CADB2] focus:ring-2 focus:ring-[#2CADB2]/20 transition-colors"
          style={{
            fontFamily: "Raleway, sans-serif",
            borderColor: "#e5e7eb",
          }}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="pg-email"
          className="block text-sm font-semibold mb-1.5"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
        >
          Email *
        </label>
        <input
          id="pg-email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2CADB2] focus:ring-2 focus:ring-[#2CADB2]/20 transition-colors"
          style={{
            fontFamily: "Raleway, sans-serif",
            borderColor: "#e5e7eb",
          }}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="pg-company"
          className="block text-sm font-semibold mb-1.5"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
        >
          Company
        </label>
        <input
          id="pg-company"
          type="text"
          name="company"
          className="w-full px-4 py-3 rounded-xl border-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2CADB2] focus:ring-2 focus:ring-[#2CADB2]/20 transition-colors"
          style={{
            fontFamily: "Raleway, sans-serif",
            borderColor: "#e5e7eb",
          }}
          placeholder="Your company (optional)"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full font-bold px-6 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] disabled:opacity-70"
        style={{
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "#2CADB2",
          color: "#ffffff",
          boxShadow: "0 4px 20px rgba(44,173,178,0.3)",
        }}
      >
        {loading ? "Sendingâ€¦" : "Submit & Download"}
      </button>
    </form>
  );
}
