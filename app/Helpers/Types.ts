export interface SortProps {
  arr: number[];
  done: boolean;
  activeBars: number[];
  swapBars: number[];
  overwriteIndex: number | null;
}

export interface AlgoItem {
  name: string;
  component: React.FC<SortProps>;
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
  arr: number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBars: React.Dispatch<React.SetStateAction<number[]>>;
  setSwapBars: React.Dispatch<React.SetStateAction<number[]>>;
  setOverwriteIndex: React.Dispatch<React.SetStateAction<number | null>>;
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
