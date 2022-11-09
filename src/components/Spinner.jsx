import React from "react";
import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <>
      <div className="w-100 mt-10">
        <img
          width={100}
          className="text-center mx-auto"
          src={spinner}
          alt="spins"
        />
      </div>
    </>
  );
}

export default Spinner;
