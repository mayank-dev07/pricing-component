import React, { useEffect } from "react";
import { SliderThumb } from "@mui/material/Slider";
import Title from "./Title";
import Trial from "./Trial";
import CustomSwitch from "./Switch/CustomSwitch";
import SliderCount from "./SliderCount";
import { useSelector, useDispatch } from "react-redux";
import {
  setSliderValue,
  setBaseValue,
  setPageview,
  setChecked,
} from "../redux/pricingSlice";

const Pricing = () => {
  const isLight = useSelector((state) => state.theme.isLight);
  const sliderValue = useSelector((state) => state.pricing.sliderValue);
  const baseValue = useSelector((state) => state.pricing.baseValue);
  const pageview = useSelector((state) => state.pricing.pageview);
  const checked = useSelector((state) => state.pricing.checked);
  const dispatch = useDispatch();

  const marks = [
    { value: 8 },
    { value: 12 },
    { value: 16 },
    { value: 24 },
    { value: 36 },
  ];

  const handleSwitchChange = (event) => {
    dispatch(setChecked(event.target.checked));
  };

  const handleChange = (event, newValue) => {
    dispatch(setBaseValue(newValue));
  };

  useEffect(() => {
    if (checked) {
      dispatch(setSliderValue(baseValue - baseValue * 0.25));
    } else {
      dispatch(setSliderValue(baseValue));
    }
  }, [checked, baseValue, dispatch]);

  useEffect(() => {
    switch (baseValue) {
      case 8:
        dispatch(setPageview("10K"));
        break;
      case 12:
        dispatch(setPageview("50K"));
        break;
      case 16:
        dispatch(setPageview("100K"));
        break;
      case 24:
        dispatch(setPageview("500K"));
        break;
      case 36:
        dispatch(setPageview("1M"));
        break;
      default:
        dispatch(setPageview("10K"));
        break;
    }
  }, [baseValue, dispatch]);

  function SliderComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13">
          <g fill="#80FFF3" fillRule="evenodd">
            <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
          </g>
        </svg>
      </SliderThumb>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-16 md:gap-10">
        <Title />
        <div
          className={`w-10/12 lg:w-1/2 flex flex-col items-center rounded-3xl gap-4 py-8 md:py-10 ${
            isLight ? "bg-white" : "bg-slate-800"
          } `}
        >
          <div className="px-12 flex justify-center md:justify-between items-center w-full text-xl ">
            <p className={`text-GrayishBlue tracking-widest text-lg`}>
              {pageview}&nbsp;PAGEVIEW
            </p>
            <div className="hidden md:flex justify-center items-center">
              <span className="flex justify-center items-center">
                <span
                  className={`text-4xl font-bold ${
                    isLight ? " text-DarkDesaturatedBlue" : "text-white"
                  } `}
                >
                  ${sliderValue.toFixed(2)}
                </span>
                <span className="text-GrayishBlue">&nbsp;/&nbsp;month</span>
              </span>
            </div>
          </div>
          <div className="w-10/12 py-1 md:py-6">
            <SliderCount
              step={null}
              marks={marks}
              onChange={handleChange}
              slots={{ thumb: SliderComponent }}
              min={8}
              max={36}
            />
          </div>
          <div className="md:hidden flex justify-center items-center">
            <span className="flex justify-center items-center">
              <span
                className={`text-4xl font-bold ${
                  isLight ? " text-DarkDesaturatedBlue" : "text-white"
                } `}
              >
                ${sliderValue.toFixed(2)}
              </span>
              <span className="text-GrayishBlue">
                &nbsp;&nbsp;/&nbsp;&nbsp;month
              </span>
            </span>
          </div>
          <div className="flex gap-2 md:w-10/12 justify-end items-center md:px-8">
            <p className="text-sm text-GrayishBlue">Monthly&nbsp;Billing</p>
            <CustomSwitch checked={checked} onChange={handleSwitchChange} />
            <div className="flex gap-2">
              <p className="text-sm text-GrayishBlue">Yearly&nbsp;Billing</p>
              <div
                className={`text-sm px-2 rounded-full flex md:hidden justify-center items-center font-semibold bg-LightGrayishRed text-LightRed`}
              >
                -25%
              </div>
              <div
                className={`text-sm px-4 hidden md:flex rounded-lg justify-center items-center font-semibold bg-LightGrayishRed text-LightRed`}
              >
                25% discount
              </div>
            </div>
          </div>
          <hr className="border-t-[1px] border-gray-200 w-full my-4" />
          <Trial />
        </div>
      </div>
    </>
  );
};

export default Pricing;
