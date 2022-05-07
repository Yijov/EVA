import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import StackedBar from "./charts/StackedBar";

export default function MonthlyFlowPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);
  const { monthlyFlow } = currentProjecBody;

  return (
    <div className="dataBox monthlyFlowPanel">
      <h2>MONTHLY FLOW</h2>
      {monthlyFlow && (
        <StackedBar
          sales={monthlyFlow.sales.toFixed(2)}
          fixedExpenses={monthlyFlow.fixedExpenses.toFixed(2)}
          salesCost={monthlyFlow.salesCost.toFixed(2)}
          totalTax={monthlyFlow.totalTax.toFixed(2)}
          netIncome={monthlyFlow.netIncome.toFixed(2)}
        />
      )}
    </div>
  );
}
