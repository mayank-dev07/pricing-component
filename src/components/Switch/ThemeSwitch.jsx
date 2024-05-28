import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: "grey",
    "&.Mui-checked": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "hsl(174, 86%, 45%)",
      },
    },
    "& + .MuiSwitch-track": {
      backgroundColor: "grey",
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "grey",
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "hsl(226, 100%, 87%)",
  },
}));

const ThemeSwitch = () => {
  const isLight = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  useEffect(() => {
    console.log(isLight);
  }, [isLight]);

  return (
    <CustomSwitch
      {...label}
      checked={isLight}
      onChange={() => dispatch(toggleTheme())}
    />
  );
};

export default ThemeSwitch;
