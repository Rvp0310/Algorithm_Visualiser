import { SortingAction } from "../../Types";

export const mergeSortWithSteps = (nums: number[]): {steps: SortingAction[]}  => {
    const steps: SortingAction[] = [];
    const aux = [...nums];

    const mergeSort = (lo: number, hi: number) => {
      if (lo >= hi)
        return;

      const mid = Math.floor((lo + hi) / 2);

      mergeSort(lo, mid);
      mergeSort(mid + 1, hi);
      
      merge(lo, hi, mid);
    };

    const merge = (lo: number, hi: number, mid:  number) => {
      let i = lo, j = mid + 1, k = lo;
      while(i <= mid && j <= hi){
        //Comparison
        steps.push({
          index: [i,j],
          action: "compare"
        })

        if(aux[i] <= aux[j]){
          // Overwrite k <- i
          steps.push({
            index: k,
            action: "overwrite",
            newVal: aux[i]
          })
          nums[k++] = aux[i++];
        } else {
          // Overwrite k <- j
          steps.push({
            index: k,
            action: "overwrite",
            newVal: aux[j]
          })
          nums[k++] = aux[j++];
        }
      }

      while (i <= mid) {
        steps.push({
          index: k,
          action: "overwrite",
          newVal: aux[i],
        });
        nums[k++] = aux[i++];
      }

      while (j <= hi) {
        steps.push({
          index: k,
          action: "overwrite",
          newVal: aux[j],
        });
        nums[k++] = aux[j++];
      }

      for (let x = lo; x <= hi; x++) 
        aux[x] = nums[x];
    };

    mergeSort(0, nums.length - 1);

    steps.push({
      action: 'done'
    });
    
    return { steps };
}