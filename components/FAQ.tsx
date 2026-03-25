const faqs = [
  {
    question: "What is Hostopia's white-label digital services platform?",
    answer:
      "Hostopia provides a complete white-label platform that lets service providers â€” telcos, ISPs, resellers, and MSPs â€” sell digital services under their own brand. The platform includes email hosting, website builders, ecommerce, SEO tools, reputation management, and more. You control the branding, pricing, and packaging. Hostopia handles provisioning, infrastructure, and optional end-user support.",
  },
  {
    question: "What types of service providers does Hostopia work with?",
    answer:
      "Hostopia partners with telcos, cable operators, ISPs, hosting companies, domain registrars, resellers, distributors, and MSPs worldwide. If you have an established base of SMB customers and want to add digital services revenue, Hostopia was built for your business model.",
  },
  {
    question: "How quickly can we launch digital services with Hostopia?",
    answer:
      "Most partners go to market within weeks. Hostopia's platform is pre-built and ready for white-labeling â€” no development required. Our onboarding team handles integration, branding, and training so your teams can start selling immediately.",
  },
  {
    question: "Can Hostopia migrate our existing email or website customers?",
    answer:
      "Yes. Hostopia has migrated over 20 million mailboxes using proprietary tooling that ensures zero downtime and 100% data integrity. We also handle domain transfers, website migrations, DNS migrations, and control panel transfers â€” at any scale.",
  },
  {
    question: "Is the platform fully white-labeled?",
    answer:
      "Everything is white-labeled â€” the customer-facing portals, admin tools, email interfaces, support interactions, and marketing materials. Your customers see your brand at every touchpoint. Hostopia operates entirely behind the scenes.",
  },
  {
    question: "How does Hostopia help increase partner revenue?",
    answer:
      "By giving you a portfolio of 14 digital products â€” from domains and email to ecommerce and SEO â€” that bundle naturally with your core offerings. Partners typically see ARPU increases through multi-product bundling, upsell motions across the customer lifecycle, and reduced churn from deeper digital engagement.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-28 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ backgroundColor: "#2CADB2" }} />
          <span className="section-label">Frequently Asked Questions</span>
        </div>
        <h2
          className="font-black leading-tight mb-12"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            color: "#24282B",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
            >
              <summary
                className="list-none flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-left transition-colors hover:bg-gray-50"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#24282B",
                  fontSize: "1.0625rem",
                }}
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-open:rotate-180"
                  style={{ backgroundColor: "#e8f7f7", color: "#2CADB2" }}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <div
                className="px-6 pb-5 pt-0"
                style={{ fontFamily: "Raleway, sans-serif", color: "#6b7280" }}
              >
                <p className="text-base leading-relaxed pl-0">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
