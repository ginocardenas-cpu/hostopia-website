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

/** Gentler tilt: less rotateZ = less diagonal “flow”; moderate rotateX = more upright plane. */
const ROT_X_DEG = 22;
const ROT_Z_DEG = 18;
/** Larger value = less aggressive perspective (reduces stretched / pinched look). */
const PERSPECTIVE_PX = 2000;

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
      <div
        className="flex size-full items-center justify-center"
        style={{ perspective: `${PERSPECTIVE_PX}px` }}
      >
        <div className="aspect-square h-[min(90vw,36rem)] w-[min(90vw,36rem)] shrink-0 scale-[1.2] max-xl:h-full max-xl:w-full max-xl:scale-105 max-sm:scale-[1.15]">
          <div
            style={{
              transform: `rotateX(${ROT_X_DEG}deg) rotateY(0deg) rotateZ(${ROT_Z_DEG}deg)`,
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
                  <div
                    className="relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200/80 bg-gray-100 shadow-sm"
                    key={`${img.src}-${imageIndex}`}
                  >
                    {/* Frame keeps layout stable; object-contain preserves screenshot aspect ratio (no stretch). */}
                    <div className="relative aspect-video w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="absolute inset-0 m-auto max-h-full max-w-full select-none object-contain object-center p-1.5"
                        src={img.src}
                        draggable={false}
                        alt={img.alt}
                      />
                    </div>
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
