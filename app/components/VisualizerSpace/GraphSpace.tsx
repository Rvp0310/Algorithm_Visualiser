import React, { useEffect } from "react";
import { graphGen } from "@/app/Helpers/InputGenerator/GraphGen";

const GraphSpace = ({
  nodesN,
  edgesN,
}: {
  nodesN: number;
  edgesN: number;
}) => {
   const { nodes, edges } = graphGen(nodesN, edgesN);

useEffect(() => {
    console.log(nodesN);
    console.log(edgesN);
    console.log(nodes);
    console.log(edges);
}, [nodesN, edgesN]);

  return (
    <svg width="650" height="700">
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
            r="20"
            fill="red"
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

export default GraphSpace;