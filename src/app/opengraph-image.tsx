import { ImageResponse } from "next/og";

// Site-wide Open Graph image. Renders the catalogue cover plate at 1200x630.

export const alt =
  "Artifacts Self Storage. An archive for the things you keep. Rogers, Arkansas.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#dfe1de",
          backgroundImage:
            "linear-gradient(rgba(44,74,110,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(44,74,110,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
          color: "#15171c",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top metadata row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6e5217",
            borderBottom: "1px solid #15171c",
            paddingBottom: 24,
          }}
        >
          <span>Artifacts · Self Storage</span>
          <span>Rogers · Arkansas · 72756</span>
        </div>

        {/* Main title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 64,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#6e5217",
              marginBottom: 16,
            }}
          >
            ● AS·001 / Index
          </div>
          <div
            style={{
              fontSize: 148,
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#15171c",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>An archive</span>
            <span style={{ paddingLeft: 96, color: "#15171c" }}>
              for the things
            </span>
            <span>
              you{" "}
              <span style={{ fontStyle: "italic", color: "#2c4a6e" }}>
                keep.
              </span>
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #15171c",
            paddingTop: 24,
            fontSize: 22,
            color: "#5a5f57",
          }}
        >
          <span style={{ color: "#15171c", fontWeight: 500 }}>
            Climate Controlled · Boat & RV · 24/7 Access
          </span>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#6e5217",
            }}
          >
            Plate I
          </span>
        </div>

        {/* Registration marks */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 22,
            height: 22,
            borderTop: "1.5px solid #15171c",
            borderRight: "1.5px solid #15171c",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            width: 22,
            height: 22,
            borderBottom: "1.5px solid #15171c",
            borderLeft: "1.5px solid #15171c",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
