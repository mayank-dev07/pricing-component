import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SliderCount = styled(Slider)({
  color: "hsl(174, 77%, 80%)",
  height: 10,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 40,
    width: 40,
    backgroundColor: "hsl(174, 86%, 45%)",
    border: "1px solid currentColor",
  },

  "& .MuiSlider-rail": {
    color: "hsl(224, 65%, 95%)",
    opacity: 1,
    height: 10,
  },
});

export default SliderCount;
