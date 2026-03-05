export default function AboutPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          About
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Forged in fire.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          We don&apos;t just roast coffee. We harness the raw, explosive power
          of nature to bring you a cup that defies the ordinary. Volcanodrip
          began with a shared passion for great coffee and the belief that the
          best cups bring people together.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Founded by two brothers and a friend, the journey took us through
          volcanic regions around the world, where mineral‑rich soil and
          natural heat create coffee full of depth, character, and bold flavor.
          Coffee grown in volcanic soil absorbs the land&apos;s natural
          nutrients, developing a richness you can taste—smooth, balanced, and
          full‑bodied. It&apos;s coffee shaped by fire, crafted with care, and
          meant to be enjoyed.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          At Volcanodrip, coffee isn&apos;t just something you drink—it&apos;s
          something you share. Every cup is an invitation to connect, slow
          down, and enjoy a moment together.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Our core magma
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          The principles that fuel our passion.
        </p>
        <div className="mt-6 grid gap-6 text-sm text-neutral-700 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Intensity
            </h3>
            <p className="mt-2 leading-relaxed">
              We believe coffee should wake up your soul, not just your brain.
              Bold flavors only.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Precision
            </h3>
            <p className="mt-2 leading-relaxed">
              Like the perfect eruption, roasting requires exact timing and
              temperature.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Respect
            </h3>
            <p className="mt-2 leading-relaxed">
              We honor the volatile earth and the resilient farmers who
              cultivate it.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Community
            </h3>
            <p className="mt-2 leading-relaxed">
              Gathering around the fire is the oldest human tradition. We keep
              it alive.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

