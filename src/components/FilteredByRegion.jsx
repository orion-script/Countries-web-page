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
    <div className="ml-4 mt-5 w-2/5 md:w-44 h-14  shadow-lg rounded-xl mr-8 md:mr-0 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <select
        name="region"
        className="p-4 w-full h-auto py-5 rounded-xl bg-white dark:bg-gray-700 dark:text-white cursor-pointer"
        value={selectField}
        onChange={onSelectHandler}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={index}
            className="w-full rounded-b-xl mr-10"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilteredByRegoin;
