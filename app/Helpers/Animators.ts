import {SortAnimatorParams, SortingAction, graphAnimatorProps, GraphAction} from './Types'

export const createSortingAnimator = ({
    setArr,
    setActiveBars,
    setSwapBars,
    setOverwriteIndex,
    setDone,
    setPlaying,
    speed
} : SortAnimatorParams) => {

    const handleStep = (step: SortingAction) => {
        setActiveBars([]);
        setSwapBars([]);
        setOverwriteIndex(null);
        
        switch (step.action) {
            case "compare":
                setActiveBars(step.index);
                break;
            case "swap":
                const [i, j] = step.index;
                setSwapBars([i, j]);
                setArr(prev => {
                    const newArr = [...prev];
                    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                    return newArr;
                })
                break;
            case "overwrite":
                setOverwriteIndex(step.index);
                setArr(prev => {
                    const new_arr = [...prev];
                    new_arr[step.index] = step.newVal;
                    return new_arr;
                })
                break;
            case "done":
                setDone(true);
                setPlaying(false);
                break;
        }
    };

    const sortPlay = (steps: SortingAction[]) => {
        let delay = 0;
        steps.forEach(step => {
            setTimeout(() => handleStep(step), delay);
            delay += (115 - speed);
        });
    };

    return {sortPlay};
}

export const GraphAnimator = ({
    setDiscovered,
    setVisited,
    setPath,
    setDone,
    setPlaying,
    speed
} : graphAnimatorProps) => {

    const handleStep = (step: GraphAction) => {
        switch(step.action){
            case "discover":
                setDiscovered((prev) => [...prev, step.node]);
                break;
            case "visit":
                setDiscovered(prev => prev.filter(n => n !== step.node));
                setVisited((prev) => [...prev, step.node]);
                break;
            case "path":
                setPath(step.nodes);
                break;
            case "done":
                setDone(true);
                setPlaying(false);
                break;
        }
    }

    const graphPlay = (steps: GraphAction[]) => {
        let delay = 0;
        steps.forEach(step => {
            setTimeout(() => handleStep(step), delay);
            delay += (255 - speed);
        });
    }

    return {graphPlay};
}