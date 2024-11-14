 // src/App.js

import React from 'react';
import Header from './Components/Header/Header';
import GeolocationComponent from './Components/Geolocation/Geolocation';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <MapCalling /> */}
      <GeolocationComponent/>
    </div>
  );
}

export default App;
