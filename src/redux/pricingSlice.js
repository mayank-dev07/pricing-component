import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderValue: 8,
  baseValue: 8,
  pageview: "10K",
  checked: false,
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
    setBaseValue: (state, action) => {
      state.baseValue = action.payload;
    },
    setPageview: (state, action) => {
      state.pageview = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const { setSliderValue, setBaseValue, setPageview, setChecked } =
  pricingSlice.actions;
export default pricingSlice.reducer;
