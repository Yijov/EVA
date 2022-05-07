import React, { useState } from "react";
import { Asset } from "../../../clases/AssetClass";

export default function AssetForm({ updateAssetList, Toggle, defaultState }) {
  const [asset, setAsset] = useState(defaultState);

  const hadleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    setAsset((prevState) => ({ ...prevState, ...newValue }));
  };

  const hadleUpdateAssetList = (e) => {
    e.preventDefault();
    let newAsset = new Asset(asset.name, asset.cost, asset.quantity, asset.id);
    updateAssetList(newAsset);
    //update de default values of the form
    if (asset.id) {
      defaultState = newAsset;
    }
    setAsset(defaultState);
    Toggle();
  };
  return (
    <div>
      <form onSubmit={hadleUpdateAssetList}>
        <div className="formImput">
          <label htmlFor="name">Asset</label>
          <input
            value={asset.name}
            onChange={hadleChange}
            type="text"
            name="name"
            placeholder="Asset name"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="quantity">Quantity</label>
          <input
            value={asset.quantity}
            onChange={hadleChange}
            type="number"
            placeholder="Quantity to buy"
            name="quantity"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="cost">Unit Investment</label>
          <input
            value={asset.cost}
            onChange={hadleChange}
            type="number"
            name="cost"
            placeholder="Asset cost"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <button>DONE</button>
        </div>
      </form>
    </div>
  );
}
