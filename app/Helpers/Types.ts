// Sorting Related

import React from "react";

export interface SortProps {
  arr: number[];
  done: boolean;
  activeBars: number[];
  swapBars: number[];
  overwriteIndex: number | null;
}

export type SorterType = (nums: number[]) => {
  steps: SortingAction[];
}

export type GraphAlgoType = (nodes: Node[], edges: Edge[], start: number, goal: number) => {
  steps: GraphAction[];
}

export interface AlgoItem {
  name: string;
  sorter?: SorterType;
  graphAlgo?: GraphAlgoType;
}

export type SortingAction =
  | {
      index: [number, number];
      action: "compare";
    }
  | {
      index: [number, number];
      action: "swap";
    }
  | {
      index: number;
      action: "overwrite";
      newVal: number;
    }
  | {
      action: "done";
    };

export type ReplayParam = {
  prevArr: number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBars: React.Dispatch<React.SetStateAction<number[]>>;
  setSwapBars: React.Dispatch<React.SetStateAction<number[]>>;
  setOverwriteIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  speed: number;
  sortSteps: SortingAction[];
};

export type SortAnimatorParams = {
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  setActiveBars: React.Dispatch<React.SetStateAction<number[]>>;
  setSwapBars: React.Dispatch<React.SetStateAction<number[]>>;
  setOverwriteIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  speed: number;
};

export type SortSpaceProps = {
    arr: number[];
    done: boolean;
    playing: boolean;
    activeBars: number[];
    swapBars: number[];
    overwriteIndex: number | null;
    onStart: () => void;
};

export type Node = {
  id: number;
  x: number;
  y: number;
}

export type Edge = {
  from: number;
  to: number;
}

export type GraphAction = 
{
  action: "discover";
  node: number;
} |
{
  action: "visit";
  node: number;
} |
{
  action: "explore";
  from: number;
  to: number;
} | 
{
  action: "path";
  nodes: number[];
} |
{
  action: "done";
}

export type graphAnimatorProps = {
  setDiscovered: React.Dispatch<React.SetStateAction<number[]>>;
  setVisited: React.Dispatch<React.SetStateAction<number[]>>;
  setPath: React.Dispatch<React.SetStateAction<number[]>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  speed: number;
}