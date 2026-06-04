import { sortReplayParam, graphReplayParam } from "./Types";
import { createSortingAnimator, GraphAnimator } from "./Animators";


export const sortReplay = ({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex, setPlaying, speed, sortSteps}: sortReplayParam) => {
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

export const graphReplay = ({graphSteps, setVisited, setDiscovered, setPath, setDone, setPlaying, speed}: graphReplayParam) => {
    setDiscovered([]);
    setVisited([]);
    setPath([]);
    setDone(false);
    setPlaying(true);

    const {graphPlay} = GraphAnimator({
        setDiscovered, setVisited, setPath, setDone, setPlaying, speed
      })
    
    graphPlay(graphSteps);
}
