import { VideoPlayer } from "@/components/ui/video-player";
import type { VimeoVideoContent } from "@/lib/vimeo-video-types";

type Props = Pick<VimeoVideoContent, "eyebrow" | "title" | "description" | "posterSrc" | "posterAlt"> & {
  mp4Src: string;
};

/** Homepage marketing video: same copy layout as `VimeoVideoSection`, native MP4 + custom controls. */
export function HomeNativeVideoSection({ eyebrow, title, description, mp4Src, posterSrc, posterAlt }: Props) {
  return (
    <section
      className="border-t border-gray-200/80 bg-white py-20 md:py-24 lg:py-28"
      aria-labelledby="home-native-video-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="section-label mb-4 inline-block">{eyebrow ?? "Watch"}</span>
            <h2
              id="home-native-video-title"
              className="font-montserrat text-3xl font-black leading-tight tracking-tight text-charcoal md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-xl font-raleway text-lg leading-relaxed text-gray-500">{description}</p>
            ) : null}
          </div>

          <div className="relative w-full">
            <VideoPlayer src={mp4Src} poster={posterSrc} title={title} />
          </div>
        </div>
      </div>
    </section>
  );
}
