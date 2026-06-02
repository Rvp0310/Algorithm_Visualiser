import { SortingAction } from "../../Types";

export const insertionSortWithSteps = (nums: number[]): {steps: SortingAction[]}  => {
    const steps: SortingAction[] = [];
    const aux = [...nums];

    let n = aux.length;
    for(let i = 1; i < n; i++){
        let key = aux[i];
        let keyPos = i;
        let j = i - 1;
        while(j >= 0){
            steps.push({
                index: [j, keyPos],
                action: "compare"
            });
            if(aux[j] > key){
                steps.push({
                    index: j + 1,
                    action: 'overwrite',
                    newVal: aux[j]
                })
                aux[j + 1] = aux[j];
                keyPos = j;
                j--;
            } else {
                break;
            }
            steps.push({
                index: keyPos,
                action: "overwrite",
                newVal: key
            });

            aux[keyPos] = key;
        }
    }
    steps.push({
        action: "done"
    })

    return { steps };
}