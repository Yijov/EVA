import React, { useContext } from "react";
import { CurrentProjectContext } from "../context/CurrentProjectContext";
import ActionButtons from "../components/BudgetPageComponents/ActionButtons";
import BudgetCard from "../components/BudgetPageComponents/BudgetCard";

export default function BudgetPage() {
  const { currentProjectName, currentProjecBody } = useContext(
    CurrentProjectContext
  );
  return (
    <div>
      <div className="page">
        <h2 className="sectionName">
          BUDGET FOR {currentProjectName.toUpperCase()}
          <ActionButtons />
        </h2>
        {currentProjecBody.threeMonthBudget && (
          <div className="budgetContainer">
            <BudgetCard
              header="3 Months"
              budget={currentProjecBody.threeMonthBudget}
            />
            <BudgetCard
              header="6 Months"
              budget={currentProjecBody.sixMonthBudget}
            />
            <BudgetCard
              header="12 Months"
              budget={currentProjecBody.oneYearBudget}
            />
          </div>
        )}
      </div>
    </div>
  );
}
