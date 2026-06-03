import { ReplayParam } from "./Types";
import { createSortingAnimator } from "./Animators";


export const replay = ({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex, setPlaying, speed, sortSteps}: ReplayParam) => {
    setArr(prevArr);
    setDone(false);
    setPlaying(true);
    setActiveBars([]);
    setSwapBars([]);
    setOverwriteIndex(null);

    const { sortPlay } = createSortingAnimator({
        setArr,
        setActiveBars,
        setSwapBars,
        setOverwriteIndex,
        setDone,
        setPlaying,
        speed,
    });
    
    sortPlay(sortSteps);
}

