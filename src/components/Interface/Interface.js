import React from 'react';
import { useCountries } from '../../hooks/countries.js';

export default function Interface({ setContinentFilter }) {
  const handleContinentFilter = (e) => {
    setContinentFilter(e.target.value);
  };
  const continentsArray = [...new Set(useCountries().map((country) => country.continent))].filter(
    (continent) => {
      return continent;
    }
  );
  return (
    <div>
      <select onChange={handleContinentFilter}>
        <option value="">All</option>
        {continentsArray.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
