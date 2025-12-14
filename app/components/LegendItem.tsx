import React from 'react'

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px", margin: "0 10px" }}>
    <div
      style={{
        width: "14px",
        height: "14px",
        backgroundColor: color,
        borderWidth: "1.5px",
        borderRadius: "3px",
      }}
    />
    <span>{label}</span>
  </div>
);


export default LegendItem