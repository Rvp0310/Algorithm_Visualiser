import { mergeSortWithSteps } from "../Helpers/algorithms/Sort/MergeSortLogic";
import { bubbleSortWithSteps } from "../Helpers/algorithms/Sort/BubbleSortLogic";
import { insertionSortWithSteps } from "../Helpers/algorithms/Sort/InsertionSort";
import { selectionSortWithSteps } from "../Helpers/algorithms/Sort/SelectionSortLogic";
import { quickSortWithSteps } from "../Helpers/algorithms/Sort/QuickSortLogic";
import { bfsWithSteps } from "../Helpers/algorithms/Graph/BFSLogic";
import { dfsWithSteps } from "../Helpers/algorithms/Graph/DFSLogic";

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
  ], Graph: [
    {
      name: 'Breadth-First Search',
      graphAlgo: bfsWithSteps
    },
    {
      name: 'Depth-First Search',
      graphAlgo: dfsWithSteps
    },
  ],
}
