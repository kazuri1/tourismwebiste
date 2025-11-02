"use client";

import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MysorePalacePage() {
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
            src="/mysore-palace.png"
            alt="Mysore Palace"
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
            Mysore Palace
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
            Culture
          </div>

          <div
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              lineHeight: "1.8",
              color: "var(--color-on-surface, #333)",
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              The Mysore Palace, also known as the Amba Vilas Palace, is a
              historical palace and a royal residence located in Mysuru,
              Karnataka, India. It is the official residence of the Wadiyar
              dynasty and the seat of the Kingdom of Mysore.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The palace is one of the most famous tourist attractions in India,
              after the Taj Mahal, with more than 6 million annual visitors. The
              palace is illuminated on Sundays and state holidays with nearly
              100,000 light bulbs, creating a spectacular sight.
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
              The palace was built in the Indo-Saracenic style, featuring a
              blend of Hindu, Muslim, Rajput, and Gothic architectural styles.
              The three-story stone structure features marble domes and a
              145-foot five-story tower.
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
              <strong>Open:</strong> 10:00 AM - 5:30 PM (All days)
              <br />
              <strong>Light Show:</strong> Sundays and Public Holidays, 7:00 PM
              - 8:00 PM
              <br />
              <strong>Entry Fee:</strong> Adults: ₹70, Foreigners: ₹200
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
              Sayyaji Rao Road, Agrahara, Chamrajpura, Mysuru, Karnataka 570001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
