"use client";
import { useState, useEffect } from "react";

import { algorithms } from "./data/algorithms";

import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LegendItem from "./components/LegendItem";

import None from "./components/None";

import { randomArrayGen } from "./Helpers/ArrayGen";
import { SortingAction } from "./Helpers/Types";
import { createSortingAnimator } from "@/app/Helpers/animator/SortAnimator";
import {replay} from './Helpers/Animation'

import { AlgoItem } from "./Helpers/Types";
import Sort from "./components/AlgoVisualizer/Sort";

export default function Visualizer() {
  const [selected, setSelected] = useState<AlgoItem>();
  const [category, setCategory] = useState<string>();
  
  //For Sorting
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
    if (!selected) return;

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
  }, [refreshTrigger, selected]);

  // For Sorting ^

  return (
    <>
      <aside className="algoList">
        <List
          sx={{
            "& ul": { padding: 0 },
          }}
          subheader={<CodeIcon />}
        >
          {Object.entries(algorithms).map(([category, items]) => (
            <div key={`section-${category}`}>
              <ListSubheader className="algoType">{category}</ListSubheader>
              <ul>
                {items.map((algo) => (
                  <ListItem key={`item-${category}-${algo.name}`}>
                    <ListItemText
                      primary={algo.name}
                      onClick={() => {
                          setSelected({
                            name: algo.name,
                            sorter: algo.sorter
                          })
                          setCategory(category);
                        }
                      }
                    />
                  </ListItem>
                ))}
              </ul>
            </div>
          ))}
        </List>
      </aside>
      <main className="d-flex justify-content-center p-4">
        {selected ? (
          <div className="sortSpace">
            <div style={{ height: "60px" }}>
              {!playing && !done ? (
                <button
                  type="button"
                  className="btn btn-info start"
                  style={{ margin: "0 45%" }}
                  onClick={() => {
                    console.log(arr);
                    setPlaying(true);
                    play(steps);
                  }}
                >
                  Start Sorting
                </button>
              ) : (
                <div className="legend">
                  {selected &&
                    (
                      category == 'Sorting' ?
                        <>
                          <LegendItem color="#F2C94C" label="Comparing" />
                          <LegendItem color="#EB5757" label="Swapping" />
                          <LegendItem color="#27AE60" label="Overwriting" />
                          <LegendItem color="#9B51E0" label="Sorted" />
                        </> : <></>
                    )
                  }
                </div>
              )}
            </div>
            { 
              category == 'Sorting' ?
              < Sort
                arr={arr}
                done={done}
                activeBars={activeBars}
                swapBars={swapBars}
                overwriteIndex={overwriteIndex}
              /> : ''
            }
          </div>
        ) : (
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
          {(category == 'Sorting') && (
            <div style={{ opacity: playing? 0.4 : 1}}>
              array length:
              <br />
              <Slider
                defaultValue={arraylen}
                aria-label="Default"
                disabled = {playing}
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
                disabled = {playing}
                sx={{ borderColor: "white", color: "white" }}
                onClick={() => setRefreshTrigger((prev) => prev + 1)}
              >
                Generate New Input
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}