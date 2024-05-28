import React from "react";
import { useSelector } from "react-redux";

const Trial = () => {
  const isLight = useSelector((state) => state.theme.isLight);

  return (
    <div className="w-10/12 flex md:flex-row flex-col justify-between items-center gap-8">
      <div
        className={`flex flex-col gap-3 ${
          isLight ? " text-DarkDesaturatedBlue" : "text-white"
        }`}
      >
        <div className="flex  justify-center md:justify-start items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="none"
              stroke="#10D8C4"
              strokeWidth="3"
              d="M1 4.134l1.907 1.908L7.949 1"
            />
          </svg>
          <p>Ultimate websites</p>
        </div>
        <div className="flex  justify-center md:justify-start items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="none"
              stroke="#10D8C4"
              strokeWidth="3"
              d="M1 4.134l1.907 1.908L7.949 1"
            />
          </svg>
          <span>100% data ownership</span>
        </div>
        <div className="flex  justify-center md:justify-start items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="none"
              stroke="#10D8C4"
              strokeWidth="3"
              d="M1 4.134l1.907 1.908L7.949 1"
            />
          </svg>
          <span>Email reports</span>
        </div>
      </div>
      <div>
        <button
          className={`px-12 py-3 rounded-full font-semibold bg-DarkDesaturatedBlue text-PaleBlue`}
        >
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default Trial;
