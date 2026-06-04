import React from "react";
import { Node, Edge } from "@/app/Helpers/Types";

const Graph = ({
  nodes,
  edges,
  start,
  goal,
  visited,
  discovered,
  done,
  path,
}: {
  nodes: Node[];
  edges: Edge[];
  start: number;
  goal: number;
  visited: number[];
  discovered: number[];
  done: boolean;
  path: number[];
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
            stroke={
              done
                ? path.includes(fromNode.id) && path.includes(toNode.id)
                  ? "#9B51E0"
                  : "white"
                : "black"
            }
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="15"
            fill={
              done
                ? node.id === start
                  ? "green"
                  : node.id === goal
                    ? "red"
                    : path.includes(node.id)
                      ? "#9B51E0"
                      : "white"
                : node.id === start
                  ? "green"
                  : node.id === goal
                    ? "red"
                    : visited.includes(node.id)
                      ? "#272628"
                      : discovered.includes(node.id)
                        ? "#F2C94C"
                        : "blue"
            }
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
