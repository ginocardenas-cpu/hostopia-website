"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    label: "01 — The Origin",
    title: "Five coffees from five volcanoes.",
    body: "Volcanodrip is a tiny lineup of single-origin coffees grown in volcanic soil. Each bag comes from a specific mountain, elevation, and harvest—no blends, no guessing.",
    meta: "Guatemala • Costa Rica • Colombia • Indonesia • Ethiopia",
  },
  {
    label: "02 — The Soil",
    title: "Ash, minerals, and ridiculous sweetness.",
    body: "Volcanic soil is porous and rich in minerals like potassium, magnesium, and iron. Roots dig deep, cherries ripen slower, and sugar has time to build inside every bean.",
    meta: "Mineral-rich terroir • High-altitude farms",
  },
  {
    label: "03 — The Roast",
    title: "Profiles that keep the volcano alive.",
    body: "We roast light–medium to keep the acidity bright, the sweetness present, and the texture silky. Every origin gets its own profile so you can actually taste where it came from.",
    meta: "Light–medium roasts • Clean, modern profiles",
  },
  {
    label: "04 — The Ritual",
    title: "Brew it however you like.",
    body: "Whole bean or ground for your method, shipped fresh. Pour-over, espresso, immersion—each bag ships with a simple brew card tuned to that coffee.",
    meta: "Whole bean • Filter grind • Espresso grind",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#151515]">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        {/* Top bar with logo */}
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image
                src="/volcanodrip-logo.png"
                alt="Volcanodrip logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span>Volcanodrip</span>
          </div>
          <span>Volcanic coffee — 5 origins</span>
        </header>

        <main className="mt-16 flex-1 lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start">
            {/* Pinned hero object */}
            <section className="relative">
              <div className="sticky top-24 space-y-10">
                <div className="space-y-6">
                  <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
                    Coffee from volcanic soil
                  </p>
                  <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
                    A long, quiet scroll
                    <br />
                    through five volcanic coffees.
                  </h1>
                  <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                    Clean layout, small type, and one object in the middle of
                    everything: your bag of coffee. Scroll to move through the
                    story—origin, soil, roast, and the cup.
                  </p>
                </div>

                <div className="space-y-4 text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500">
                  <p>Single origin only</p>
                  <p>Five regions • Monthly subscription • One-time bags</p>
                </div>

                {/* Bag / card standing in for 3D object */}
                <motion.div
                  className="relative mt-4 h-[360px] max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-white via-[#fdf7ee] to-[#f2e3cf] shadow-[0_40px_120px_rgba(15,23,42,0.25)]" />
                  <motion.div
                    className="relative inset-0 flex h-full flex-col justify-between rounded-[2.25rem] border border-black/5 px-8 py-7"
                    initial={{ rotateX: 12, rotateY: -8 }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  >
                    <div className="flex flex-1 flex-col items-center justify-center">
                      <div className="relative h-64 w-40">
                        <Image
                          src="/volcanodrip-bag.png"
                          alt="Volcanodrip coffee bag"
                          fill
                          sizes="(min-width: 1024px) 10rem, 9rem"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="space-y-2 text-center text-[0.7rem] text-neutral-600">
                      <p className="uppercase tracking-[0.32em]">
                        Sumatra Black — Indonesia
                      </p>
                      <p>Dark chocolate • cedar • tobacco</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Long scroll story */}
            <section className="space-y-24 pb-32">
              {sections.map((section, index) => (
                <motion.article
                  key={section.label}
                  className="border-t border-black/5 pt-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-500">
                    {section.label}
                  </p>
                  <h2 className="mt-4 max-w-xl text-balance text-2xl font-medium tracking-tight sm:text-[1.6rem]">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
                    {section.body}
                  </p>
                  <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500">
                    {section.meta}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 text-[0.65rem] text-neutral-500">
                    <span className="rounded-full border border-black/5 px-3 py-1">
                      {String(index + 1).padStart(2, "0")}/
                      {String(sections.length).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-black/5 px-3 py-1">
                      Volcanodrip — Volcanic Coffee
                    </span>
                  </div>
                </motion.article>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
