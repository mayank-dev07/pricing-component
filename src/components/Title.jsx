import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const isLight = useSelector((state) => state.theme.isLight);

  return (
    <div className="w-full md:h-max z-20 relative flex justify-center items-center md:py-8">
      <div className="absolute z-10 flex justify-center items-center md:h-32">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <p
            className={`text-2xl md:text-3xl font-bold ${
              isLight ? " text-DarkDesaturatedBlue" : "text-white"
            }`}
          >
            Simple,&nbsp;traffic-based&nbsp;pricing
          </p>
          <p
            className={`flex flex-col md:flex-row text-sm ${
              isLight ? " text-GrayishBlue" : "text-slate-200"
            }  `}
          >
            <span>Sign-up for our 30-day trial.</span>
            <span>No credit card required.</span>
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
        <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
          <circle cx="63" cy="82" r="62.5" />
          <circle cx="105" cy="41" r="40.5" />
        </g>
      </svg>
    </div>
  );
};

export default Title;
