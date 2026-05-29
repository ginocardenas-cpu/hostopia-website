import React from "react";
import { Globe, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  phoneNote?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  phoneNote,
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-md flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-8 bg-teal" />
                <span className="section-label">Get in Touch</span>
              </div>
              <h1 className="mb-3 font-montserrat text-4xl font-black tracking-tight text-charcoal lg:text-5xl">
                {title}
              </h1>
              <p className="font-raleway text-lg leading-relaxed text-gray-500">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center font-montserrat text-2xl font-black text-charcoal lg:text-left">
                Contact Details
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal-light text-teal">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-raleway text-base font-bold text-charcoal">{phone}</p>
                    {phoneNote ? (
                      <p className="font-raleway text-sm text-gray-500">{phoneNote}</p>
                    ) : null}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal-light text-teal">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="font-raleway text-base font-semibold text-charcoal underline decoration-teal underline-offset-4 transition-colors hover:text-teal"
                  >
                    {email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal-light text-teal">
                    <Globe className="h-4 w-4" aria-hidden />
                  </span>
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-raleway text-base font-semibold text-charcoal underline decoration-teal underline-offset-4 transition-colors hover:text-teal"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
