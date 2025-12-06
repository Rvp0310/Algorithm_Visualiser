"use client"

import algorithms from './data/algorithms.json'

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

import { useState } from 'react';

import MergeSort from './components/Sorting/MergeSort';
import None from './components/None';

export default function Visualizer() {
  const algos = {
    None: <None />,
    MergeSort: <MergeSort />
  }

  type AlgoKey = keyof typeof algos;

  const [selected, setSelected] = useState<AlgoKey>("None");

  return (
    <>
      <aside className='algoList'>
          <List
            sx={{
              "& ul": { padding: 0 },
            }}
            subheader={<CodeIcon />}
          >
            {algorithms.map((category) => (
              <li key={`section-${category.category}`}>
                <ListSubheader className="algoType">{category.category}</ListSubheader>
                <ul>
                  {category.items.map((item) => (
                    <ListItem key={`item-${category.category}-${item.name}`}>
                      <ListItemText primary={item.name} onClick={() => setSelected(item.component as AlgoKey)}/>
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </aside>
        <main className="d-flex justify-content-center p-4">
          {algos[selected]}
        </main>
        <aside className="controls">
          <div className="general">
            speed:
            <br />
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              className="slide"
              style={{
                padding: "1em 10px",
                width: "9em",
              }}
            />
            <br />
            <Button variant="outlined" sx={{ borderColor: "white", color: "white" }}>Generate New Input</Button>
            <Stack spacing={2} direction="row">
              <IconButton aria-label="pause">
                <PauseIcon sx={{ color: "white" }} />
                <PlayArrowIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="pause">
                <StairsIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="pause">
                <RestartAltIcon sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </div>
        </aside>
    </>
  );
}
