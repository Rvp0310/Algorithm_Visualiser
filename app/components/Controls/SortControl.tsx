import React from "react";
import { Button, Slider } from "@mui/material";

const SortControl = ({arraylen, playing, setArraylen, setRefreshTrigger}: {arraylen: number, playing: boolean, setArraylen: React.Dispatch<React.SetStateAction<number>>, setRefreshTrigger: React.Dispatch<React.SetStateAction<number>>}) => {
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
      <Button
        variant="outlined"
        disabled={playing}
        sx={{ borderColor: "white", color: "white" }}
        onClick={() => setRefreshTrigger((prev) => prev + 1)}
      >
        Generate New Input
      </Button>
    </div>
  );
};

export default SortControl;
