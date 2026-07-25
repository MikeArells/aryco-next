"use client";

declare global {
  interface Window {
    tiktokEmbed?: {
      load: () => void;
    };
  }
}

interface Props {
  url: string;
}

export default function TiktokEmbed({ url }: Props) {
  return (
    <blockquote
      className="tiktok-embed"
      cite={url}
      data-video-id={url.split("/").pop()}
      style={{
        maxWidth: "605px",
        minWidth: "325px",
      }}
    >
      <section>
        <a
          href="https://www.tiktok.com/@mikearells"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mikearells
        </a>
      </section>
    </blockquote>
  );
}