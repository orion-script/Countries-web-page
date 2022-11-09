import React from "react";

function SearchBox({ onChangeHandler, placeholder, searchField }) {
  return (
    <div className="w-11/12 md:w-2/5">
      <input
        type="search"
        value={searchField}
        className="h-14 ml-5 w-full rounded-lg shadow-lg pl-4 md:pl-5 bg-white dark:bg-gray-700 dark:text-white"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBox;
