import React, { useEffect, useState } from "react";

import { randomArrayGen } from "@/app/Helpers/ArrayGen";
import { RefreshTriggerProps, SortingAction } from "@/app/Helpers/Types";
import { mergeSortWithSteps } from "@/app/Helpers/algorithms/MergeSortLogic";

const MergeSort: React.FC<RefreshTriggerProps> = ({ refreshTrigger }) => {
  const [arr, setArr] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortingAction[]>([]);

  const [activeBars, setActiveBars] = useState<number[]>([]);
  const [swapBars, setSwapBars] = useState<number[]>([]);
  const [overwriteIndex, setOverWriteIndex] = useState<number | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    const newArr = randomArrayGen();
    setArr(newArr);
    const { steps } = mergeSortWithSteps([...newArr]);
    setSteps(steps);
    setDone(false);
    setActiveBars([]);
    setSwapBars([]);
    setOverWriteIndex(null);
  }, [refreshTrigger]);

  const handleStep = (step: SortingAction) => {
    switch (step.action) {
      case "compare":
        setActiveBars(step.index);
        break;
      case "swap":
        const [i, j] = step.index;
        setArr((prev) => {
          const newArr = [...prev];
          [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
          return newArr;
        });
        setSwapBars(step.index);
        break;
      case "overwrite":
        setArr((prev) => {
          const newArr = [...prev];
          newArr[step.index as number] = step.newVal;
          return newArr;
        });
        setOverWriteIndex(step.index as number);
        break;
      case "done":
        setDone(true);
        setActiveBars([]);
        setSwapBars([]);
        setOverWriteIndex(null);
        break;
    }
  };

  const play = (steps: SortingAction[]) => {
    let delay = 0;
    const speed = 50;

    steps.forEach((step) => {
      setTimeout(() => {
        handleStep(step);
      }, delay);

      delay += speed;
    });
  };

  return (
    <div className="default">
      {!done && <button
        type="button"
        className="btn btn-info start"
        style={{ margin: "0 45%" }}
        onClick={() => play(steps)}
      >
        Start Sorting
      </button>}
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
