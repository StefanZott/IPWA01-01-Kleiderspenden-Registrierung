import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection, GeoJsonObject, Feature } from "geojson";
import "leaflet/dist/leaflet.css";

const geoJsonUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const WorldMap = () => {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch(geoJsonUrl)
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  const ResizeFix = () => {
    const map = useMap();
  
    useEffect(() => {
      setTimeout(() => {
        map.invalidateSize();
      }, 100); // Verzögerung wichtig
    }, [map]);
  
    return null;
  };

  const onCountryClick = (event: L.LeafletMouseEvent) => {
    const feature = event.target.feature;
    const name = feature.properties.name;
    const isoCode = feature.properties["ISO3166-1-Alpha-2"]
  
    // console.log("Geklickt:", name);
    setSelectedCountry((prev) => (prev === isoCode ? null : isoCode));
  };

  const countryStyle = (feature: any) => {
    // console.log("countryStyle: ", feature.properties);
    const isoCode = feature.properties["ISO3166-1-Alpha-2"];
    const isSelected = isoCode === selectedCountry;
    // console.log("isoCode: ", isoCode);
    // console.log("selectedCountry: ", selectedCountry);
    // console.log("isSelected: ", isSelected);
  
    return {
      fillColor: isSelected ? "#ff6961" : "#bcd", // Highlight rot
      weight: isSelected ? 2 : 1,
      color: isSelected ? "#ff0000" : "#333",
      fillOpacity: isSelected ? 0.8 : 0.6,
    };
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
      >
        <ResizeFix />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData &&
          geoData.features.map((feature: any, index: number) => (
            <GeoJSON
              key={index}
              data={feature}
              style={() => countryStyle(feature)}
              onEachFeature={(_, layer) => {
                layer.on({
                  click: (event) => onCountryClick(event),
                });
              }}
            />
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
