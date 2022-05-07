import React, { useEffect, useContext } from "react";
import { CurrentProjectContext } from "../context/CurrentProjectContext";
import RoiPanel from "../components/projectPageComponents/RoiPanel";
import EquilibriumPanel from "../components/projectPageComponents/EquilibriumPanel";
import MonthlyFlowPanel from "../components/projectPageComponents/YearlyFlowPanel";
import YearlyFlowPanel from "../components/projectPageComponents/MonthlyFlowPanel";
import FixedCostPanel from "../components/projectPageComponents/FixedCostPanel";
import AssetsPannel from "../components/projectPageComponents/AssetsPannel";
import UnitsEquilibriumPanel from "../components/projectPageComponents/UnitsEquilibriumPanel";
import ActionButtons from "../components/projectPageComponents/ActionButtons";

export default function Project() {
  const { updateState, currentProjectName } = useContext(CurrentProjectContext);

  useEffect(() => {
    updateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page">
      <h2 className="sectionName">
        {currentProjectName.toUpperCase()} - PROJECT OVERVIEW
        <ActionButtons />
      </h2>

      <div className="projectPanels">
        <div className="metrics">
          <RoiPanel />
          <EquilibriumPanel />
          <MonthlyFlowPanel />
          <YearlyFlowPanel />
        </div>
        <FixedCostPanel />
        <AssetsPannel />
        <UnitsEquilibriumPanel />
      </div>
    </div>
  );
}
