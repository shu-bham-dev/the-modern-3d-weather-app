import React from "react";
import "./App.css";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import TimeDesc from "./components/TimeDesc";
import Temperature from "./components/Temperature";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Header />
      <Inputs />
      <TimeDesc />
      <Temperature />
    </div>
  );
};

export default App;
