export default function CartPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Cart
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          The Eruption Box &amp; your lineup.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          On your current site, subscriptions live as The Eruption Box—a
          curated delivery of the earth&apos;s most intense flavors. Here we&apos;ll
          bring together that subscription and your one‑time bags in a single,
          simple checkout.
        </p>
      </section>

      <section className="mt-12 space-y-4 text-sm text-neutral-700">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          The eruption box
        </h2>
        <p>
          A curated delivery of freshly roasted, strictly volcanic coffee,
          delivered to your door every month.
        </p>
        <ul className="mt-3 space-y-1 list-disc pl-5">
          <li>Exclusive micro‑lots that never hit the public store.</li>
          <li>Free priority shipping across Canada &amp; the US.</li>
          <li>Skip, pause, or cancel anytime.</li>
          <li>Brewing notes tailored to each month&apos;s bean profile.</li>
        </ul>
        <p className="mt-4 text-neutral-600">
          From your current copy:{" "}
          <span className="italic">
            &quot;Warning: This coffee is incredibly fresh with explosive
            flavour.&quot;
          </span>
        </p>
      </section>
    </main>
  );
}

