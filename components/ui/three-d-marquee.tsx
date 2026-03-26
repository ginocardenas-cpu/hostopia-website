"use client";

/**
 * 3D marquee: three columns of images in a rotated plane with vertical oscillation.
 * Props drive images (e.g. template previews from product JSON).
 */
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ThreeDMarqueeImage = {
  src: string;
  alt: string;
};

export type ThreeDMarqueeProps = {
  images: ThreeDMarqueeImage[];
  className?: string;
};

export function ThreeDMarquee({ images, className }: ThreeDMarqueeProps) {
  if (!images.length) return null;

  const chunkSize = Math.ceil(images.length / 3);
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block w-full overflow-hidden rounded-xl md:rounded-2xl",
        "min-h-[22rem] max-xl:min-h-[28rem] md:h-[35rem] md:max-xl:min-h-[30rem]",
        className
      )}
    >
      <div className="flex size-full items-center justify-center [perspective:1200px]">
        <div className="aspect-square h-[min(90vw,36rem)] w-[min(90vw,36rem)] shrink-0 scale-[1.35] max-xl:h-full max-xl:w-full max-xl:scale-110 max-sm:scale-[1.3]">
          <div
            style={{
              transform: "rotateX(45deg) rotateY(0deg) rotateZ(45deg)",
              transformStyle: "preserve-3d",
            }}
            className="relative right-[-55%] top-0 grid size-full origin-top-left grid-cols-3 gap-3 max-xl:-top-24 max-xl:right-[-45%] max-xl:gap-4 max-sm:top-0 max-sm:gap-2"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 48 : -48 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                key={`marquee-col-${colIndex}`}
                className="flex flex-col items-start gap-4 max-sm:gap-3 md:gap-6"
              >
                {subarray.map((img, imageIndex) => (
                  <div className="relative w-full" key={`${img.src}-${imageIndex}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="aspect-[4/3] h-full w-full select-none rounded-lg border border-gray-200/80 bg-gray-100 object-cover shadow-sm"
                      src={img.src}
                      draggable={false}
                      alt={img.alt}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
