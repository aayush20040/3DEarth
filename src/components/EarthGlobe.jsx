import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const EarthGlobe = () => {
  const globeContainerRef = useRef(null);

  useEffect(() => {
    if (globeContainerRef.current) {
      // Initialize the globe on the container
      const globe = Globe()(globeContainerRef.current)
        .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .backgroundColor("rgba(0,0,0,0)"); // Transparent background
      
      // Set camera position for better visibility
      globe.pointOfView({ lat: 0, lng: 0, altitude: 3 });
      
      // Enable auto-rotation
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2;
      
      // Fix the size of the globe by setting the width and height explicitly
      globeContainerRef.current.style.width = "400px";  // Fixed width
      globeContainerRef.current.style.height = "400px"; // Fixed height
    }
  }, []);

  return (
    <div
      ref={globeContainerRef}
      style={{
        width: "400px",  // Fixed size
        height: "400px", // Fixed size
        position: "relative",
      }}
    />
  );
};

export default EarthGlobe;
