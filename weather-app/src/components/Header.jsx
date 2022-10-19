import React from 'react'

import '../css/style.css'
import '../css/header.css'

function Header() {
  return (
    <header>
        <nav>
            <h1>Burak's Weather</h1>
            <div></div>
            <input type="text" id="city-input" placeholder="City Name" />
            <div></div>
            <select id="unit-menu">
                <option value="unit-celc">Celcius</option>
                <option value="unit-fahr">Fahrenheit</option>
                <option value="unit-kelvin">Kelvin</option>
            </select>
        </nav>
    </header>
  )
}

export default Header