import { SortProps } from "@/app/Helpers/Types";

const MergeSort: React.FC<SortProps> = ({
  arr,
  done,
  activeBars,
  swapBars,
  overwriteIndex,
}) => {
  return (
    <div className="bars-wrapper">
      {arr.map((h, i) => (
        <div
          key={i}
          className="bars"
          style={{
            height: `${h}%`,
            width: "10%",
            backgroundColor: done
              ? "#9B51E0"
              : swapBars.includes(i)
              ? "#EB5757"
              : overwriteIndex === i
              ? "#27AE60"
              : activeBars.includes(i)
              ? "#F2C94C"
              : "#3E6DE0",
          }}
        ></div>
      ))}
    </div>
  );
};

export default MergeSort;
