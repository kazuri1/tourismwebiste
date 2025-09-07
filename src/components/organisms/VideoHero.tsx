import React from "react";
import "./VideoHero.css";

export interface VideoHeroProps {
  /** Video source URL */
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
