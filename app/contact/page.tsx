import { Contact2 } from "@/components/ui/contact-2";

export const metadata = {
  title: "Contact Us | Hostopia",
  description:
    "Get in touch with Hostopia for upgrades, billing, or tech support. Call 1 800 322 9438 or email learnmore@hostopia.com.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Contact2
        title="Contact Us"
        description="We're here to help with upgrades, billing, technical support, or anything else. Reach out and our team will get back to you."
        phone="1 800 322 9438"
        phoneNote="For upgrades, billing, or tech support matters"
        email="learnmore@hostopia.com"
        web={{ label: "hostopia.com", url: "https://hostopia.com" }}
      />
    </main>
  );
}
