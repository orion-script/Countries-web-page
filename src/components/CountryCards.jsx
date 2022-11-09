import React from "react";
import { Link } from "react-router-dom";

function CountryCards({ country }) {
  return (
    <Link
      className="bg-white w-4/5 md:w-auto m-auto h-auto rounded-xl shadow-xl dark:bg-gray-700 dark:text-white pb-5"
      to="/details"
      state={country}
    >
      <img
        src={country.flags.svg}
        alt={country.flags}
        className=" h-46 rounded-t-xl"
      />
      <div className="pl-5">
        <h1 className="font-bold text-lg md:text-xl py-3">
          {country.name.common}
        </h1>
        <p>
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <p>
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCards;
