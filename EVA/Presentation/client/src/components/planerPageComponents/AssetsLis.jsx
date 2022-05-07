import React, { useEffect, useContext } from "react";
import FormsModal from "./FormsModal";
import AssetForm from "./Forms/AssetForm";
import UpdateModal from "./UpdateModal";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

export default function AssetsLis() {
  const { currentProjectAssets, setCurrentProjectAssets } = useContext(
    CurrentProjectContext
  );

  const addAsset = (asset) => {
    let newAssets = JSON.parse(localStorage.getItem("currentProjectAssets"));
    newAssets.push(asset);
    localStorage.setItem("currentProjectAssets", JSON.stringify(newAssets));
    setCurrentProjectAssets(
      JSON.parse(localStorage.getItem("currentProjectAssets"))
    );
  };
  const UpdateAsset = (asset) => {
    let newAssets = JSON.parse(localStorage.getItem("currentProjectAssets"));
    newAssets = newAssets.filter((ast) => ast.id !== asset.id);
    newAssets.push(asset);
    localStorage.setItem("currentProjectAssets", JSON.stringify(newAssets));
    setCurrentProjectAssets(
      JSON.parse(localStorage.getItem("currentProjectAssets"))
    );
  };

  const deleteAsset = (asset) => {
    if (window.confirm("¿Are you shure you want to delete this item?")) {
      let newAssets = JSON.parse(localStorage.getItem("currentProjectAssets"));
      newAssets = newAssets.filter((ast) => ast.id !== asset.id);
      localStorage.setItem("currentProjectAssets", JSON.stringify(newAssets));
      setCurrentProjectAssets(
        JSON.parse(localStorage.getItem("currentProjectAssets"))
      );
      window.alert("Item Deleted");
    }
  };

  useEffect(() => {
    setCurrentProjectAssets(
      JSON.parse(localStorage.getItem("currentProjectAssets"))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"FormList"}>
      <br />

      <FormsModal>
        <AssetForm
          updateAssetList={addAsset}
          defaultState={{ name: "", cost: "", quantity: "" }}
        />
      </FormsModal>

      <br />
      <h2>Assets</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Quantity</th>
            <th>Investment</th>
          </tr>
        </thead>
        <tbody>
          {currentProjectAssets.map((asset) => (
            <UpdateModal
              item={asset}
              key={asset.id}
              deleteAction={deleteAsset}
              row={<AssetRow asset={asset} />}
            >
              <AssetForm updateAssetList={UpdateAsset} defaultState={asset} />
            </UpdateModal>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function AssetRow({ asset }) {
  return (
    <>
      <td>{asset.name}</td>
      <td>{asset.quantity} U</td>
      <td>${asset.totalCost.toFixed(2)}</td>
    </>
  );
}
