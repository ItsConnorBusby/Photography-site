"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";

const CATEGORY_COLORS = {
  "Travel": "#ff8c1a",
  "Photo spots": "#4fa3c7",
  "Coffee shops": "#a9743a",
};

function makeIcon(color) {
  return L.divIcon({
    className: "",
    html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};box-shadow:0 0 0 4px ${color}4d;"></div>`,
    iconSize: [12, 12],
  });
}

export default function MapView({ locations }) {
  const [expanded, setExpanded] = useState(null);

  if (locations.length === 0) {
    return <p style={{ color: "var(--text-dim)" }}>No locations yet — add a Map location in the Studio.</p>;
  }

  const center = locations[0]?.coordinates
    ? [locations[0].coordinates.lat, locations[0].coordinates.lng]
    : [51.5072, -0.1276];

  return (
    <div>
      <div className="category-legend">
        {Object.entries(CATEGORY_COLORS).map(([label, color]) => (
          <span key={label}>
            <span className="legend-dot" style={{ background: color }}></span>
            {label.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="map-layout">
        <div className="map-canvas" style={{ background: "none" }}>
          <MapContainer center={center} zoom={6} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((loc, i) =>
              loc.coordinates ? (
                <Marker key={i} position={[loc.coordinates.lat, loc.coordinates.lng]} icon={makeIcon(CATEGORY_COLORS[loc.category] || "#ff8c1a")}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        </div>
        <div className="location-list">
          {locations.map((loc, i) => {
            const posts = loc.posts || [];
            const isExpanded = expanded === i;
            return (
              <div className="location-item" key={i}>
                <div className="location-thumb"></div>
                <div className="location-info">
                  <h3>{loc.name}</h3>
                  <div className="location-meta">
                    {loc.category ? loc.category.toUpperCase() + " — " : ""}
                    {loc.coordinates ? `${loc.coordinates.lat.toFixed(4)}° N, ${loc.coordinates.lng.toFixed(4)}° E` : ""}
                    {posts.length > 1 ? ` — ${posts.length} posts` : ""}
                  </div>
                  <div className={"post-links" + (isExpanded ? " expanded" : "")}>
                    {posts.slice(0, 2).map((url, j) => (
                      <a key={j} href={url} target="_blank" rel="noopener noreferrer">Post {String(j + 1).padStart(2, "0")} →</a>
                    ))}
                    {posts.slice(2).map((url, j) => (
                      <a key={j} href={url} target="_blank" rel="noopener noreferrer" className="extra">Post {String(j + 3).padStart(2, "0")} →</a>
                    ))}
                    {posts.length > 2 && (
                      <button className="more-toggle" onClick={() => setExpanded(isExpanded ? null : i)}>
                        {isExpanded ? "Show less" : `+${posts.length - 2} more`}
                      </button>
                    )}
                    {loc.linkedJournalPost?.slug && (
                      <Link href={`/journal/${loc.linkedJournalPost.slug}`}>Read the story →</Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
