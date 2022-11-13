import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import SearchBox from "../components/SearchBox";
import FilteredByRegoin from "../components/FilteredByRegion";
import Country from "../components/Country";

function HomeRoutes() {
  //useSates
  const [searchField, setSearchField] = useState("");
  const [selectField, setSelectField] = useState("");
  const [loading, setLoading] = useState(false);
  const [countries, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [errorMessage, setErrorMesaage] = useState("");

  //useEffects
  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMesaage(error.message);
      });
  }, []);

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      return country.name.common.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCountries(newFilteredCountries);
  }, [countries, searchField]);

  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      return country.region.toLocaleLowerCase().includes(selectField);
    });
    setFilteredCountries(newFilteredCountries);
  }, [countries, selectField]);

  //event handles
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const onSelectChange = (event) => {
    if (event.target.value === "filter by region") {
      setFilteredCountries(countries);
    } else {
      const selectField = event.target.value.toLocaleLowerCase();
      setSelectField(selectField);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white w-full">
      <div className="md:flex md:flex-row justify-between md:py-10 pt-5 pb-16 w-full md:w-11/12 md:m-auto h-auto md:px-8 items-center">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search countries..."
        />
        <FilteredByRegoin onSelectHandler={onSelectChange} />
      </div>

      <div>
        {errorMessage && (
          <div className="font-bold text-center text-xl italic mt-20">
            {errorMessage}
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          <Country countries={filteredCountries} key={countries.idd} />
        )}
      </div>
    </div>
  );
}

export default HomeRoutes;
