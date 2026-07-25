"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import type { Propiedad } from "@/types/propiedad";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PropertyMapProps {
  propiedades: Propiedad[];
}

//Exportamos las coordenadas
export default function PropertyMap({
  propiedades,
}: PropertyMapProps) {

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  function getCoordinatesFromEmbed(url: string | null) {
    if (!url) return null;

    const lat = url.match(/!3d(-?\d+\.\d+)/);
    const lng = url.match(/!2d(-?\d+\.\d+)/);

    if (!lat || !lng) return null;

    return {
      lat: Number(lat[1]),
      lng: Number(lng[1]),
    };
  }

  // Crear mapa una sola vez
  useEffect(() => {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-102.2916, 21.8853],
      zoom: 11,
    });

    map.addControl(new mapboxgl.NavigationControl());

    mapRef.current = map;

    return () => map.remove();

  }, []);

  // Dibujar marcadores cuando cambien las propiedades
  useEffect(() => {

    if (!mapRef.current) return;

     // Eliminar markers anteriores
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    propiedades.forEach((propiedad) => {

      const coords = getCoordinatesFromEmbed(propiedad.maps_url);

      if (!coords) return;

      const popup = new mapboxgl.Popup({
        offset: 25,
      }).setHTML(`
          <div style="width:180px">
            <a href="/comprar/${propiedad.id}/${slugify(propiedad.titulo)}">              <img
                src="${propiedad.images[0]}"
                style="width:100%;height:100px;object-fit:cover;border-radius:8px;"
              />
            </a>
            <h6>${propiedad.titulo}</h6>
            <strong>$${Number(propiedad.precio).toLocaleString("es-MX")}</strong>
          </div>
      `);

      const el = document.createElement("div");

      el.draggable = false;
      el.style.userSelect = "none";
      el.style.webkitUserSelect = "none";

        function formatPrice(price: number) {
      if (price >= 1_000_000) {
        return `$${(price / 1_000_000).toFixed(1)}M`;
      }

  return `$${Math.round(price / 1000)}K`;
}

      el.textContent = formatPrice(Number(propiedad.precio));

      el.style.background = "#e63946";
      el.style.color = "white";
      el.style.padding = "5px 10px";
      el.style.borderRadius = "13px";
      el.style.fontWeight = "600";
      el.style.fontSize = "10px";
      el.style.boxShadow = "0 2px 8px rgba(0,0,0,.25)";
      el.style.cursor = "pointer";
      el.style.whiteSpace = "nowrap";

      // el.onmouseenter = () => {
      //   el.style.background = "#0d5813";
      // };

      // el.onmouseleave = () => {
      //   el.style.background = "#116b18";
      // };

    //   const marker = new mapboxgl.Marker({
    //     color: "#e63946",
    //   })
    //     .setLngLat([coords.lng, coords.lat])
    //     .setPopup(popup)
    //     .addTo(mapRef.current!);

    //     markersRef.current.push(marker);
    // });

        const marker = new mapboxgl.Marker(el)
      .setLngLat([coords.lng, coords.lat])
      .setPopup(popup)
      .addTo(mapRef.current!);

      markersRef.current.push(marker);
    });

  }, [propiedades]);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
}