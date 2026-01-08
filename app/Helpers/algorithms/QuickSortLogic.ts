import { SortingAction } from "../Types";

export const quickSortWithSteps = (nums: number[]): {steps: SortingAction[]}  => {
    const steps: SortingAction[] = [];
    const aux = [...nums];

    const quickSort = (arr: number[], lo: number, hi: number) => {
      if (lo >= hi)
        return;

      let pi: number = partition(arr, lo, hi);
      quickSort(arr, lo, pi - 1);
      quickSort(arr, pi + 1, hi);
    };

    const partition = (arr: number[], lo: number, hi: number) : number  => {
      let pivot = arr[hi];
      
      let index = lo - 1;
      for (let j = lo; j < hi; j++) {
        steps.push({
            index: [hi, j],
            action: 'compare'
        });
        if (arr[j] < pivot) {
            index++;
            steps.push({
                index: [index, j],
                action: 'swap'
            });
            [arr[index], arr[j]] = [arr[j], arr[index]];
        }
      }

      steps.push({
        index: [index + 1, hi],
        action: 'swap'
      });
      [arr[index + 1], arr[hi]] = [arr[hi], arr[index + 1]];

      return index + 1;
    };

    quickSort(aux, 0, nums.length - 1);

    steps.push({
      action: 'done'
    });

    console.log("Steps: ", steps);
    
    return { steps };
}