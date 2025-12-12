import MergeSort from "../components/Sorting/MergeSort";
import { ReplayParam } from "./Types";
import { createSortingAnimator } from "./animator/SortAnimator";


export const replay = ({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex, setPlaying, speed, steps}: ReplayParam) => {
    setArr(prevArr);
    setDone(false);
    setPlaying(true);
    setActiveBars([]);
    setSwapBars([]);
    setOverwriteIndex(null);

    const { play } = createSortingAnimator({
        setArr,
        setActiveBars,
        setSwapBars,
        setOverwriteIndex,
        setDone,
        setPlaying,
        speed,
    });
    
    play(steps);
}

