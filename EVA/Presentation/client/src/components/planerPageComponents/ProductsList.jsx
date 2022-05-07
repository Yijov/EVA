import React, { useEffect, useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import FormsModal from "./FormsModal";
import UpdateModal from "./UpdateModal";
import ProductFrom from "./Forms/ProductFrom";

export default function ProductsList() {
  const { currentProjectProducts, setCurrentProjectProducts } = useContext(
    CurrentProjectContext
  );

  const addProduct = (product) => {
    let newProducts = JSON.parse(
      localStorage.getItem("currentProjectProducts")
    );
    newProducts.push(product);
    localStorage.setItem("currentProjectProducts", JSON.stringify(newProducts));
    setCurrentProjectProducts(
      JSON.parse(localStorage.getItem("currentProjectProducts"))
    );
  };

  const updateProduct = (product) => {
    let newProducts = JSON.parse(
      localStorage.getItem("currentProjectProducts")
    );
    newProducts = newProducts.filter((prod) => prod.id !== product.id);
    newProducts.push(product);
    localStorage.setItem("currentProjectProducts", JSON.stringify(newProducts));
    setCurrentProjectProducts(
      JSON.parse(localStorage.getItem("currentProjectProducts"))
    );
  };
  const deleteProduct = (product) => {
    if (window.confirm("¿Are you shure you want to delete this item?")) {
      let newProducts = JSON.parse(
        localStorage.getItem("currentProjectProducts")
      );
      newProducts = newProducts.filter((prod) => prod.id !== product.id);
      localStorage.setItem(
        "currentProjectProducts",
        JSON.stringify(newProducts)
      );
      setCurrentProjectProducts(
        JSON.parse(localStorage.getItem("currentProjectProducts"))
      );
      window.alert("Item Deleted");
    }
  };

  useEffect(() => {
    setCurrentProjectProducts(
      JSON.parse(localStorage.getItem("currentProjectProducts"))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={"FormList"}>
      <br />
      <FormsModal>
        <ProductFrom
          updateProductList={addProduct}
          defaultState={{
            name: "",
            cost: "",
            price: "",
            taxPercent: "",
            saleProjecton: "",
          }}
        />
      </FormsModal>
      <br />
      <h2>Products</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total Price</th>
            <th>B. Margin</th>
          </tr>
        </thead>
        <tbody>
          {currentProjectProducts.map((product) => (
            <UpdateModal
              item={product}
              key={product.id}
              deleteAction={deleteProduct}
              row={<ProductRow product={product} />}
            >
              <ProductFrom
                updateProductList={updateProduct}
                defaultState={product}
              />
            </UpdateModal>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({ product }) {
  return (
    <>
      <td>{product.name}</td>
      <td>$ {product.pricePlusTax}</td>
      <td>$ {product.bruteMargin.toFixed(2)}</td>
    </>
  );
}
