"use client";

import Image from "next/image";
import { useState } from "react";

type ProgramHeroImageProps = {
  filename: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function ProgramHeroImage({ filename, alt, width, height }: ProgramHeroImageProps) {
  const [failed, setFailed] = useState(false);
  const src = filename.startsWith("/") ? filename : `/programs/${filename}`;

  if (failed) {
    return (
      <div
        className="min-h-[260px] lg:min-h-[340px] rounded-2xl border border-gray-100 bg-gradient-to-br from-[#e8e6e0] to-[#d4d2cc]"
        role="img"
        aria-label={alt || "Program illustration"}
      />
    );
  }

  // Final composite PNGs (transparent background with floating badges) ship with their own
  // rounded corners, so render the full artwork at its natural aspect — no crop, no frame.
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain"
        priority
        quality={92}
        sizes="(max-width: 1024px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="relative min-h-[260px] lg:min-h-[340px] rounded-2xl overflow-hidden bg-gray-200/60 border border-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
