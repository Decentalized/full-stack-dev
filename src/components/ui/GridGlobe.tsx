"use client";

import dynamic from "next/dynamic";
import type { GlobeConfig } from "./Globe";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#E50914]/60 border-t-transparent" />
    </div>
  ),
});

export function GridGlobe() {
  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#0a0a0a",
    showAtmosphere: true,
    atmosphereColor: "#E50914",
    atmosphereAltitude: 0.1,
    emissive: "#1a0000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(229,9,20,0.7)",
    ambientLight: "#E50914",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#E50914", "#ff4d4d", "#ff884d"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[2] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[0] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[1] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[2] },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[0] },
    { order: 7, startLat: 48.8566, startLng: 2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[1] },
    { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[2] },
    { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[0] },
    { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.5, color: colors[1] },
    { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: colors[2] },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-full w-full">
        <div className="absolute z-10 h-full w-full">
          <World globeConfig={globeConfig} data={sampleArcs} />
        </div>
      </div>
    </div>
  );
}
