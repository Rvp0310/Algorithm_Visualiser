import React from 'react'
import LegendItem from '../LegendItem';
import Sort from '../AlgoVisualizer/Sort';
import { SortSpaceProps } from "../../Helpers/Types"

const SortSpace = ({arr, done, playing, activeBars, swapBars, overwriteIndex, onStart}: SortSpaceProps) => {
    return (
    <div className="sortSpace">
            <div style={{ height: "60px" }}>
              {!playing && !done ? (
                <button
                  type="button"
                  className="btn btn-info start"
                  style={{ margin: "0 45%" }}
                  onClick={onStart}
                >
                  Start Sorting
                </button>
              ) : (
                <div className="legend">
                          <LegendItem color="#F2C94C" label="Comparing" />
                          <LegendItem color="#EB5757" label="Swapping" />
                          <LegendItem color="#27AE60" label="Overwriting" />
                          <LegendItem color="#9B51E0" label="Sorted" />
                </div>
              )}
            </div>
              < Sort
                arr={arr}
                done={done}
                activeBars={activeBars}
                swapBars={swapBars}
                overwriteIndex={overwriteIndex}
              />
        </div>
  )
}

export default SortSpace
