import { NativeSelect, Typography } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/api';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    };
    fetchApi();
  }, []);
  return (
    <>
      <Typography
        variant='h5'
        style={{ marginBottom: 20 }}
        color='textSecondary'
      >
        Reported cases or Deaths by Country or Territory
      </Typography>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>United States</option>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
};

export default Countries;
