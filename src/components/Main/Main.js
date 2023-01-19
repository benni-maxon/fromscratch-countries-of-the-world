import React, { useState } from 'react';
import { useCountries } from '../../hooks/countries.js';
import CountryCard from '../CountryCard/CountryCard.js';
import Interface from '../Interface/Interface.js';

export default function Main() {
  const [continentFilter, setContinentFilter] = useState('');

  return (
    <main>
      <Interface setContinentFilter={setContinentFilter} />
      {useCountries()
        .filter((country) => country.continent === continentFilter || continentFilter === '')
        .map((item) => (
          <CountryCard key={item.id} {...item} />
        ))}
    </main>
  );
}
