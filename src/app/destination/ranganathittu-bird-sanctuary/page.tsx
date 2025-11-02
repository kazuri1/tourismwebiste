"use client";

import { useRouter } from "next/navigation";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function RanganathittuBirdSanctuaryPage() {
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
            src="/ranganathittu.png"
            alt="Ranganathittu Bird Sanctuary"
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
            Ranganathittu Bird Sanctuary
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
              Ranganathittu Bird Sanctuary is a bird sanctuary and a designated
              Ramsar site located on the banks of the Kaveri River. It is home
              to over 170 species of birds, making it a paradise for bird
              watchers and nature enthusiasts.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The sanctuary spans across several small islets formed in the
              river, creating an ideal habitat for both resident and migratory
              birds. Visitors can enjoy boat rides to get closer to the birds
              and witness them in their natural habitat.
            </p>

            <h2
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: 600,
                margin: "32px 0 16px 0",
              }}
            >
              Bird Species
            </h2>
            <p style={{ marginBottom: "20px" }}>
              The sanctuary hosts various bird species including painted storks,
              Asian openbill storks, common spoonbills, woolly-necked storks,
              and various species of egrets, herons, and ibises. During the
              migratory season (June to November), thousands of birds visit the
              sanctuary.
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
              <strong>Open:</strong> 8:30 AM - 6:00 PM (All days)
              <br />
              <strong>Boat Rides:</strong> Available throughout the day
              <br />
              <strong>Entry Fee:</strong> Adults: ₹50, Children: ₹25
              <br />
              <strong>Boat Fee:</strong> ₹50 per person
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
              Ranganathittu Bird Sanctuary, Srirangapatna, Mandya District,
              Karnataka 571438
              <br />
              <strong>Distance from Mysuru:</strong> Approximately 18 km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
