import React from 'react';

import './style.css';
const Card = ({country}) => {
  return (
    <div className="card-container">
      <div className="countryCard" key={country.altSpellings[0]}>
          <img src={country.flags.svg} alt={country.altSpellings[0]} />
      </div>
      <h4>{country.name.common}</h4>
    </div>
  )
}

export default Card;