import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./PickCountry.module.css";
import axios from "axios";

const PickCountry = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountry();
  }, []);

  function getCountry() {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        setCountries(res.data.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => props.handleCountryChange(event)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default PickCountry;
