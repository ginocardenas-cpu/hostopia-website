export default function ContactPage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl px-6 pb-24 sm:px-8 lg:px-10">
      <section className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
          Contact
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Make contact.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
          Questions about your order? Want to talk roast profiles? We&apos;re
          listening.
        </p>
      </section>

      <section className="mt-10 grid gap-10 text-sm text-neutral-700 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Reach out
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email</span>
              <br />
              hello@volcanodrip.com
            </p>
            <p>
              <span className="font-medium">Phone</span>
              <br />
              +1 (555) 012‑3456
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Upcoming appearances
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.25em] text-neutral-500">
                  Oct 12–14, 2025
                </p>
                <p className="font-medium">Global Coffee Expo</p>
                <p className="text-neutral-600">Seattle, WA — Booth #402</p>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.25em] text-neutral-500">
                  Nov 05, 2025
                </p>
                <p className="font-medium">Barista Championship</p>
                <p className="text-neutral-600">Portland, OR — Main Stage</p>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.25em] text-neutral-500">
                  Dec 10, 2025
                </p>
                <p className="font-medium">Winter Roast Festival</p>
                <p className="text-neutral-600">Denver, CO — Pavilion A</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Contact us
          </h2>
          <p className="text-neutral-600">
            Use this form for general questions, wholesale inquiries, order
            support, or press.
          </p>
          <form className="mt-4 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Name
              </label>
              <input
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Email
              </label>
              <input
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Subject
              </label>
              <select className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800">
                <option>General inquiry</option>
                <option>Wholesale</option>
                <option>Order support</option>
                <option>Press</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Message
              </label>
              <textarea
                className="min-h-[120px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full border border-neutral-900 bg-neutral-900 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#f5f1ea]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
