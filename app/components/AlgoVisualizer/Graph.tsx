import React from "react";
import { Node, Edge } from "@/app/Helpers/Types";

const Graph = ({
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
    <svg width="100%" height="100%">
      {/* Edges */}
      {edges.map((edge, index) => {
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];

        return (
          <line
            key={index}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="black"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="10"
            fill={node.id == start? "green": node.id == goal ? "red" : "blue"}
          />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Graph;