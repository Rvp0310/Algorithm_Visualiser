"use client";

import { useState, useEffect } from "react";

import { algorithms } from "./data/algorithms";

import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LegendItem from "./components/LegendItem";
import SortControl from "./components/Controls/SortControl";
import GraphControl from "./components/Controls/GraphControl";
import SortSpace from "./components/VisualizerSpace/SortSpace";
import GraphSpace from "./components/VisualizerSpace/GraphSpace";
import None from "./components/None";

import { randomArrayGen } from "./Helpers/InputGenerator/ArrayGen";
import { SortingAction } from "./Helpers/Types";
import { createSortingAnimator } from "@/app/Helpers/animator/SortAnimator";
import {replay} from './Helpers/Animation'

import { AlgoItem } from "./Helpers/Types";

export default function Visualizer() {
  const [selected, setSelected] = useState<AlgoItem>();
  const [category, setCategory] = useState<string>();
  
  //For Sorting vv
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [arr, setArr] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortingAction[]>([]);
  const [activeBars, setActiveBars] = useState<number[]>([]);
  const [swapBars, setSwapBars] = useState<number[]>([]);
  const [overwriteIndex, setOverwriteIndex] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(0);
  const [arraylen, setArraylen] = useState<number>(0);
  const [prevArr, setPrevArr] = useState<number[]>([]);

  // For Graph vv
  const [graphNodes, setNodes] = useState<number>(7);
  const [graphEdges, setEdges] = useState<number>(14);
  const [weighted, setWeighted] = useState<boolean>(false);
  const [directed, setDirected] = useState<boolean>(false);

  const { play } = createSortingAnimator({
    setArr,
    setActiveBars,
    setSwapBars,
    setOverwriteIndex,
    setDone,
    setPlaying,
    speed,
  });

  useEffect(() => {
    if (!category) return;

    if (category == "Sorting" && selected != null){
      const newArr = randomArrayGen(arraylen);
      setArr(newArr);
      setPrevArr(newArr);
      const { steps } = selected.sorter([...newArr]);
      setSteps(steps);
      setDone(false);
      setActiveBars([]);
      setSwapBars([]);
      setOverwriteIndex(null);
      setPlaying(false);
    }
  }, [refreshTrigger, selected]);

  // For Sorting ^^

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
                      disabled={playing}
                      onClick={() => {
                          setSelected({
                            name: algo.name,
                            sorter: algo.sorter
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
                play(steps);
            }}
        />      
        : category == "Graph" ? 
          <GraphSpace 
            nodesN = {graphNodes}
            edgesN = {graphEdges}
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
            defaultValue={speed}
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
            <IconButton className='restartBtn' disabled={!selected || playing || !done} onClick = {() => replay({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex, setPlaying, speed, steps})} sx={{ opacity: playing || !done? 0.4 : 1}} aria-label="restart">
              <RestartAltIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          {(category == 'Sorting') && <SortControl arraylen={arraylen} playing={playing} setArraylen={setArraylen} setRefreshTrigger={setRefreshTrigger}/>}
          {(category == 'Graph') && <GraphControl playing={playing} graphNodes={graphNodes} graphEdges = {graphEdges} setNodes={setNodes} setEdges={setEdges}/>}
        </div>
      </aside>
    </>
  );
}