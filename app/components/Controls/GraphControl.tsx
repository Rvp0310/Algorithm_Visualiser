import React from 'react'
import { Button, Slider } from "@mui/material";
import NewInputBtn from './NewInputBtn';

const GraphControl = ({playing, graphNodes, graphEdges, setNodes, setEdges}: {playing: boolean, graphNodes: number, graphEdges: number, setNodes: React.Dispatch<React.SetStateAction<number>>, setEdges: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div style={{ opacity: playing ? 0.4 : 1 }}>
      No.of Nodes:
      <br />
      <Slider
        defaultValue={graphNodes}
        aria-label="Default"
        disabled={playing}
        valueLabelDisplay="auto"
        className="slide"
        style={{
          padding: "1em 10px",
          width: "9em",
        }}
        onChange={(e, value) => {
          setNodes(value);
        }}
      />
      <br />
      <div className='sliderEnd'>
        <span>Sparse</span>
        <span>Dense</span>
      </div>
      <Slider
        defaultValue={graphEdges}
        aria-label="Default"
        disabled={playing}
        valueLabelDisplay="auto"
        className="slide"
        style={{
          padding: "1em 10px",
          width: "9em",
        }}
        onChange={(e, value) => {
          setEdges(value);
        }}
      />
    </div>
  )
}

export default GraphControl
