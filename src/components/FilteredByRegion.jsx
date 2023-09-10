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
    <div className="mt-5 w-4/5 md:w-[15rem] h-14 shadow-xl rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white m-auto md:m-0">
      <select
        name="region"
        className="w-full h-full px-5 rounded-xl bg-white dark:bg-gray-700 dark:text-white cursor-pointer"
        value={selectField}
        onChange={onSelectHandler}
      >
        {options.map((option) => (
          <option value={option.value} key={index} className="w-full">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilteredByRegoin;
