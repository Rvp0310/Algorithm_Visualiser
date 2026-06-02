import { SortingAction } from "../../Types";

export const selectionSortWithSteps = (nums: number[]): {steps: SortingAction[]}  => {
    const steps: SortingAction[] = [];
    const aux = [...nums];

    let n = aux.length;
    for(let i = 0; i < n - 1; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            steps.push({
                index: [min, j],
                action: 'compare'
            });
            if(aux[j] < aux[min]){
                min = j;
            }
        }
        if(min != i){
            steps.push({
                index: [min, i],
                action: 'swap'
            });
            [aux[i], aux[min]] = [aux[min], aux[i]];
        }
    }
    steps.push({
        action: 'done'
    });

    return { steps };
}