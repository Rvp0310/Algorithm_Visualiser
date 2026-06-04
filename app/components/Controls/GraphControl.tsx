import React from 'react'
import { Button, Slider } from "@mui/material";
import NewInputBtn from './NewInputBtn';

const GraphControl = ({playing, graphNodes, graphEdges, setNodes, setEdges}: {playing: boolean, graphNodes: number, graphEdges: number, setNodes: React.Dispatch<React.SetStateAction<number>>, setEdges: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div style={{ opacity: playing ? 0.4 : 1 }}>
      No.of Nodes:
      <br />
      <Slider
        defaultValue={7}
        aria-label="Default"
        disabled={playing}
        valueLabelDisplay="auto"
        min={5}
        max={25}
        value = {graphNodes}
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
        defaultValue={14}
        value = {graphEdges}
        aria-label="Default"
        disabled={playing}
        valueLabelDisplay="auto"
        className="slide"
        style={{
          padding: "1em 10px",
          width: "9em",
        }}
        min = {graphNodes - 1}
        max = {Math.min(graphNodes * 2, (graphNodes * (graphNodes - 1)) / 2)}
        onChange={(e, value) => {
          setEdges(value);
        }}
      />
    </div>
  )
}

export default GraphControl
