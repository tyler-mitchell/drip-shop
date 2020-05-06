import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DownArrow from "@material-ui/icons/KeyboardArrowDownRounded";
import React, { useState } from "react";

const useBorderSelectStyles = makeStyles(({ palette }) => ({
  label: {
    marginLeft: "4px",
    color: palette.grey[500],
    "&.Mui-focused": {
      color: palette.grey[500], // to overwrite the default behaviour
    },
  },
  select: {
    minWidth: "200px",
    background: "white",
    color: palette.grey[700],
    borderColor: palette.grey[300],
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "4px",
    paddingLeft: "24px",
    paddingTop: "14px",
    paddingBottom: "15px",
    "&:hover": {
      borderColor: palette.grey[400],
    },
    "&:focus": {
      borderRadius: "4px",
      background: "white",
      borderColor: blue[200],
    },
  },
  icon: {
    color: palette.grey[500],
    marginTop: 4,
    right: 12,
    position: "absolute",
    flexShrink: 0,
    userSelect: "none",
    pointerEvents: "none",
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "white",
    "& li.Mui-selected": {
      fontWeight: 700,
    },
  },
}));
// Original design here: https://github.com/siriwatknp/mui-treasury/issues/541

const BorderSelect = ({ label, options, defaultValue }) => {
  const [val, setVal] = useState(defaultValue);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <InputLabel className={borderSelectClasses.label} id="inputLabel">
        {label}
      </InputLabel>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select }}
        labelId="inputLabel"
        IconComponent={DownArrow}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
      >
        {options.map((opt) => (
          <MenuItem value={opt}>{opt}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BorderSelect;
