import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

export default function UnitsEquilibriumPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);

  const { equilibrium } = currentProjecBody;

  return (
    <div className="dataBox unitsEquilibriumPanel">
      <h2>MONTHLY EQUILIBRIUM BY PRODUCT</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Brute Margin</th>
            <th>% Margin</th>
            <th>Participation</th>
            <th>EQ-Units</th>
            <th>EQ-Sales</th>
          </tr>
        </thead>
        <tbody>
          {equilibrium &&
            equilibrium.unitEquilibrium.map((product) => (
              <ProductEqulibriumRow
                productObject={product}
                key={product.product}
              />
            ))}
        </tbody>
      </table>
      <br />
      {equilibrium && (
        <p> Total units to sale: {equilibrium.EquilibriumInUnits.toFixed(1)}</p>
      )}
    </div>
  );
}

function ProductEqulibriumRow({ productObject }) {
  const {
    product,
    price,
    Equ,
    eqAmount,
    participation,
    bMPercent,
    bMargen,
    cost,
  } = productObject;
  return (
    <tr>
      <td>{product}</td>
      <td>${cost.toFixed(2)}</td>
      <td>${price.toFixed(2)}</td>
      <td>${bMargen.toFixed(2)}</td>
      <td>{bMPercent.toFixed(2)}%</td>
      <td>{participation.toFixed(2)}%</td>
      <td>${Equ.toFixed(2)}</td>
      <td>${eqAmount.toFixed(2)}</td>
    </tr>
  );
}
