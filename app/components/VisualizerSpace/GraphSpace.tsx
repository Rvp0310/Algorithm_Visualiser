import React from "react";
import { graphGen } from "@/app/Helpers/InputGenerator/GraphGen";
import Graph from "../AlgoVisualizer/Graph";
import { Node, Edge } from "@/app/Helpers/Types";
import LegendItem from "../LegendItem";

const GraphSpace = ({
  nodes,
  edges,
  start,
  goal,
  visited,
  discovered,
  path,
  onStart,
  done,
  playing
}: {
  nodes: Node[];
  edges: Edge[];
  start: number;
  goal: number;
  visited: number[];
  discovered: number[];
  path: number[];
  onStart: () => void;
  done: boolean;
  playing: boolean;
}) => {
  return (
    <div style={{minHeight: "85vh", maxWidth: "90vh", minWidth: "50vw"}}>
      <div style={{ height: "60px" }}>
              {!playing && !done ? (
                <button
                  type="button"
                  className="btn btn-info start"
                  style={{ maxWidth: "30%", margin: "0 40%", zIndex: "100" }}
                  onClick={onStart}
                >
                  Start Traversal
                </button>
              ) : (
                <div className="legend">
                          <LegendItem color="#F2C94C" label="Discovered" />
                          <LegendItem color="#272628" label="Visited" />
                          <LegendItem color="#EB5757" label="Goal" />
                          <LegendItem color="#27AE60" label="Start" />
                          <LegendItem color="#9B51E0" label="Final Path" />
                          <LegendItem color="white" label="Not Final path" />
                </div>
              )}
            </div>
      <Graph nodes = {nodes} edges = {edges} start = {start} goal = {goal} visited = {visited} discovered = {discovered} done = {done} path = {path}/>
    </div>
  );
};

export default GraphSpace;