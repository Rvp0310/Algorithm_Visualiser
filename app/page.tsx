"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

import { algorithms } from "./data/algorithms";

import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Node, Edge, GraphAction } from "./Helpers/Types";
import SortControl from "./components/Controls/SortControl";
import GraphControl from "./components/Controls/GraphControl";
import SortSpace from "./components/VisualizerSpace/SortSpace";
import GraphSpace from "./components/VisualizerSpace/GraphSpace";
import None from "./components/None";

import { randomArrayGen } from "./Helpers/InputGenerator/ArrayGen";
import { graphGen } from "./Helpers/InputGenerator/GraphGen";
import { SortingAction } from "./Helpers/Types";
import { createSortingAnimator, GraphAnimator } from "@/app/Helpers/Animators";
import {sortReplay, graphReplay} from './Helpers/Animation'

import { AlgoItem } from "./Helpers/Types";
import NewInputBtn from "./components/Controls/NewInputBtn";

export default function Visualizer() {
  const [selected, setSelected] = useState<AlgoItem>();
  const [category, setCategory] = useState<string>();
  
  //General States
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);

  //For Sorting vv
  const [arr, setArr] = useState<number[]>([]);
  const [sortSteps, setSortSteps] = useState<SortingAction[]>([]);
  const [activeBars, setActiveBars] = useState<number[]>([]);
  const [swapBars, setSwapBars] = useState<number[]>([]);
  const [overwriteIndex, setOverwriteIndex] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [arraylen, setArraylen] = useState<number>(0);
  const [prevArr, setPrevArr] = useState<number[]>([]);

  // For Graph vv
  const [NodesN, setNodesN] = useState<number>(7);
  const [EdgesN, setEdgesN] = useState<number>(14);
  // const [weighted, setWeighted] = useState<boolean>(false);
  // const [directed, setDirected] = useState<boolean>(false);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]> ([]);
  const [start, setStart] = useState<number>(0);
  const [goal, setGoal] = useState<number>(0);
  const [graphSteps, setGraphSteps] = useState<GraphAction[]>([]);
  const [visited, setVisited] = useState<number[]>([]);
  const [discovered, setDiscovered] = useState<number[]>([]);
  const [path, setPath] = useState<number[]>([]);

  // For Sorting vv
  const { sortPlay } = createSortingAnimator({
    setArr,
    setActiveBars,
    setSwapBars,
    setOverwriteIndex,
    setDone,
    setPlaying,
    speed,
  });

  const {graphPlay} = GraphAnimator({
    setDiscovered, setVisited, setPath, setDone, setPlaying, speed
  })

  // refresh input vv
  useEffect(() => {
    if (!category) return;

    if (category == "Sorting"){
      const newArr = randomArrayGen(arraylen);
      setArr(newArr);
      setPrevArr(newArr);
      const {steps} = selected!.sorter!([...newArr]);
      setSortSteps(steps);
      setDone(false);
      setActiveBars([]);
      setSwapBars([]);
      setOverwriteIndex(null);
      setPlaying(false);
    }
    else if (category == "Graph"){
      const {graphNodes, graphEdges, startNode, goalNode} = graphGen(NodesN, EdgesN);
      setNodes(graphNodes);
      setEdges(graphEdges);
      setStart(startNode);
      setGoal(goalNode)
      const { steps } = selected!.graphAlgo!(graphNodes, graphEdges, startNode, goalNode);
      console.log(steps);
      setGraphSteps(steps);
      setDone(false);
      setVisited([]);
      setDiscovered([]);
      setPath([]);
      setPlaying(false);
    }
  }, [refreshTrigger, selected]);

  return (
    <>
      <aside className="algoList">
        <List
          sx={{
            "& ul": { padding: 0 },
            opacity: !playing ? 1 : 0.6,
          }}
          subheader={<CodeIcon />}
        >
          {Object.entries(algorithms).map(([category, items]) => (
            <div key={`section-${category}`}>
              <ListSubheader className="algoType">{category}</ListSubheader>
              <ul>
                {items.map((algo) => (
                  <ListItem key={`item-${category}-${algo.name}`}>
                    <ListItemButton
                      disabled={playing && selected?(( algo.name != selected.name )? true : false): false}
                      onClick={playing ? (e) => {
                        e.preventDefault()
                      } : () => {
                          setSelected({
                            name: algo.name,
                            sorter: "sorter" in algo ? algo.sorter : undefined,
                            graphAlgo: "graphAlgo" in algo ? algo.graphAlgo : undefined,
                          })
                          setCategory(category);
                        }
                      }
                    >
                    <ListItemText 
                      primary={algo.name} 
                    />
                  </ListItemButton>
                  </ListItem>
                ))}
              </ul>
            </div>
          ))}
        </List>
      </aside>
      <main className="d-flex justify-content-center p-4">
        {category == "Sorting" ? 
          <SortSpace
            arr={arr}
            done={done}
            playing={playing}
            activeBars={activeBars}
            swapBars={swapBars}
            overwriteIndex={overwriteIndex}
            onStart={() => {
                setPlaying(true);
                sortPlay(sortSteps);
            }}
        />      
        : category == "Graph" ? 
          <GraphSpace 
            nodes = {nodes}
            edges = {edges}
            start = {start}
            goal = {goal}
            visited = {visited}
            discovered = {discovered}
            path = {path}
            onStart = {() => {
              setPlaying(true);
              graphPlay(graphSteps);
            }}
            done={done}
            playing={playing}
          /> 
        : (
          <None />
        )}
      </main>
      <aside className="controls">
        <div className="general" style={{ opacity: selected && !playing ? 1 : 0.4 }}>
          speed:
          <br />
          <Slider
            value = {speed}
            disabled={!selected || playing}
            aria-label="Default"
            valueLabelDisplay="auto"
            className="slide"
            style={{
              padding: "1em 10px",
              width: "9em",
            }}
            onChange={(e, value) => {
              setSpeed(value);
            }}
          />
          <br />
          <Tooltip title = 'Replay'>
            <IconButton className='restartBtn' disabled={!selected || playing || !done} onClick = {category == "sorting" ? () => sortReplay({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex, setPlaying, speed, sortSteps}): () => graphReplay({graphSteps, setVisited, setDiscovered, setPath, setDone, setPlaying, speed})} sx={{ opacity: playing || !done? 0.4 : 1}} aria-label="restart">
              <RestartAltIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          {(category == 'Sorting') && <SortControl arraylen={arraylen} playing={playing} setArraylen={setArraylen} />}
          {(category == 'Graph') && <GraphControl playing={playing} graphNodes={NodesN} graphEdges = {EdgesN} setNodes={setNodesN} setEdges={setEdgesN} />}
          <NewInputBtn playing = {playing} setRefreshTrigger={setRefreshTrigger} />
        </div>
      </aside>
    </>
  );
}