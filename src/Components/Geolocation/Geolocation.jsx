import React, { useEffect, useState, useRef } from 'react';
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Geolocation.css";
import LeafletMapComponent from '../Map/LeafletMapComponent';
import SpeedIcon from '@mui/icons-material/Speed';

const coordinates1 = [
 
  { lat: 18.921776334149936, lng: 75.74698212161258 },
  { lat: 18.92124371306148, lng: 75.74650618476998 },
  { lat: 18.920799919143327, lng: 75.74641829113946 },
  { lat: 18.920276559914942, lng: 75.74630023226015 },
  { lat: 18.919930090646968, lng: 75.74622207605066 },
  { lat: 18.91962877874747, lng: 75.7461541063976 },
  { lat: 18.918874013277765, lng: 75.7459824696231 },
  { lat: 18.91862197039667, lng: 75.74592259941593 }
];

const coordinates2 = [
  { lat: 18.92182325825478, lng: 75.74680677364185 },
  { lat: 18.921236275372724, lng: 75.746544984713 },
  { lat: 18.920848520768292, lng: 75.74620283840022 },
  { lat: 18.920287848882808, lng: 75.74625018786243 },
  { lat: 18.919973138898392, lng: 75.74603124161466 },
  { lat: 18.91960359353827, lng: 75.74626575332945 },
  { lat: 18.91887133066549, lng: 75.74599376294175 },
  { lat: 18.918652577535156, lng: 75.74579374882848 }
];




const GeolocationComponent = () => {
  const [central, setCentral] = useState([])
  const [path, setPath] = useState([]); // Array to store coordinate pairs
  const pathRef = useRef(path); // Ref to keep track of the latest path

  // Keep pathRef updated with the latest path value
  useEffect(() => {
    pathRef.current = path;
  }, [path]);

  useEffect(() => {
    const fetchLocation = () => {
      console.log("Current Path on interval run:", pathRef.current);

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Update the path with the new coordinate
            setPath((prevPath) => {
              const updatedPath = [...prevPath, [latitude, longitude]];

              if (updatedPath.length === 8) {
                // Log all coordinates when path reaches 5 items
                updatedPath.forEach(coord => console.log(coord));
                setCentral(updatedPath[2]);

                // Reset path to only the last coordinate
                return [[latitude, longitude]];
              }

              return updatedPath;
            });
          },
          (error) => {
            console.error("Error fetching location:", error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Run fetchLocation every 5 seconds
    const intervalId = setInterval(fetchLocation, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);




  return (
      <div className="main">
          <div className="header">
            <Header/>
          </div>
        
        <div className='body'>
          
        
          <div className='body-wrapper'>

              <div className="box-main"> 
                <Card value="70 km/h" label="Speed" />
                <Card value="540 km" label= "Distance"/>
                <Card value="Indore" label="Location" />
                <Card value="Service" label="Road_Type" />
              </div>
              
              <div className="map-container">
                  
                  <div className="map-half" style={{position:'relaive'}}>
                    <h2>Before</h2>
                    {/* <div style={{height:'50px', width:'50px', position:'absolute', backgroundColor:'orange', top:300, zIndex:40}}></div> */}
                    <LeafletMapComponent coordinates={coordinates2} center={{ lat: 18.9185, lng: 75.7458 }} />
                    
                  </div>

                  <div className="map-half">
                    <h2>After</h2>
                    <LeafletMapComponent coordinates={coordinates1} center={{ lat: 18.9185, lng: 75.7458 }} />
                  </div>

                  

              </div>

              
          </div>
        </div>
          

            
      </div>
  );
};

export default GeolocationComponent;
