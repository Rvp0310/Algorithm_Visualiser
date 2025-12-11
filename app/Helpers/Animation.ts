// pause and resume functionality;
import { ReplayParam } from "./Types";

export const replay = ({prevArr, setArr, setDone, setActiveBars, setSwapBars, setOverwriteIndex}: ReplayParam) => {
    setArr(prevArr);
    setDone(false);
    setActiveBars([]);
    setSwapBars([]);
    setOverwriteIndex(null);
}

