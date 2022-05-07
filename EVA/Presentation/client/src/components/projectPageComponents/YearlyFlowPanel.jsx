import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import StackedBar from "./charts/StackedBar";

export default function YearlyFlowPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);
  const { yearlyFlow } = currentProjecBody;

  return (
    <div className="dataBox yearlyFlowPanel">
      <h2>YEARLY FLOW</h2>
      {yearlyFlow && (
        <StackedBar
          sales={yearlyFlow.sales.toFixed(2)}
          fixedExpenses={yearlyFlow.fixedExpenses.toFixed(2)}
          salesCost={yearlyFlow.salesCost.toFixed(2)}
          totalTax={yearlyFlow.totalTax.toFixed(2)}
          netIncome={yearlyFlow.netIncome.toFixed(2)}
        />
      )}
    </div>
  );
}
