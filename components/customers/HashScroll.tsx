"use client";

import { useEffect } from "react";

/**
 * Scrolls to the section matching `window.location.hash` on first mount and on
 * `hashchange`, so cross-page nav (e.g. /customers#telcos from another route) and
 * in-page anchor clicks reliably land on the right section. Honors prefers-reduced-motion.
 */
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    };

    // Defer one frame so the layout (and scroll-margin offsets) are settled on first load.
    const raf = requestAnimationFrame(() => window.setTimeout(scrollToHash, 0));
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
