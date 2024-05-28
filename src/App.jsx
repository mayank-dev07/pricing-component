import React from "react";
import Pricing from "./components/Pricing";
import ThemeSwitch from "./components/Switch/ThemeSwitch";
import { useSelector } from "react-redux";

const App = () => {
  const isLight = useSelector((state) => state.theme.isLight);

  return (
    <div
      className={`min-h-screen w-screen flex flex-col justify-center items-center ${
        isLight ? "bg-white" : "bg-slate-800"
      }`}
    >
      <div className="fixed right-0 top-0 z-50">
        <ThemeSwitch />
      </div>
      <div
        className={`container overflow-x-hidden h-screen md:h-[85vh] md:my-8 md:w-min relative ${
          isLight ? "bg-VeryPaleBlue" : "bg-gray-900"
        }`}
      >
        <div
          className={`absolute z-10 flex justify-center items-center  w-full py-12 `}
        >
          <Pricing />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="449">
          <path
            fill={`${isLight ? "#F1F5FE" : "#000000"}`}
            fillRule="evenodd"
            d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default App;
