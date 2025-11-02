"use client";

import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BrindavanGardensPage() {
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
            src="/brindavan.png"
            alt="Brindavan Gardens"
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
            Brindavan Gardens
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
            Garden
          </div>

          <div
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              lineHeight: "1.8",
              color: "var(--color-on-surface, #333)",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Brindavan Gardens is one of the most beautiful terraced gardens in
              India, located below the Krishnaraja Sagar Dam. The garden is
              famous for its musical fountain show and beautifully landscaped
              terraces.
            </p>

            <p style={{ marginBottom: "20px" }}>
              Spread over 60 acres, the gardens feature vibrant flowerbeds,
              ornamental fountains, and well-maintained lawns. The highlight is
              the musical fountain show that takes place every evening, creating
              a mesmerizing spectacle of water, light, and music.
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Musical Fountain Show
            </h2>
            <p style={{ marginBottom: "20px" }}>
              The musical fountain show is the main attraction, featuring
              synchronized water jets, colorful lights, and music. The show
              typically runs twice each evening and is a must-see experience for
              visitors.
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
              <strong>Open:</strong> 6:00 AM - 9:00 PM (All days)
              <br />
              <strong>Musical Fountain:</strong> 6:30 PM - 7:30 PM and 7:45 PM -
              8:45 PM
              <br />
              <strong>Entry Fee:</strong> Adults: ₹15, Children: ₹5
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
              Brindavan Gardens, Krishnaraja Sagar, Mandya District, Karnataka
              571607
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
