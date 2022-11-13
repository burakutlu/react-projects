import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react';

import './css/style.css'
import './css/app.css'

const url = "http://api.weatherstack.com/"
const api = "efaf6840a7d6dc7f81b587c91a469223"


function App() {
  const [city, setCity] = useState("")
  const [unit, setUnit] = useState("celcius")

  function getWeather(time, location) {
    fetch(url + time + `?access_key=${api}&query=${location}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  const getCity = (text) => setCity(text)
  const getUnit = (unit) => setUnit(unit)
  
  return (
    <>
      <Header handleCity={getCity} handleUnit={getUnit} />
      <Main />
    </>
  );
}

export default App;
