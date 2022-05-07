export class Product {
  constructor(
    name,
    cost,
    price,
    taxPercent = 18,
    saleProjecton,
    id = Math.random(1000)
  ) {
    //unit metrics
    this.name = name;
    this.cost = parseFloat(cost);
    this.price = parseFloat(price);
    this.taxPercent = parseFloat(taxPercent);
    this.taxAmount = this.price * (taxPercent / 100);
    this.pricePlusTax = this.price + this.taxAmount;
    this.bruteMargin = this.pricePlusTax - this.cost - this.taxAmount;
    this.bruteMarginPercent = (this.bruteMargin / this.pricePlusTax) * 100;
    this.id = id;
    //monthly sales metrics
    this.saleProjecton = parseFloat(saleProjecton); // unidedes que se venderían mensualmente
    this.sales = this.price * this.saleProjecton;
    this.salesPlusTax = this.pricePlusTax * this.saleProjecton;
    this.salesCost = this.cost * this.saleProjecton;
    this.totalSalesTax = this.taxAmount * this.saleProjecton;
    this.salesBruteMargin = this.salesPlusTax - this.salesCost;
    //yearly sales metrics
    this.yearlyUnitsSale = this.saleProjecton * 12;
    this.yearlySale = this.salesPlusTax * 12;
  }
}

export class Products {
  constructor(...products) {
    this.products = products;
    this.totalProjectionUnits = this.products.reduce(
      (a, b) => a + b.saleProjecton,
      0
    ); //soma toal de unodases que que se venderan de todos los productos
    this.totalSales = this.products.reduce((a, b) => a + b.salesPlusTax, 0);
    this.totalSalesCost = this.products.reduce((a, b) => a + b.salesCost, 0);
    this.totalTax = this.products.reduce((a, b) => a + b.totalSalesTax, 0);
    this.prodsMetrics = this.products.map((product) => {
      return {
        producto: product.name,
        participacion:
          (product.saleProjecton / this.totalProjectionUnits) * 100,
        ponderateMargin:
          (product.saleProjecton / this.totalProjectionUnits) *
          product.bruteMargin,
        salePrice: product.pricePlusTax,
        bruteMarginPerc: product.bruteMarginPercent,
        bruteMargin: product.bruteMargin,
        cost: product.cost,
      };
    });
    this.totalPondarateMargin = this.prodsMetrics.reduce(
      (a, b) => a + b.ponderateMargin,
      0
    );
  }
}
