import { mergeSortWithSteps } from "../Helpers/algorithms/Sort/MergeSortLogic";
import { bubbleSortWithSteps } from "../Helpers/algorithms/Sort/BubbleSortLogic";
import { insertionSortWithSteps } from "../Helpers/algorithms/Sort/InsertionSort";
import { selectionSortWithSteps } from "../Helpers/algorithms/Sort/SelectionSortLogic";
import { quickSortWithSteps } from "../Helpers/algorithms/Sort/QuickSortLogic";
import { bfsWithSteps } from "../Helpers/algorithms/Graph/BFSLogic";

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
    // {
    //   name: 'Dijkstra\'s Algorithm',
    //   // sorter: dijkstraWithSteps  
    // },
    // {
    //   name: 'A* Search',
    //   // sorter: aStarWithSteps
    // },
    {
      name: 'Breadth-First Search',
      sorter: bfsWithSteps
    },
    // {
    //   name: 'Depth-First Search',
    //   // sorter: dfsWithSteps
    // },
    // {
    //   name: 'Bellman-Ford Algorithm',
    //   // sorter: bellmanFordWithSteps
    // },
    // {
    //   name: 'Floyd-Warshall Algorithm',
    //   // sorter: floydWarshallWithSteps 
    // },
    // {
    //   name: 'Prim\'s Algorithm',
    //   // sorter: primWithSteps
    // },
    // {
    //   name: 'Kruskal\'s Algorithm',
    //   // sorter: kruskalWithSteps
    // },
  ],
}
