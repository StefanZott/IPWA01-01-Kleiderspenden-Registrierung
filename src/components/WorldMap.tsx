// src/components/WorldMap.tsx
import { useEffect, useMemo, useState, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection, Feature } from "geojson";
import type { LeafletMouseEvent, PathOptions } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useHandover } from "./context/ClothDonation";

const GEOJSON_URL =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

// erlaubt: Buchstaben (inkl. Akzente), Leerzeichen, Punkt, Apostroph, Bindestrich
const ALLOWED_NAME = /^[\p{L}\p{M}\s.'-]{1,100}$/u;

function normalizeName(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const t = input.trim();
  return ALLOWED_NAME.test(t) ? t : null;
}

const WorldMap = () => {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [selectedIso, setSelectedIso] = useState<string | null>(null);
  const { updateData } = useHandover();

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const res = await fetch(GEOJSON_URL, { signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FeatureCollection;
        setGeoData(data);
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          console.error("GeoJSON laden fehlgeschlagen:", err);
        }
      }
    })();

    return () => ac.abort();
  }, []);

  const ResizeFix = () => {
    const map = useMap();
    useEffect(() => {
      const id = setTimeout(() => map.invalidateSize(), 120);
      return () => clearTimeout(id);
    }, [map]);
    return null;
  };

  const countryStyle = useCallback(
    (feature?: Feature): PathOptions => {
      const iso = feature?.properties && (feature.properties as any)["ISO3166-1-Alpha-2"];
      const isSelected = !!iso && iso === selectedIso;
      return {
        fillColor: isSelected ? "#ff6961" : "#bcd",
        weight: isSelected ? 2 : 1,
        color: isSelected ? "#ff0000" : "#333",
        fillOpacity: isSelected ? 0.8 : 0.6,
      };
    },
    [selectedIso]
  );

  const onEachFeature = useCallback(
    (_feature: Feature, layer: L.Layer) => {
      layer.on("click", (evt: LeafletMouseEvent) => {
        const feature = (evt.target as any).feature as Feature | undefined;
        const props = feature?.properties as any;
        const iso = props?.["ISO3166-1-Alpha-2"];
        const rawName = props?.name;

        const safeName = normalizeName(rawName);
        if (!iso || !safeName) return;

        setSelectedIso((prev) => (prev === iso ? null : iso));
        updateData({ crisisArea: safeName });
      });
      // Optional: Mauszeiger als Hinweis
      // @ts-ignore
      layer.setStyle?.({ className: "cursor-pointer" });
    },
    [updateData]
  );

  const geoLayer = useMemo(() => {
    if (!geoData) return null;
    return <GeoJSON data={geoData} style={countryStyle} onEachFeature={onEachFeature} />;
  }, [geoData, countryStyle, onEachFeature]);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
      >
        <ResizeFix />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoLayer}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
