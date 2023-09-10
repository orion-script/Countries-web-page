import React from "react";
import { Link } from "react-router-dom";

function CountryCards({ country }) {
  return (
    <Link
      className="bg-white w-11/12 md:w-auto m-auto md:m-0 h-auto rounded-xl shadow-xl dark:bg-gray-700 dark:text-white pb-5"
      to="/details"
      state={country}
    >
      <div className="w-full h-[200px] rounded-t-xl">
        <img
          src={country.flags.svg}
          alt={country.flags}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="pl-5">
        <h1 className="font-bold text-lg md:text-xl py-3">
          {country.name.common}
        </h1>
        <p>
          <span className="font-bold">Population:</span>{" "}
          {new Intl.NumberFormat().format(country.population)}
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
