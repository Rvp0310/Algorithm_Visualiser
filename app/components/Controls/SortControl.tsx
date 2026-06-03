import React from "react";
import { Button, Slider } from "@mui/material";
import NewInputBtn from "./NewInputBtn";

const SortControl = ({arraylen, playing, setArraylen}: {arraylen: number, playing: boolean, setArraylen: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div style={{ opacity: playing ? 0.4 : 1 }}>
      array length:
      <br />
      <Slider
        defaultValue={arraylen}
        aria-label="Default"
        disabled={playing}
        valueLabelDisplay="auto"
        className="slide"
        style={{
          padding: "1em 10px",
          width: "9em",
        }}
        onChange={(e, value) => {
          setArraylen(value);
        }}
      />
    </div>
  );
};

export default SortControl;
