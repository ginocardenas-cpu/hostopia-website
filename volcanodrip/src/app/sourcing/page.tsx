import Image from "next/image";

export default function SourcingPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      {/* Intro */}
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Sourcing
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Harvest the fire. Protect the earth.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Volcanic soil is incredibly fertile, but it&apos;s also fragile. We
          work directly with farmers who understand that to harvest the fire of
          the earth, one must also protect it.
        </p>
      </section>

      {/* Organic Farming */}
      <section className="mt-20 space-y-8">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Organic farming
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            90% of our beans are certified organic. Our partners use natural
            composting methods, often utilizing volcanic ash itself to balance
            soil pH, eliminating the need for synthetic fertilizers that harm
            local waterways.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
              No synthetic pesticides
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
              Shade-grown under native canopies
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1 shrink-0 rounded-full bg-neutral-400 w-1" />
              Natural pest control
            </li>
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
              alt="Lush green coffee farm with shade trees"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
              alt="Volcanic landscape with coffee plants"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Beyond Fair Trade */}
      <section className="mt-20 space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Beyond fair trade
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          We believe Fair Trade is just the starting point. Through Direct
          Trade, we work directly with producers and pay well above market
          rates—so communities in these demanding volcanic regions can truly
          thrive.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          By cutting out the middlemen, we ensure transparency and quality while
          putting more profit into the hands of the people who do the hard work.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-[0.7rem] uppercase tracking-[0.25em] text-neutral-500">
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            Canada Organic Certified
          </span>
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            Fair Trade Certified
          </span>
          <span className="rounded-full border border-neutral-300 px-4 py-2">
            100% Canadian roasted
          </span>
        </div>
      </section>

      {/* Globally Sourced. Canadian Roasted. */}
      <section className="mt-20 border-t border-neutral-200 pt-16">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Globally sourced. Canadian roasted.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
          While our beans travel from the ends of the earth, our craft is homed
          in Canada. Every batch is carefully roasted, tested, and packaged
          locally to ensure the &quot;volcanic&quot; profile remains intact.
        </p>
        <p className="mt-4 text-sm font-medium text-neutral-800">
          100% roasted and packaged in Canada.
        </p>
      </section>
    </main>
  );
}
