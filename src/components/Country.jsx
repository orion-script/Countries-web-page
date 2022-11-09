import React from "react";
import CountryCards from "./CountryCards";

function Country({ countries }) {
  return (
    <div className="w-full container m-auto grid md:grid-cols-4 gap-4 px-3 md:px-0 dark:bg-gray-800 dark:text-white">
      {countries.map((country, index) => {
        return <CountryCards country={country} key={index} />;
      })}
    </div>
  );
}

export default Country;
