namespace EVA.DTOs
{
    public class ProductReadDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Cost { get; set; }
        public double Price { get; set; }
        public double TaxPercent { get; set; }
        public double MonthlyUnitsSaleProjection { get; set; }
        public double TaxAmount
        { get{ return Price * (TaxPercent / 100);} set {TaxAmount = Price * (TaxPercent / 100);}}
        public double PricePlusTax
        { get { return Price + TaxAmount; } set {PricePlusTax = Price + TaxAmount;}}
        public double GrossMargin
        { get { return PricePlusTax - Cost - TaxAmount; } set { GrossMargin = PricePlusTax - Cost - TaxAmount; } }
        public double GrossMarginPercent
        { get { return (GrossMargin / PricePlusTax) * 100; } set { GrossMarginPercent = (GrossMargin / PricePlusTax) * 100; } }

        //monthly sales metrics
        public double Sales
        { get { return Price * MonthlyUnitsSaleProjection; } set { Sales = Price * MonthlyUnitsSaleProjection; } }
        public double SalesPlusTax
        { get { return PricePlusTax * MonthlyUnitsSaleProjection; } set { SalesPlusTax = PricePlusTax * MonthlyUnitsSaleProjection; } }
        public double SalesCost
        { get { return Cost * MonthlyUnitsSaleProjection; } set { SalesCost = Cost * MonthlyUnitsSaleProjection; } }
        public double TotalSalesTax
        { get { return TaxAmount * MonthlyUnitsSaleProjection; } set { TotalSalesTax = TaxAmount * MonthlyUnitsSaleProjection; } }
        public double SalesGrossMargin
        { get { return SalesPlusTax - SalesCost; } set { SalesGrossMargin = SalesPlusTax - SalesCost; } }

        //yearly sales metrics
        public double YearlyUnitsSale
        { get { return MonthlyUnitsSaleProjection * 12; } set { YearlyUnitsSale = MonthlyUnitsSaleProjection * 12; } }
        public double YearlySale
        { get { return SalesPlusTax * 12; } set { YearlySale = SalesPlusTax * 12; } }

        public bool SoftDeleted { get; set; }
        public DateTime Created { get; set; }

    }
}
