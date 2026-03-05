export default function CartPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Cart
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Your volcanic coffee lineup.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          This will become the cart and checkout hub, wired back into Stripe
          like your current Hostinger store—showing your five single origins and
          the monthly Volcanic Origins Box subscription.
        </p>
      </section>
    </main>
  );
}

