import React from "react";
import { graphGen } from "@/app/Helpers/InputGenerator/GraphGen";
import Graph from "../AlgoVisualizer/Graph";
import { Node, Edge } from "@/app/Helpers/Types";

const GraphSpace = ({
  nodes,
  edges,
  start,
  goal
}: {
  nodes: Node[];
  edges: Edge[];
  start: number;
  goal: number;
}) => {
  return (
    <div style={{minHeight: "85vh", minWidth: "50vw"}}>
      <Graph nodes = {nodes} edges = {edges} start = {start} goal = {goal}/>
    </div>
  );
};

export default GraphSpace;