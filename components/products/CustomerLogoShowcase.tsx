import Image from "next/image";

export type CustomerLogoImage = {
  src: string;
  alt: string;
};

type Props = {
  images: CustomerLogoImage[];
};

/**
 * Responsive grid of customer logo marks (object-contain on light cards).
 * Image URLs must be allowed in `next.config.js` remote patterns.
 */
export default function CustomerLogoShowcase({ images }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {images.map((img) => (
        <li
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-6 sm:p-8"
          />
        </li>
      ))}
    </ul>
  );
}
