import MergeSort from "../components/Sorting/MergeSort";
import BubbleSort from "../components/Sorting/BubbleSort";
import { mergeSortWithSteps } from "../Helpers/algorithms/MergeSortLogic";
import { bubbleSortWithSteps } from "../Helpers/algorithms/BubbleSortLogic";
import { SortProps } from "../Helpers/Types";

export const algorithms = {
  Sorting: [
    {
      name: 'Merge Sort',
      component: MergeSort,
      sorter: mergeSortWithSteps
    },
    {
      name: 'Bubble Sort',
      component: BubbleSort,
      sorter: bubbleSortWithSteps
    }
  ],
}
