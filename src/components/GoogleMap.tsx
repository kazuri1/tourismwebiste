"use client";
import React, { useEffect, useRef, useState } from "react";
import "./GoogleMap.css";

export interface Marker {
  id: string;
  position: { lat: number; lng: number };
  title: string;
  description?: string;
}

export interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: Marker[];
  height?: string | number;
  className?: string;
  apiKey?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  center,
  zoom,
  markers = [],
  height = "400px",
  className,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapMarkers, setMapMarkers] = useState<google.maps.Marker[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Google Maps API
  useEffect(() => {
    if (typeof window === "undefined" || window.google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Google Maps API");
      setIsLoaded(true); // Still set to true to avoid infinite loading
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google) return;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    setMap(mapInstance);
  }, [isLoaded, center, zoom]);

  // Add markers to map
  useEffect(() => {
    if (!map || !markers.length) return;

    // Clear existing markers
    mapMarkers.forEach((marker) => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];

    markers.forEach((markerData) => {
      const marker = new window.google.maps.Marker({
        position: markerData.position,
        map,
        title: markerData.title,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#4285F4" stroke="#ffffff" stroke-width="3"/>
              <circle cx="16" cy="16" r="6" fill="#ffffff"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(32, 32),
        },
      });

      // Add click listener for marker
      marker.addListener("click", () => {
        setSelectedMarker(markerData);
      });

      newMarkers.push(marker);
    });

    setMapMarkers(newMarkers);

    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [map, markers, mapMarkers]);

  const mapHeight = typeof height === "number" ? `${height}px` : height;

  if (!isLoaded) {
    return (
      <div
        className={`google-map-loading ${className || ""}`}
        style={{ height: mapHeight }}
      >
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  if (apiKey === "YOUR_API_KEY_HERE") {
    return (
      <div
        className={`google-map-error ${className || ""}`}
        style={{ height: mapHeight }}
      >
        <div className="error-message">
          <h3>Google Maps API Key Required</h3>
          <p>
            Please set your Google Maps API key in the environment variables as{" "}
            <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code>
          </p>
          <p>
            <a
              href="https://developers.google.com/maps/documentation/javascript/get-api-key"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get your API key here
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`google-map-container ${className || ""}`}>
      <div ref={mapRef} className="google-map" style={{ height: mapHeight }} />

      {selectedMarker && (
        <div className="marker-info-window">
          <div className="info-header">
            <h3>{selectedMarker.title}</h3>
            <button
              className="close-button"
              onClick={() => setSelectedMarker(null)}
              aria-label="Close info window"
            >
              ×
            </button>
          </div>
          {selectedMarker.description && (
            <p className="info-description">{selectedMarker.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
