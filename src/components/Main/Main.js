import React, { useState } from 'react';
import { useCountries } from '../../hooks/countries.js';
import CountryCard from '../CountryCard/CountryCard.js';
import Interface from '../Interface/Interface.js';

export default function Main() {
  const [continentFilter, setContinentFilter] = useState('');
  const { countries, error } = useCountries();

  return (
    <main>
      <p>{error}</p>
      <Interface setContinentFilter={setContinentFilter} />
      {countries
        .filter((country) => country.continent === continentFilter || continentFilter === '')
        .map((item) => (
          <CountryCard key={item.id} {...item} />
        ))}
    </main>
  );
}
