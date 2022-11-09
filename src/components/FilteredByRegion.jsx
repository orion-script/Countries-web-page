import React from "react";

const options = [
  {
    label: "Filter By Region",
    value: "filter by region",
  },
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "Americas",
    value: "americas",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
];

function FilteredByRegoin({ selectField, onSelectHandler, index }) {
  return (
    <div className=" ml-4 mt-5 w-2/4 md:w-44 h-auto shadow-lg rounded-xl mr-8 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <select
        name="region"
        className="pl-2 w-full h-auto py-5 px-4 rounded-xl bg-white dark:bg-gray-700 dark:text-white"
        value={selectField}
        onChange={onSelectHandler}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={index}
            className="w-full rounded-b-xl"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilteredByRegoin;
