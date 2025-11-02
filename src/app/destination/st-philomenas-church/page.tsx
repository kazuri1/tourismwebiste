"use client";

import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function StPhilomenasChurchPage() {
  const router = useRouter();
  const { isMobile, isTablet } = useIsMobile();

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
        paddingLeft: isMobile ? "16px" : isTablet ? "20px" : "24px",
        paddingRight: isMobile ? "16px" : isTablet ? "20px" : "24px",
        paddingTop: isMobile ? "20px" : "40px",
        paddingBottom: isMobile ? "40px" : "80px",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "none",
          color: "var(--color-on-surface, #333)",
          cursor: "pointer",
          fontSize: isMobile ? "0.875rem" : "1rem",
          marginBottom: isMobile ? "20px" : "32px",
          padding: "8px 0",
        }}
      >
        <ArrowBackIcon fontSize="small" />
        Back
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "24px" : "40px",
          alignItems: "start",
        }}
      >
        <div>
          <img
            src="/st-philomena.png"
            alt="St. Philomena's Church"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <h1
            style={{
              fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
              fontWeight: 700,
              margin: "0 0 16px 0",
              color: "var(--color-on-surface, #333)",
            }}
          >
            St. Philomena's Church
          </h1>
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "var(--color-primary, #ff8064)",
              color: "white",
              borderRadius: "6px",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            Church
          </div>

          <div
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              lineHeight: "1.8",
              color: "var(--color-on-surface, #333)",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              St. Philomena's Church is a beautiful Catholic church built in the
              Gothic style, located in the heart of Mysuru. The church is one of
              the tallest churches in Asia and is dedicated to Saint Philomena.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The church features twin spires that rise to a height of 175 feet,
              making it one of the most iconic landmarks of Mysuru. Its stunning
              Gothic architecture, stained glass windows, and peaceful ambiance
              attract both devotees and tourists.
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Architecture
            </h2>
            <p style={{ marginBottom: "20px" }}>
              The church is built in Neo-Gothic style, inspired by the Cologne
              Cathedral in Germany. It features beautiful stained glass windows
              that depict scenes from the Bible, ornate columns, and magnificent
              twin spires that dominate the Mysuru skyline.
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Visiting Hours
            </h2>
            <p style={{ marginBottom: "20px" }}>
              <strong>Open:</strong> 5:00 AM - 8:00 PM (All days)
              <br />
              <strong>Mass Timings:</strong> Multiple services daily
              <br />
              <strong>Entry:</strong> Free
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Location
            </h2>
            <p style={{ marginBottom: "20px" }}>
              St. Philomena's Church, Ashoka Road, Lashkar Mohalla, Mysuru,
              Karnataka 570001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
