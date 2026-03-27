"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { normalizeVimeoId } from "@/lib/vimeo-id";
import type { VimeoVideoContent } from "@/lib/vimeo-video-types";
import { cn } from "@/lib/utils";

type Props = VimeoVideoContent & {
  className?: string;
};

export function VimeoVideoSection({
  vimeoId,
  eyebrow = "Watch",
  title,
  description,
  posterSrc,
  posterAlt = "",
  playLabel = "Play video",
  className,
}: Props) {
  const id = normalizeVimeoId(vimeoId);
  const [open, setOpen] = useState(false);

  if (!id) return null;

  const embedSrc = `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`;

  return (
    <>
      <section
        className={cn(
          "border-t border-gray-200/80 bg-white py-20 md:py-24 lg:py-28",
          className,
        )}
        aria-labelledby="vimeo-section-title"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="section-label mb-4 inline-block">{eyebrow}</span>
              <h2
                id="vimeo-section-title"
                className="font-montserrat text-3xl font-black leading-tight tracking-tight text-charcoal md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                {title}
              </h2>
              {description ? (
                <p className="mt-5 max-w-xl font-raleway text-lg leading-relaxed text-gray-500">{description}</p>
              ) : null}
            </div>

            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-gray-200/90 bg-cream text-left shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                aria-haspopup="dialog"
                aria-expanded={open}
              >
                <span className="relative block aspect-video w-full">
                  {posterSrc ? (
                    <Image
                      src={posterSrc}
                      alt={posterAlt || title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-teal/25 via-cream to-gold/25"
                      aria-hidden
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent" aria-hidden />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-teal shadow-lg ring-4 ring-white/40 transition-transform duration-300 group-hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]">
                      <Play className="ml-1 h-8 w-8 fill-current sm:h-9 sm:w-9" aria-hidden />
                    </span>
                  </span>
                </span>
                <span className="sr-only">
                  {playLabel}: {title}
                </span>
                <span className="pointer-events-none absolute bottom-4 left-4 right-4 font-raleway text-sm font-semibold text-white drop-shadow-md sm:bottom-5 sm:left-5 sm:text-base">
                  {playLabel}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[min(90vh,900px)] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description ? (
              <DialogDescription>{description}</DialogDescription>
            ) : (
              <DialogDescription className="sr-only">Vimeo video player</DialogDescription>
            )}
          </DialogHeader>
          {open ? (
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-charcoal">
              <iframe
                title={title}
                src={embedSrc}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
