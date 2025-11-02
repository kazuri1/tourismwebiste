import React from "react";
import "./VideoHero.css";

export interface VideoHeroProps {
  /** Video source URL (local file or YouTube URL) */
  src: string;
  /** Optional poster image shown before playback */
  poster?: string;
  /** Desired hero height (e.g., '70vh', '600px', 'calc(100vh - 72px)') */
  height?: string | number;
  /** Show native controls; defaults to false for hero videos */
  controls?: boolean;
  /** Autoplay video; defaults to true */
  autoPlay?: boolean;
  /** Loop playback; defaults to true */
  loop?: boolean;
  /** Start muted; required for most browsers to autoplay */
  muted?: boolean;
  /** Additional className */
  className?: string;
  /** Optional overlay content (e.g., headings, buttons) */
  children?: React.ReactNode;
}

/**
 * Extract video ID from YouTube URL
 */
function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

/**
 * Check if URL is a YouTube URL
 */
function isYouTubeUrl(url: string): boolean {
  return /youtu\.be|youtube\.com/.test(url);
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  src,
  poster,
  height = "70vh",
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  className,
  children,
}) => {
  const heroHeightValue = typeof height === "number" ? `${height}px` : height;
  const inlineStyle = {
    ["--video-hero-height"]: heroHeightValue,
  } as React.CSSProperties;

  const isYouTube = isYouTubeUrl(src);
  const youtubeId = isYouTube ? getYouTubeId(src) : null;

  // Build YouTube embed URL with best quality and autoplay settings
  const getYouTubeEmbedUrl = (videoId: string): string => {
    const params = new URLSearchParams({
      autoplay: autoPlay ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      playlist: loop ? videoId : "",
      controls: controls ? "1" : "0",
      rel: "0", // Don't show related videos
      modestbranding: "1", // Minimal YouTube branding
      iv_load_policy: "3", // Don't show annotations
      hd: "1", // Request HD quality
      playsinline: "1", // Allow inline playback on mobile
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  if (isYouTube && youtubeId) {
    return (
      <section className={`video-hero ${className || ""}`} style={inlineStyle}>
        <iframe
          className="video-hero__media"
          src={getYouTubeEmbedUrl(youtubeId)}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          title="Video hero"
        />
        {children ? <div className="video-hero__overlay">{children}</div> : null}
      </section>
    );
  }

  // Fallback to regular video element for local files
  return (
    <section className={`video-hero ${className || ""}`} style={inlineStyle}>
      <video
        className="video-hero__media"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={controls}
      />
      {children ? <div className="video-hero__overlay">{children}</div> : null}
    </section>
  );
};

export default VideoHero;
