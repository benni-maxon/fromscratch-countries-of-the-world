import React from 'react';

export default function Interface({ setContinentFilter, countries }) {
  const handleContinentFilter = (e) => {
    setContinentFilter(e.target.value);
  };
  const continentsArray = [...new Set(countries.map((country) => country.continent))].filter(
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
