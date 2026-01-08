import { mergeSortWithSteps } from "../Helpers/algorithms/MergeSortLogic";
import { bubbleSortWithSteps } from "../Helpers/algorithms/BubbleSortLogic";
import { insertionSortWithSteps } from "../Helpers/algorithms/InsertionSort";
import { selectionSortWithSteps } from "../Helpers/algorithms/SelectionSortLogic";
import { quickSortWithSteps } from "../Helpers/algorithms/QuickSortLogic";

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
    }, 
    {
      name: 'Quick Sort',
      sorter: quickSortWithSteps
    }
  ],
}
