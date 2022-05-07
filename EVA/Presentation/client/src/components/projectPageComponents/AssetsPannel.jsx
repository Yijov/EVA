import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import MultyCircle from "./charts/MultyCircle";
export default function AssetsPannel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);

  const { assets } = currentProjecBody;
  return (
    <div className="dataBox assetsPanel">
      <h2>ASSETS</h2>
      {assets && <MultyCircle assets={assets} />}
    </div>
  );
}
