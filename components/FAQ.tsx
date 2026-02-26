const faqs = [
  {
    question: "What white-label digital services does Hostopia provide?",
    answer:
      "Hostopia provides a comprehensive suite of white-label digital services, including website solutions, e-commerce, productivity tools, cloud services, and customer lifecycle management platforms. Our solutions enable telecoms, ISVs, and service providers to launch branded digital offerings quickly while creating new recurring revenue streams.",
  },
  {
    question: "How can telecom providers grow recurring revenue with Hostopia?",
    answer:
      "Hostopia helps telecom providers expand beyond connectivity by offering digital services bundles tailored to SMB customers. Our platform supports cross-sell and upsell strategies, subscription management, and lifecycle marketing to increase ARPU and long-term customer retention.",
  },
  {
    question: "Does Hostopia support SMB digital transformation?",
    answer:
      "Yes. Hostopia enables service providers to deliver essential SMB digital solutions such as website creation, online presence management, e-commerce, and productivity tools. These services help small businesses establish, manage, and grow their digital footprint while generating recurring revenue for our partners.",
  },
  {
    question: "Is Hostopia's platform fully white-labeled?",
    answer:
      "Hostopia's solutions are designed to operate under your brand. From storefronts and onboarding experiences to customer communications and support, we ensure a seamless branded experience that strengthens customer loyalty and trust.",
  },
  {
    question: "What industries does Hostopia work with?",
    answer:
      "Hostopia partners with telecommunications companies, ISVs, hosting providers, marketplaces, and managed service providers seeking to expand their digital services portfolio and accelerate digital transformation initiatives.",
  },
  {
    question: "How does Hostopia integrate with existing telecom or SaaS platforms?",
    answer:
      "Our flexible API-driven architecture integrates with existing CRM systems, billing platforms, provisioning systems, and operational tools. This allows partners to streamline workflows, automate processes, and launch new digital services without disrupting their existing infrastructure.",
  },
  {
    question: "Does Hostopia offer outsourced customer support services?",
    answer:
      "Yes. Hostopia provides multilingual, enterprise-grade outsourced customer support across phone, chat, and email. Our teams act as an extension of your organization, delivering high-quality interactions in your brand's voice while meeting defined SLAs and KPIs.",
  },
  {
    question: "How quickly can service providers launch digital services with Hostopia?",
    answer:
      "Hostopia's modular platform and proven onboarding frameworks enable rapid deployment. Many partners can launch new digital products and white-label services in a matter of weeks, accelerating time to revenue.",
  },
  {
    question: "How does Hostopia help reduce churn and improve customer retention?",
    answer:
      "By enabling partners to bundle value-added digital services with core offerings, Hostopia helps increase customer engagement and stickiness. Our lifecycle tools support onboarding, activation, and ongoing engagement strategies designed to improve retention and lifetime value.",
  },
  {
    question: "How can I become a Hostopia partner?",
    answer:
      "Getting started is simple. Contact our team to discuss your business goals, customer segments, and revenue objectives. We will develop a tailored strategy to help you launch, monetize, and scale digital services within your organization.",
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
                style={{ fontFamily: "Raleway, sans-serif", color: "#555a5e" }}
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
