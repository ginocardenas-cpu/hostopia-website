"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play, Volume1, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function CustomSlider({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      onChange(Math.min(Math.max(percentage, 0), 100));
    },
    [onChange]
  );

  return (
    <div
      role="slider"
      tabIndex={0}
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative h-1 w-full cursor-pointer rounded-full bg-white/20", className)}
      onClick={handleClick}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft") onChange(Math.max(0, value - 5));
        if (e.key === "ArrowRight") onChange(Math.min(100, value + 5));
      }}
    >
      <div className="absolute left-0 top-0 h-full rounded-full bg-white" style={{ width: `${value}%` }} />
    </div>
  );
}

export type VideoPlayerProps = {
  src: string;
  /** Optional first-frame / placeholder image for `<video poster>`. */
  poster?: string;
  /** Used for accessible labelling. */
  title?: string;
  className?: string;
};

export function VideoPlayer({ src, poster, title, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleVolumeChange = useCallback((value: number) => {
    const el = videoRef.current;
    if (!el) return;
    const newVolume = value / 100;
    el.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    el.muted = newVolume === 0;
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const p = (el.currentTime / el.duration) * 100;
    setProgress(Number.isFinite(p) ? p : 0);
    setCurrentTime(el.currentTime);
    setDuration(el.duration);
  }, []);

  const handleSeek = useCallback((value: number) => {
    const el = videoRef.current;
    if (!el?.duration) return;
    const time = (value / 100) * el.duration;
    if (Number.isFinite(time)) {
      el.currentTime = time;
      setProgress(value);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    const next = !isMuted;
    el.muted = next;
    setIsMuted(next);
    if (next) {
      setVolume(0);
    } else {
      el.volume = 1;
      setVolume(1);
    }
  }, [isMuted]);

  const setSpeed = useCallback((speed: number) => {
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = speed;
    setPlaybackSpeed(speed);
  }, []);

  return (
    <motion.div
      className={cn(
        "group relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl bg-charcoal/90 shadow-[0_0_20px_rgba(0,0,0,0.2)] ring-1 ring-black/10 backdrop-blur-sm",
        className
      )}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full cursor-pointer bg-charcoal object-cover"
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        aria-label={title ?? "Marketing overview video"}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-10 m-2 mx-auto max-w-xl rounded-2xl bg-charcoal/90 p-3 shadow-lg backdrop-blur-md sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="whitespace-nowrap font-raleway text-xs text-white/90 sm:text-sm">
            {formatTime(currentTime)}
          </span>
          <CustomSlider value={progress} onChange={handleSeek} className="flex-1" />
          <span className="whitespace-nowrap font-raleway text-xs text-white/90 sm:text-sm">
            {formatTime(duration)}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={togglePlay}
                variant="ghost"
                size="icon"
                className="rounded-lg text-white hover:bg-white/15 hover:text-white"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
            </motion.div>
            <div className="flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  onClick={toggleMute}
                  variant="ghost"
                  size="icon"
                  className="rounded-lg text-white hover:bg-white/15 hover:text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : volume > 0.5 ? (
                    <Volume2 className="h-5 w-5" />
                  ) : (
                    <Volume1 className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
              <div className="w-20 sm:w-24">
                <CustomSlider value={volume * 100} onChange={handleVolumeChange} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            {[0.5, 1, 1.5, 2].map((speed) => (
              <motion.div key={speed} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  onClick={() => setSpeed(speed)}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-9 min-w-[2.25rem] rounded-lg px-2 font-raleway text-xs font-semibold normal-case text-white hover:bg-white/15 hover:text-white",
                    playbackSpeed === speed && "bg-white/15"
                  )}
                >
                  {speed}x
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default VideoPlayer;
