import React from "react";
import { Routes, Route } from "react-router-dom";
// import NavBar from "./routes/NavBar";
import HomeRoute from "./routes/HomeRoute";
import CountryDetails from "./routes/CountryDetails";

function App() {
  return (
    <Routes>
      <Route index element={<HomeRoute />} />
      <Route path="/details" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
