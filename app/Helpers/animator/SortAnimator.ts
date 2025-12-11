import {SortAnimatorParams, SortingAction} from '../Types'

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

    const play = (steps: SortingAction[]) => {
        let delay = 0;
        steps.forEach(step => {
            setTimeout(() => handleStep(step), delay);
            delay += (105 - speed);
        });
    };

    return {play};
}