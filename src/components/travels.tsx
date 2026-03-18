import geojson from "geojson";
import L, { LatLngLiteral, Layer } from "leaflet";
import React, { FC, useEffect, useMemo, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  useMapEvents,
} from "react-leaflet";

import geoJsonData from "../assets/geoJsonData.json";
import { cities, countries } from "./constant";

/* --------------------------- TYPES --------------------------- */

export interface Position {
  latlng: LatLngLiteral;
  tooltip: string | string[];
}

interface State {
  zoom: number;
  displayGeoJson: boolean;
}

/* --------------------------- MAP EVENTS --------------------------- */

function MapEvents({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => {
      onZoom(e.target.getZoom());
    },
  });

  return null;
}

/* --------------------------- MARKERS LAYER --------------------------- */

const MarkersLayer: FC<{
  zoom: number;
  markersAdded: boolean;
  setMarkersAdded: (v: boolean) => void;
}> = ({ zoom, markersAdded, setMarkersAdded }) => {
  const { t } = useTranslation();
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (zoom >= 4 && !markersAdded) {
      cities.forEach((c: Position) => {
        L.marker(c.latlng)
          .addTo(map)
          .bindTooltip(
            Array.isArray(c.tooltip)
              ? c.tooltip.map((tt) => t(tt)).join(", ")
              : t(c.tooltip)
          );
      });

      setMarkersAdded(true);
    }

    if (zoom < 4 && markersAdded) {
      map.eachLayer((layer: Layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      setMarkersAdded(false);
    }
  }, [zoom, map, markersAdded, setMarkersAdded, t]);

  return null;
};

/* --------------------------- CUSTOM MAP --------------------------- */

const CustomMap: FC = () => {
  const { t } = useTranslation();

  const [markersAdded, setMarkersAdded] = useState(false);
  const [state, setState] = useState<State>({
    zoom: 3,
    displayGeoJson: true,
  });

  const data: geojson.FeatureCollection =
    geoJsonData as geojson.FeatureCollection;

  const geoJson = useMemo(
    () => (
      <GeoJSON
        data={data}
        style={() => ({
          color: "#4a83ec",
          weight: 1,
          fillColor: "#1a1d62",
          fillOpacity: 0.25,
        })}
        onEachFeature={(feature, layer) => {
          layer.on({
            mouseover: (e: any) => {
              const country =
                countries[e.target.feature.properties.adm0_a3];

              if (!country) return;

              layer.bindTooltip(
                Array.isArray(country.tooltip)
                  ? country.tooltip.map((c: string) => t(c)).join(", ")
                  : t(country.tooltip)
              );
              layer.openTooltip();
            },
            mouseout: () => {
              layer.unbindTooltip();
              layer.closeTooltip();
            },
          });
        }}
      />
    ),
    [data, t]
  );

  const handleZoomChange = (zoom: number) => {
    setState((prev) => ({
      ...prev,
      zoom,
      displayGeoJson: zoom < 4,
    }));
  };

  return (
    <MapContainer
      style={{ height: "500px" }}
      center={[54.370138916189596, -29.918133437500003]}
      zoom={3}
    >
      <MapEvents onZoom={handleZoomChange} />

      <MarkersLayer
        zoom={state.zoom}
        markersAdded={markersAdded}
        setMarkersAdded={setMarkersAdded}
      />

      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=TON_TOKEN" />

      {state.displayGeoJson && geoJson}
    </MapContainer>
  );
};

/* --------------------------- PAGE --------------------------- */

export const Travels: FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="Travels" className="pt-5 pb-4" fluid>
      <Row className="mb-4 justify-content-center">
        <Col xs={8} className="pt-2 pb-2">
          <Badge>
            <h2 className="mytitle titles rounded">
              {t("navbar.travel")}
            </h2>
          </Badge>
        </Col>
      </Row>

      <Row className="pt-5 mb-4 justify-content-center">
        <Col md={10}>
          <CustomMap />
        </Col>
      </Row>
    </Container>
  );
};