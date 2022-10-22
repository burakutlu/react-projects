import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react';

import './css/style.css'
import './css/app.css'

const url = "http://api.weatherstack.com/"
const api = "efaf6840a7d6dc7f81b587c91a469223"


function App() {
  const [lat, setLat] = useState("null");
  const [lng, setLng] = useState("null");

  function getWeather(time, location) {
    fetch(url + time + `?access_key=${api}&query=${location}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  /* EXPERIMENTAL */
  function getUserLocation() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition());
    } else {
      console.log("Geolocation not available.");
    }
  }

  return (
    <>
      <Header />
      <Main lat={lat} lng={lng}/>
    </>
  );
}

export default App;
