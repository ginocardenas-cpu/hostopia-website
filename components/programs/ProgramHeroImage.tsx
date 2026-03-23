"use client";

import Image from "next/image";
import { useState } from "react";

type ProgramHeroImageProps = {
  filename: string;
  alt: string;
};

export default function ProgramHeroImage({ filename, alt }: ProgramHeroImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="min-h-[260px] lg:min-h-[340px] rounded-2xl border border-gray-100 bg-gradient-to-br from-[#e8e6e0] to-[#d4d2cc]"
        role="img"
        aria-label={alt || "Program illustration"}
      />
    );
  }

  return (
    <div className="relative min-h-[260px] lg:min-h-[340px] rounded-2xl overflow-hidden bg-gray-200/60 border border-gray-100">
      <Image
        src={`/programs/${filename}`}
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
