import React from 'react'
import '../css/style.css'
import '../css/header.css'

function Header({ handleCity, handleUnit }) {

  return (
    <header>
        <nav>
            <h1>Burak's Weather</h1>
            <div></div>
            <input 
              onChange={(e) => handleCity(e.target.value)} type="text" 
              id="city-input" 
              placeholder="City Name" />
            <div></div>
            <select id="unit-menu" onChange={(select) => handleUnit(select.target.value)}>
                <option value="celcius">Celcius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
        </nav>
    </header>
  )
}

export default Header