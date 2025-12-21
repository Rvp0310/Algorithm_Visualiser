import { mergeSortWithSteps } from "../Helpers/algorithms/MergeSortLogic";
import { bubbleSortWithSteps } from "../Helpers/algorithms/BubbleSortLogic";
import { insertionSortWithSteps } from "../Helpers/algorithms/InsertionSort";
import { selectionSortWithSteps } from "../Helpers/algorithms/SelectionSortLogic";

export const algorithms = {
  Sorting: [
    {
      name: 'Merge Sort',
      sorter: mergeSortWithSteps
    },
    {
      name: 'Bubble Sort',
      sorter: bubbleSortWithSteps
    },
    {
      name: 'Insertion Sort',
      sorter: insertionSortWithSteps
    },
    {
      name: 'Selection Sort',
      sorter: selectionSortWithSteps
    }
  ],
}
