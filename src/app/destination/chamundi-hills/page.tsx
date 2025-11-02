"use client";

import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChamundiHillsPage() {
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
            src="/chamundihills.png"
            alt="Chamundi Hills"
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
            Chamundi Hills
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
            Nature
          </div>

          <div
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              lineHeight: "1.8",
              color: "var(--color-on-surface, #333)",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Chamundi Hills is a sacred hill located about 13 kilometers from
              the city of Mysuru. The hill is named after Chamundeshwari Temple,
              which is dedicated to the goddess Chamundeshwari, the presiding
              deity of Mysuru.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The hills offer panoramic views of Mysuru city and are a popular
              pilgrimage site as well as a tourist destination. The journey to
              the top provides breathtaking vistas and a spiritual experience.
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Attractions
            </h2>
            <p style={{ marginBottom: "20px" }}>
              The main attractions include the Chamundeshwari Temple, a
              monolithic statue of Nandi (the sacred bull), and Mahishasura
              statue. The temple is a beautiful example of Dravidian
              architecture and attracts thousands of devotees.
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
              <strong>Open:</strong> 7:30 AM - 2:00 PM, 3:30 PM - 6:00 PM, 7:30
              PM - 9:00 PM (All days)
              <br />
              <strong>Best Time:</strong> Early morning or evening for cooler
              weather
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
              Chamundi Hills, Mysuru, Karnataka 570010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
