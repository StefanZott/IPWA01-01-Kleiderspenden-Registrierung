import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const geoJsonUrl =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const WorldMap = () => {
  const [geoData, setGeoData] = useState(null);
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

  const onCountryClick = (event: any) => {
    const name = event.target.feature.properties.NAME_EN;
    const isoCode = event.target.feature.properties.ISO_A3;
  
    console.log("Geklickt:", name);
    setSelectedCountry(isoCode);
  };

  const countryStyle = (feature: any) => {
    const isoCode = feature.properties.ISO_A3;
    const isSelected = isoCode === selectedCountry;
  
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
        {geoData && (
          <GeoJSON
            data={geoData}
            style={countryStyle}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: onCountryClick,
              });
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
