import React, { useState } from "react";
import { Product } from "../../../clases/ProductClass";

export default function ProductFrom({
  updateProductList,
  Toggle,
  defaultState,
}) {
  const [product, setProduct] = useState(defaultState);

  const hadleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    setProduct((prevState) => ({ ...prevState, ...newValue }));
  };

  const hadleUpdateProductList = (e) => {
    e.preventDefault();
    let newProduct = new Product(
      product.name,
      product.cost,
      product.price,
      product.taxPercent,
      product.saleProjecton,
      product.id
    );
    updateProductList(newProduct);
    //update de default values of the form in case is an update
    if (product.id) {
      defaultState = newProduct;
    }

    setProduct(defaultState);
    Toggle();
  };
  return (
    <div>
      <form onSubmit={hadleUpdateProductList}>
        <div className="formImput">
          <label htmlFor="name">Product</label>
          <input
            value={product.name}
            onChange={hadleChange}
            type="text"
            name="name"
            placeholder="Product name"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            name="cost"
            onChange={hadleChange}
            value={product.cost}
            placeholder="Unit cost"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="price">Price</label>
          <input
            onChange={hadleChange}
            type="number"
            name="price"
            value={product.price}
            placeholder="Unit price"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="saleProjecton">Projection</label>
          <input
            value={product.saleProjecton}
            onChange={hadleChange}
            type="number"
            name="saleProjecton"
            placeholder="Units to sale monthly"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="taxPercent">TAX%</label>
          <input
            value={product.taxPercent}
            onChange={hadleChange}
            type="number"
            name="taxPercent"
            placeholder="Tax percent"
            required
          ></input>
        </div>
        <div className="formImput">
          <button>DONE</button>
        </div>
      </form>
    </div>
  );
}
