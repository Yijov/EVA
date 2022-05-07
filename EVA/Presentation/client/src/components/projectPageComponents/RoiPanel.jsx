import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

export default function RoiPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);
  const { roi } = currentProjecBody;

  return (
    <div className="dataBox roiPanel">
      <h2>ROI TIME</h2>
      <br />
      {roi && <p>{currentProjecBody.roi.roiTime}</p>}
    </div>
  );
}
