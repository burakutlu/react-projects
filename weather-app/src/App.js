import Header from './components/Header'
import { useEffect, useState } from 'react';
import './css/app.css'

const url = "http://api.weatherstack.com/"
const api = "efaf6840a7d6dc7f81b587c91a469223"

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

function App() {
    const [lat, setLat] = useState("null");
    const [lng, setLng] = useState("null");

    useEffect(() => {
        getUserLocation();
    });


    return (
        <Header />
    );
}

export default App;
