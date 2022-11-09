import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router";

function CountryDetails() {
  let { state } = useLocation();

  const { flags, name, population, region, subregion, capital, tld } = state;

  return (
    <div className="bg-slate-100 dark:bg-gray-800 dark:text-white w-full h-auto pt-10">
      <Link
        className="bg-white flex flex-row justify-center items-center w-28 p-2 ml-5 mb-10 md:ml-24 shadow-lg hover:shadow-2xl rounded dark:bg-gray-700 dark:text-white"
        to="/"
      >
        <FaArrowLeft className="mr-2" />
        <p>Back</p>
      </Link>
      <div className="container m-auto md:w-11/12 md:mt-10 md:flex md:flex-cols md:pb-20 md:pt-4">
        <div className="w-11/12 m-auto md:m-0 md:w-2/5 rounded-xl">
          <img src={flags.svg} alt="" className="rounded-xl" />
        </div>
        <div className="w-4/5 ml-4 md:ml-0 md:w-3/5 md:flex md:flex-col items-center">
          <div className="md:flex md:flex-cols w-full justify-between h-80 items-center">
            <div className="w-full ml-2 md:w-2/5 md:ml-5 pb-5 md:pb-0">
              <h2 className="font-bold text-xl md:text-2xl py-5">
                {name.common}
              </h2>
              <p>
                <span className="font-bold">Native Name:</span> {}
              </p>
              <p>
                {" "}
                <span className="font-bold">Population:</span> {population}
              </p>
              <p>
                {" "}
                <span className="font-bold">Region:</span> {region}
              </p>
              <p>
                {" "}
                <span className="font-bold">Sub-Region:</span> {subregion}
              </p>
              <p>
                {" "}
                <span className="font-bold">Capital:</span> {capital}
              </p>
            </div>
            <div className="w-11/12 ml-2 md:w-2/5">
              <p>
                {" "}
                <span className="font-bold">Top Level Domain:</span> {tld}
              </p>
              <p>
                {" "}
                <span className="font-bold">Currencies:</span> {}
              </p>
              <p>
                {" "}
                <span className="font-bold">Languages:</span> {}
              </p>
            </div>
          </div>
          <div className="w-11/12 ml-2 md:w-2/5">
            <p>
              {" "}
              <span className="font-bold">Border Countries:</span> {}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
