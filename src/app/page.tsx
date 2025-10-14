import { VideoHero } from "../components/organisms/VideoHero";
import "../components/organisms/VideoHero.css";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { Carousel } from "../components/Carousel";
import ClientCategoryToggle from "../components/ClientCategoryToggle";
import ClientTabs from "../components/ClientTabs";
import { GoogleMap } from "../components/GoogleMap";

export default function HomePage() {
  return (
    <>
      <VideoHero
        src="/mysurvideo.mp4"
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop"
        height="70vh"
        controls={false}
        autoPlay
        loop
        muted
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "3rem" }}>Explore Mysore</h1>
          <p style={{ marginTop: 12, fontSize: "1.125rem" }}>
            Discover destinations, experiences, and plan your trip.
          </p>
        </div>
      </VideoHero>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Top Destinations</SectionTitle>
      </div>
      <div style={{ marginTop: "40px", marginBottom: "80px" }}>
        <Carousel
          items={[
            {
              id: "1",
              imageUrl:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
              title: "Mysore Palace",
              category: "Culture",
            },
            {
              id: "2",
              imageUrl:
                "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
              title: "Chamundi Hills",
              category: "Nature",
            },
            {
              id: "3",
              imageUrl:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
              title: "Brindavan Gardens",
              category: "Garden",
            },
            {
              id: "4",
              imageUrl:
                "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
              title: "St. Philomena's Church",
              category: "Church",
            },
          ]}
        />
      </div>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Places to Visit</SectionTitle>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
          <ClientCategoryToggle />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "80px" }}>
          <Carousel
            items={[
              {
                id: "1",
                imageUrl:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
                title: "Mysore Palace",
                category: "Culture",
              },
              {
                id: "2",
                imageUrl:
                  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
                title: "Chamundi Hills",
                category: "Nature",
              },
              {
                id: "3",
                imageUrl:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
                title: "Brindavan Gardens",
                category: "Garden",
              },
              {
                id: "4",
                imageUrl:
                  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
                title: "St. Philomena's Church",
                category: "Church",
              },
            ]}
          />
        </div>
      </div>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Featured Itinerary</SectionTitle>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: 2260, margin: "0 auto", padding: "0 16px" }}>
          <ClientTabs />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "80px" }}>
          <Carousel
            items={[
              {
                id: "1",
                imageUrl:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
                title: "Mysore Palace",
                category: "Culture",
              },
              {
                id: "2",
                imageUrl:
                  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
                title: "Chamundi Hills",
                category: "Nature",
              },
              {
                id: "3",
                imageUrl:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
                title: "Brindavan Gardens",
                category: "Garden",
              },
              {
                id: "4",
                imageUrl:
                  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
                title: "St. Philomena's Church",
                category: "Church",
              },
            ]}
          />
        </div>
      </div>
      <div id="mysore-map" style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Mysore Map</SectionTitle>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 16px" }}>
          <GoogleMap
            center={{ lat: 12.2958, lng: 76.6394 }}
            zoom={13}
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
      </div>
    </>
  );
}
