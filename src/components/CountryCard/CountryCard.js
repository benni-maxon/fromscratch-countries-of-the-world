import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="name">{name}</div>
      <img className="flag" src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}></img>
    </div>
  );
}
