export class Asset {
  constructor(
    name,
    cost,
    quantity,
    id = Math.random(1000),
    assetType = "fixed",
    description = "-"
  ) {
    this.name = name;
    this.quantity = parseFloat(quantity);
    this.cost = cost;
    this.totalCost = parseFloat(cost) * this.quantity;
    this.assetType = assetType;
    this.description = description;
    this.id = id;
  }
}
export class Assets {
  constructor(...assets) {
    this.items = assets;
    this.fixedAssets = this.items.filter(
      (asset) => asset.assetType === "fixed"
    );
    this.liqAssets = this.items.filter((asset) => asset.assetType === "liquid");
    this.fixedAssetsTotalAmount = this.fixedAssets.reduce(
      (a, b) => a + b.totalCost,
      0
    );
    this.liqdAssetsTotalAmount = this.liqAssets.reduce(
      (a, b) => a + b.totalCost,
      0
    );
    this.assetsTotalAmount = this.items.reduce((a, b) => a + b.totalCost, 0);
  }
}
