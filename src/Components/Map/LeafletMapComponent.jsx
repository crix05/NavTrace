//  // src/LeafletMapComponent.js

// import React, { useEffect, useRef } from 'react';

// const LeafletMapComponent = ({ coordinates, center }) => {
//   const mapRef = useRef(null); 
//   const leafletMap = useRef(null);  

//   useEffect(() => {
//     if (!leafletMap.current && window.L && mapRef.current) {
//       // Initialize the map only if it hasn't been initialized before
//       leafletMap.current = window.L.map(mapRef.current).setView([center.lat, center.lng], 17);

//       // Add OpenStreetMap tile layer
//       window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(leafletMap.current);

//       // Add markers and polyline for each coordinate
//       coordinates.forEach(coord => {
//         const marker = window.L.marker([coord.lat, coord.lng]).addTo(leafletMap.current);
//         marker.bindPopup(`Lat: ${coord.lat}, Lng: ${coord.lng}`).openPopup();
//       });

//       // Add polyline connecting the coordinates
//       const pathCoordinates = coordinates.map(coord => [coord.lat, coord.lng]);
//       window.L.polyline(pathCoordinates, { color: 'red' }).addTo(leafletMap.current);
//     }
//   }, [coordinates, center]);

//   return (
//     <div>
       
//       <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default LeafletMapComponent;
// src/LeafletMapComponent.js

import React, { useEffect, useRef } from 'react';

const LeafletMapComponent = ({ coordinates, center }) => {
  const mapRef = useRef(null); 
  const leafletMap = useRef(null);  

  useEffect(() => {
    if (!leafletMap.current && window.L && mapRef.current) {
      // Initialize the map only if it hasn't been initialized before
      leafletMap.current = window.L.map(mapRef.current).setView([center.lat, center.lng], 17);

      // Add dark mode tile layer (CartoDB Dark Matter)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(leafletMap.current);
    
      // Add markers and polyline for each coordinate
      coordinates.forEach(coord => {
        const marker = window.L.marker([coord.lat, coord.lng]).addTo(leafletMap.current);
        marker.bindPopup(`Lat: ${coord.lat}, Lng: ${coord.lng}`).openPopup();
      });

      // Add polyline connecting the coordinates
      const pathCoordinates = coordinates.map(coord => [coord.lat, coord.lng]);
      window.L.polyline(pathCoordinates, { color: 'red' }).addTo(leafletMap.current);
    }
  }, [coordinates, center]);

  return (
    <div>
      <div ref={mapRef} style={{ height: '62.5vh', width: '100%', borderRadius:'25px' }}></div>
    </div>
  );
};

export default LeafletMapComponent;
