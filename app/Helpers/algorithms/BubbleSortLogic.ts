import { SortingAction } from "../Types";

export const bubbleSortWithSteps = (nums: number[]): {steps: SortingAction[]}  => {
    const steps: SortingAction[] = [];
    const aux = [...nums];

    let max = 0;
    let n = aux.length;
    for(let i = 0; i < n - 1; i++){
        let swapped = false;
        for(let j = 0; j < n - i - 1; j++){
            steps.push({
                index: [j, j + 1],
                action: "compare"
            });
            if(aux[j + 1] < aux[j]){
                steps.push({
                index: [j, j + 1],
                action: "swap"
                });
                [aux[j], aux[j + 1]] = [aux[j + 1], aux[j]];
                swapped = true;
            }
        }

        if(!swapped){
            steps.push({
                action: "done"
            })
            break;
        }
    }
    
    return { steps };
}