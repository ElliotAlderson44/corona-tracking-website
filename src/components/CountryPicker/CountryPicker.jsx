import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountriesData } from "../../api";

function CountryPicker({ onHandleCountryChange }) {
  const [fetchCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchCountries(await fetchCountriesData());
    };

    fetchCountries();
  }, [setFetchCountries]);
  console.log(fetchCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={e => onHandleCountryChange(e.target.value)} >
        <option value="">Global</option>
        {fetchCountries.map((mulk,index) => <option key={index} value={mulk}>{mulk}</option> )}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
