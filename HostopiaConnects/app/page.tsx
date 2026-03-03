export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <div className="max-w-4xl text-center">
        <p className="uppercase tracking-[0.2em] text-xs mb-4 text-gray-500">
          Hostopia Connects
        </p>
        <h1
          className="font-black leading-tight mb-6"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "#24282B"
          }}
        >
          Everything your teams need to{" "}
          <span style={{ color: "#2CADB2" }}>sell, train, and launch</span>{" "}
          Hostopia products.
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
        >
          A modern, public-facing portal for sales and marketing enablement.
          Browse by product journey, content type, or use case, then request a
          tailored download bundle delivered straight to your inbox.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#browse"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold shadow-md transition hover:shadow-lg"
            style={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#F8CF41",
              color: "#24282B"
            }}
          >
            Start Browsing Assets
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold border border-[#24282B]/20 transition hover:bg-white"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#24282B" }}
          >
            How Hostopia Connects Works
          </a>
        </div>
      </div>
    </section>
  );
}

