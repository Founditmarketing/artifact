import { ImageResponse } from "next/og";

// Generates the favicon at /icon. Next.js will serve it as a 32x32 PNG.
// Visual: the gold "A" mark on ink ground, matching the colophon.

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#15171c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#cdb066",
          fontSize: 24,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
