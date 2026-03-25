import Image from "next/image";
import { getCustomerStaticImage } from "@/lib/customer-carousel-images";

type CustomerStaticImageProps = {
  slug: string;
  salt: number;
  className?: string;
  priority?: boolean;
};

export default function CustomerStaticImage({ slug, salt, className = "", priority = false }: CustomerStaticImageProps) {
  const img = getCustomerStaticImage(slug, salt);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-100 shadow-xl shadow-neutral-300/30 ring-1 ring-black/[0.06]">
        <div className="relative aspect-[16/10] w-full min-h-[280px] md:min-h-[380px] lg:min-h-[440px]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
