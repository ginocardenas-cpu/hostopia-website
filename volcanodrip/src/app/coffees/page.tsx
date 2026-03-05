export default function CoffeesPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Coffees
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Born of fire. Where flavour erupts.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          We source beans from the most fertile volcanic soils on Earth.
          Experience the intensity of nature in every cup.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Volcanic origins lineup
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          On your current shop you feature five coffees from different volcanic
          regions around the world plus a monthly subscription. Here we&apos;ll
          mirror that structure: each coffee with origin, elevation, process,
          and tasting notes—plus options for whole bean or grind and easy
          checkout.
        </p>
      </section>
    </main>
  );
}

