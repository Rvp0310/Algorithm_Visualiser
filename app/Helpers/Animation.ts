// pause and resume functionality, restart wip 
import { ReplayParam } from "./Types";

export const replay = ({arr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex}: ReplayParam) => {
    setArr(arr);
    setDone(false);
    setActiveBars([]);
    setSwapBars([]);
    setOverwriteIndex(null);
}

