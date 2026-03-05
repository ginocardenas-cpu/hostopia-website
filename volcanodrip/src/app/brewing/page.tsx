export default function BrewingPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Brewing
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Master the eruption.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Volcanic beans are dense and complex. Brewing them requires patience
          and precision to unlock the full spectrum of flavor.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
          V60 pour over
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          The V60 highlights the bright acidity and floral notes of your lighter
          roasts—perfect for showcasing volcanic clarity.
        </p>

        <div className="mt-6 grid gap-4 text-sm text-neutral-700 sm:grid-cols-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Ratio
            </div>
            <div className="mt-1 text-base">1:16</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Grind
            </div>
            <div className="mt-1 text-base">Medium‑fine (sea salt)</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Temp
            </div>
            <div className="mt-1 text-base">93°C / 200°F</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Time
            </div>
            <div className="mt-1 text-base">2:30 – 3:00</div>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-700">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            The ritual
          </h3>
          <ol className="space-y-2 list-decimal pl-5">
            <li>
              Rinse the paper filter with hot water to remove paper taste and
              warm the dripper.
            </li>
            <li>Add 20 g of ground coffee. Create a small divot in the center.</li>
            <li>
              Pour 60 g of water (bloom) and wait 30 seconds. Watch the gas
              escape.
            </li>
            <li>
              Pour the remaining water in slow, concentric circles, keeping the
              water level steady.
            </li>
            <li>
              Let it draw down completely. The coffee bed should be flat when
              you&apos;re done.
            </li>
          </ol>
        </div>

        <div className="mt-10 space-y-3 text-sm leading-relaxed text-neutral-700">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Storage &amp; freshness
          </h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>Don&apos;t store coffee in the fridge—moisture is the enemy.</li>
            <li>Buy whole beans and grind just before brewing when you can.</li>
            <li>
              Keep your bags in an airtight container in a cool, dark place.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
