"use client"
import { useState } from 'react';

import { algorithms } from './data/algorithms'

import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StairsIcon from "@mui/icons-material/Stairs";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import None from './components/None';

import { AlgoItem } from './Helpers/Types';

export default function Visualizer() {

  const [selected, setSelected] = useState<AlgoItem>();
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  const [speed, setSpeed] = useState<number>(0);
  const [arraylen, setArraylen] = useState<number>(100);

  return (
    <>
      <aside className='algoList'>
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
                      <ListItemText primary={algo.name} onClick={() => setSelected({name: algo.name, component: algo.component})}/>
                    </ListItem>
                  ))}
                </ul>
              </div>
            ))}
          </List>
        </aside>
        <main className="d-flex justify-content-center p-4">
          {selected ? <selected.component refreshTrigger = {refreshTrigger} speed = {speed} arraylen = {arraylen} />: <None />}
        </main>
        <aside className="controls">
          <div className="general">
            speed:
            <br />
            <Slider
              defaultValue={speed}
              aria-label="Default"
              valueLabelDisplay="auto"
              className="slide"
              style={{
                padding: "1em 10px",
                width: "9em",
              }}
              onChange={(e, value) => {setSpeed(value)}}
            />
            <br />
            <Stack spacing={7} direction="row">
              <IconButton aria-label="pause-play">
                <PauseIcon sx={{ color: "white" }} />
                <PlayArrowIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="restart">
                <RestartAltIcon sx={{ color: "white" }} />
              </IconButton>
            </Stack>
            { 
              selected?.name === "Merge Sort" && (
                <div>
                  array length:
                  <br />
                  <Slider
                    defaultValue={arraylen}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    className="slide"
                    style={{
                      padding: "1em 10px",
                      width: "9em",
                    }}
                    onChange={(e, value) => {setArraylen(value)}}
                  />
                  <Button variant="outlined" sx={{ borderColor: "white", color: "white"}} onClick={() => setRefreshTrigger(prev => prev + 1)}>Generate New Input</Button>
                </div>
              ) 
            }
          </div>
        </aside>
    </>
  );
}
