import React from "react";
import ProductsList from "./ProductsList";
import AssetsLis from "./AssetsLis";
import ExpenseList from "./ExpenseList";
import PayrollList from "./PayrollList";
import ActionButtons from "./ActionButtons";
export default function ListsContainer() {
  return (
    <div className={"listContainer"}>
      <ProductsList />
      <AssetsLis />
      <ExpenseList />
      <PayrollList />
      <ActionButtons />
    </div>
  );
}
