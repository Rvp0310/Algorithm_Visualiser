import React, { useEffect, useState } from "react";

import { randomArrayGen } from "@/app/Helpers/ArrayGen";
import { RefreshTriggerProps, SortingAction } from "@/app/Helpers/Types";
import { mergeSortWithSteps } from "@/app/Helpers/algorithms/MergeSortLogic";
import { createSortingAnimator } from "@/app/Helpers/animator/SortAnimator";

const MergeSort: React.FC<RefreshTriggerProps> = ({ refreshTrigger }) => {
  const [arr, setArr] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortingAction[]>([]);

  const [activeBars, setActiveBars] = useState<number[]>([]);
  const [swapBars, setSwapBars] = useState<number[]>([]);
  const [overwriteIndex, setOverwriteIndex] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);

  const { play } = createSortingAnimator({setArr, setActiveBars, setSwapBars, setOverwriteIndex, setDone});
  
  useEffect(() => {
    const newArr = randomArrayGen();
    setArr(newArr);
    const { steps } = mergeSortWithSteps([...newArr]);
    setSteps(steps);
    setDone(false);
    setActiveBars([]);
    setSwapBars([]);
    setOverwriteIndex(null);
    setPlaying(false);
  }, [refreshTrigger]);

  return (
    <div className="default">
      <div style={{height: '60px'}}>
        {!playing && <button
          type="button"
          className="btn btn-info start"
          style={{ margin: "0 45%"}}
          onClick={() => {
            setPlaying(true);
            play(steps)
          }}
        >
          Start Sorting
        </button>}
      </div>
      <div className="bars-wrapper">
        {arr.map((h, i) => (
          <div
            key={i}
            className="bars"
            style={{
              height: `${h}%`,
              width: "10%",
              backgroundColor: done
                ? "#9B51E0"
                : swapBars.includes(i)
                ? "#EB5757"
                : overwriteIndex === i
                ? "#27AE60"
                : activeBars.includes(i)
                ? "#F2C94C"
                : "#3E6DE0",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MergeSort;
