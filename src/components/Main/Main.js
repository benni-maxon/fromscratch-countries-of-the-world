import React from 'react';
import { useCountries } from '../../hooks/countries.js';
import CountryCard from '../CountryCard/CountryCard.js';

export default function Main() {
  return (
    <main>
      {useCountries().map((item) => (
        <CountryCard key={item.id} {...item} />
      ))}
    </main>
  );
}
