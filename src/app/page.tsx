"use client";

export const dynamic = "force-dynamic";

import React from "react";
import { useRouter } from "next/navigation";
import { VideoHero } from "../components/organisms/VideoHero";
import "../components/organisms/VideoHero.css";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { Carousel } from "../components/Carousel";
import ClientCategoryToggle from "../components/ClientCategoryToggle";
import type { CategoryKey } from "../components/atoms/CategoryToggle";
import ClientTabs from "../components/ClientTabs";
import { useIsMobile } from "../hooks/useIsMobile";

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  category?: string;
}

export default function HomePage() {
  const router = useRouter();
  const { isMobile, isTablet } = useIsMobile();
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryKey>("all");

  const handleItemClick = (item: CarouselItem) => {
    // Navigate to destination page based on title
    const slug = item.title
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/\./g, "")
      .replace(/\s+/g, "-");
    router.push(`/destination/${slug}`);
  };

  // All destinations data
  const allDestinations: CarouselItem[] = [
    {
      id: "1",
      imageUrl: "/mysore-palace.png",
      title: "Mysore Palace",
      category: "Culture",
    },
    {
      id: "2",
      imageUrl: "/chamundihills.png",
      title: "Chamundi Hills",
      category: "Nature",
    },
    {
      id: "3",
      imageUrl: "/brindavan.png",
      title: "Brindavan Gardens",
      category: "Garden",
    },
    {
      id: "4",
      imageUrl: "/st-philomena.png",
      title: "St. Philomena's Church",
      category: "Church",
    },
    {
      id: "5",
      imageUrl: "/devaraja-market.png",
      title: "Devaraja Market",
      category: "Shopping",
    },
    {
      id: "6",
      imageUrl: "/ranganathittu.png",
      title: "Ranganathittu Bird Sanctuary",
      category: "Nature",
    },
    {
      id: "7",
      imageUrl: "/culinary-1.png",
      title: "Culinary Destination 1",
      category: "Culinary",
    },
    {
      id: "8",
      imageUrl: "/culinary-2.png",
      title: "Culinary Destination 2",
      category: "Culinary",
    },
  ];

  // Filter destinations based on selected category
  const getFilteredDestinations = () => {
    if (selectedCategory === "all") {
      return allDestinations;
    }
    // Map category keys to item categories (including variations)
    const categoryMap: Record<CategoryKey, string[]> = {
      all: [],
      culture: ["Culture"],
      nature: ["Nature"],
      shopping: ["Shopping"],
      culinary: ["Culinary"],
    };
    const targetCategories = categoryMap[selectedCategory];
    if (targetCategories.length === 0) {
      return allDestinations;
    }
    return allDestinations.filter((item) =>
      targetCategories.some(
        (cat) => item.category?.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const filteredDestinations = getFilteredDestinations();

  // Responsive padding
  const containerPadding = isMobile ? "16px" : isTablet ? "20px" : "24px";

  // Responsive margins
  const sectionMarginTop = isMobile ? "24px" : "32px";
  const carouselMarginTop = isMobile ? "24px" : "40px";
  const carouselMarginBottom = isMobile ? "40px" : "80px";

  // Responsive font sizes
  const heroTitleSize = isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem";
  const heroSubtitleSize = isMobile ? "1rem" : "1.125rem";

  // Responsive spacing
  const tabsPadding = isMobile ? "0 12px" : "0 16px";

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "100%",
        paddingLeft: containerPadding,
        paddingRight: containerPadding,
      }}
    >
      <VideoHero
        src={
          process.env.NEXT_PUBLIC_VIDEO_URL || "https://youtu.be/2clcTLPNdfg"
        }
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop"
        height={isMobile ? "50vh" : "70vh"}
        controls={false}
        autoPlay
        loop
        muted
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: heroTitleSize }}>Explore Mysore</h1>
          <p
            style={{ marginTop: isMobile ? 8 : 12, fontSize: heroSubtitleSize }}
          >
            Discover destinations, experiences, and plan your trip.
          </p>
        </div>
      </VideoHero>
      <div
        style={{
          margin: `${sectionMarginTop} 0 ${isMobile ? "12px" : "16px"}`,
        }}
      >
        <SectionTitle>Top Destinations</SectionTitle>
      </div>
      <div
        style={{
          marginTop: carouselMarginTop,
          marginBottom: carouselMarginBottom,
        }}
      >
        <Carousel
          onItemClick={handleItemClick}
          items={[
            {
              id: "1",
              imageUrl: "/mysore-palace.png",
              title: "Mysore Palace",
              category: "Culture",
            },
            {
              id: "2",
              imageUrl: "/chamundihills.png",
              title: "Chamundi Hills",
              category: "Nature",
            },
            {
              id: "3",
              imageUrl: "/brindavan.png",
              title: "Brindavan Gardens",
              category: "Garden",
            },
            {
              id: "4",
              imageUrl: "/st-philomena.png",
              title: "St. Philomena's Church",
              category: "Church",
            },
            {
              id: "5",
              imageUrl: "/devaraja-market.png",
              title: "Devaraja Market",
              category: "Shopping",
            },
            {
              id: "6",
              imageUrl: "/ranganathittu.png",
              title: "Ranganathittu Bird Sanctuary",
              category: "Nature",
            },
          ]}
        />
      </div>
      <div
        style={{
          margin: `${sectionMarginTop} 0 ${isMobile ? "12px" : "16px"}`,
        }}
      >
        <SectionTitle>Places to Visit</SectionTitle>
      </div>
      <div
        style={{
          marginTop: isMobile ? "20px" : "24px",
          marginBottom: carouselMarginBottom,
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? "100%" : 800,
            margin: "0 auto",
            padding: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <ClientCategoryToggle
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
        <div
          style={{
            marginTop: carouselMarginTop,
            marginBottom: carouselMarginBottom,
          }}
        >
          <Carousel
            onItemClick={handleItemClick}
            items={filteredDestinations}
          />
        </div>
      </div>
      <div
        style={{
          margin: `${sectionMarginTop} 0 ${isMobile ? "12px" : "16px"}`,
        }}
      >
        <SectionTitle>Upcoming Events</SectionTitle>
      </div>
      <div
        style={{
          marginTop: carouselMarginTop,
          marginBottom: carouselMarginBottom,
        }}
      >
        <Carousel
          onItemClick={handleItemClick}
          items={[
            {
              id: "event-1",
              imageUrl: "/mysore-palace.png",
              title: "Mysore Dasara Festival",
              category: "Festival",
            },
            {
              id: "event-2",
              imageUrl: "/chamundihills.png",
              title: "Heritage Walk Tour",
              category: "Tour",
            },
            {
              id: "event-3",
              imageUrl: "/brindavan.png",
              title: "Garden Music Festival",
              category: "Music",
            },
            {
              id: "event-4",
              imageUrl: "/st-philomena.png",
              title: "Christmas Celebrations",
              category: "Religious",
            },
            {
              id: "event-5",
              imageUrl: "/devaraja-market.png",
              title: "Local Food Festival",
              category: "Food",
            },
            {
              id: "event-6",
              imageUrl: "/ranganathittu.png",
              title: "Bird Watching Workshop",
              category: "Nature",
            },
          ]}
        />
      </div>
      <div
        style={{
          margin: `${sectionMarginTop} 0 ${isMobile ? "12px" : "16px"}`,
        }}
      >
        <SectionTitle>Featured Itinerary</SectionTitle>
      </div>
      <div
        style={{
          marginTop: isMobile ? "20px" : "24px",
          marginBottom: carouselMarginBottom,
        }}
      >
        <div style={{ maxWidth: 2260, margin: "0 auto", padding: tabsPadding }}>
          <ClientTabs />
        </div>
        <div
          style={{
            marginTop: isMobile ? "16px" : "10px",
            marginBottom: carouselMarginBottom,
          }}
        >
          <Carousel
            items={[
              {
                id: "1",
                imageUrl: "/mysore-palace.png",
                title: "Mysore Palace",
                category: "Culture",
              },
              {
                id: "2",
                imageUrl: "/chamundihills.png",
                title: "Chamundi Hills",
                category: "Nature",
              },
              {
                id: "3",
                imageUrl: "/brindavan.png",
                title: "Brindavan Gardens",
                category: "Garden",
              },
              {
                id: "4",
                imageUrl: "/st-philomena.png",
                title: "St. Philomena's Church",
                category: "Church",
              },
              {
                id: "5",
                imageUrl: "/devaraja-market.png",
                title: "Devaraja Market",
                category: "Shopping",
              },
              {
                id: "6",
                imageUrl: "/ranganathittu.png",
                title: "Ranganathittu Bird Sanctuary",
                category: "Nature",
              },
            ]}
          />
        </div>
      </div>
      {/*  <div
        id="mysore-map"
        style={{
          margin: `${sectionMarginTop} 0 ${isMobile ? "12px" : "16px"}`,
        }}
      >
        <SectionTitle>Mysore Map</SectionTitle>
      </div>
      <div
        style={{
          marginTop: isMobile ? "20px" : "24px",
          marginBottom: carouselMarginBottom,
        }}
      >
        {/*   <div
          style={{ maxWidth: "100%", margin: "0 auto", padding: mapPadding }}
        >
          <GoogleMap
            center={{ lat: 12.2958, lng: 76.6394 }}
            zoom={isMobile ? 12 : 13}
            markers={[
              {
                id: "palace",
                position: { lat: 12.3051, lng: 76.6552 },
                title: "Mysore Palace",
                description: "The magnificent palace of the Wodeyar dynasty",
              },
              {
                id: "chamundi",
                position: { lat: 12.2716, lng: 76.6594 },
                title: "Chamundi Hills",
                description: "Sacred hill with Chamundeshwari Temple",
              },
              {
                id: "brindavan",
                position: { lat: 12.4144, lng: 76.6614 },
                title: "Brindavan Gardens",
                description: "Beautiful terraced garden with musical fountain",
              },
              {
                id: "church",
                position: { lat: 12.3126, lng: 76.6522 },
                title: "St. Philomena's Church",
                description: "Gothic-style cathedral with twin spires",
              },
            ]}
          />
        </div>
      
      </div> */}
      <footer
        style={{
          marginTop: isMobile ? "40px" : isTablet ? "50px" : "60px",
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <img
          src="/Footer.png"
          alt="Footer"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: isMobile ? "auto" : isTablet ? "350px" : "400px",
            minHeight: isMobile ? "600px" : isTablet ? "320px" : "350px",
            objectFit: "cover",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: isMobile
              ? "40px 20px 20px"
              : isTablet
              ? "50px 40px 30px"
              : "60px 100px 40px",
            color: "#fff",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, 1fr)"
              : "2fr 1fr 1fr 1fr",
            gap: isMobile ? "30px" : isTablet ? "35px" : "40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Logo and Description */}
          <div>
            <img
              src="/mysorelogo.png"
              alt="Visit Mysore Logo"
              style={{
                height: isMobile ? "40px" : isTablet ? "45px" : "50px",
                width: "auto",
                objectFit: "contain",
                marginBottom: isMobile ? "12px" : "16px",
              }}
            />
            <p
              style={{
                fontSize: isMobile
                  ? "0.875rem"
                  : isTablet
                  ? "0.9375rem"
                  : "1rem",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.9)",
                margin: 0,
                maxWidth: isMobile ? "100%" : "300px",
              }}
            >
              Discover the royal city of Mysore. Experience rich culture,
              heritage, and breathtaking landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: isMobile
                  ? "1rem"
                  : isTablet
                  ? "1.0625rem"
                  : "1.125rem",
                fontWeight: 600,
                margin: "0 0 16px 0",
                color: "#fff",
              }}
            >
              Quick Links
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? "10px" : "12px",
              }}
            >
              {[
                "About Us",
                "Destinations",
                "Itineraries",
                "Events",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: isMobile
                        ? "0.875rem"
                        : isTablet
                        ? "0.90625rem"
                        : "0.9375rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: isMobile
                  ? "1rem"
                  : isTablet
                  ? "1.0625rem"
                  : "1.125rem",
                fontWeight: 600,
                margin: "0 0 16px 0",
                color: "#fff",
              }}
            >
              Contact
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? "10px" : "12px",
              }}
            >
              <li
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: isMobile
                    ? "0.875rem"
                    : isTablet
                    ? "0.90625rem"
                    : "0.9375rem",
                }}
              >
                📍 Mysore, Karnataka, India
              </li>
              <li
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: isMobile
                    ? "0.875rem"
                    : isTablet
                    ? "0.90625rem"
                    : "0.9375rem",
                }}
              >
                📞 +91 821 123 4567
              </li>
              <li
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: isMobile
                    ? "0.875rem"
                    : isTablet
                    ? "0.90625rem"
                    : "0.9375rem",
                }}
              >
                ✉️ info@visitmysore.com
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3
              style={{
                fontSize: isMobile
                  ? "1rem"
                  : isTablet
                  ? "1.0625rem"
                  : "1.125rem",
                fontWeight: 600,
                margin: "0 0 16px 0",
                color: "#fff",
              }}
            >
              Follow Us
            </h3>
            <div
              style={{
                display: "flex",
                gap: isMobile ? "8px" : "12px",
                flexWrap: "wrap",
              }}
            >
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: isMobile
                      ? "0.8125rem"
                      : isTablet
                      ? "0.875rem"
                      : "0.9375rem",
                    padding: isMobile ? "6px 10px" : "8px 12px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.5)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: isMobile
              ? "0 20px 20px"
              : isTablet
              ? "0 40px 25px"
              : "0 100px 30px",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: isMobile
              ? "0.75rem"
              : isTablet
              ? "0.8125rem"
              : "0.875rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginTop: isMobile ? "16px" : "20px",
            paddingTop: isMobile ? "16px" : "20px",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Visit Mysore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
