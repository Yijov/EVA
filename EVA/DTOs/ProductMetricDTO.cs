using EVA.Models;

namespace EVA.DTOs
{
    public class ProductMonthlyMetricDTO
    {
        private ProductReadDTO _product;
        private double _ProjectMonthlyUnitsSaleProjection;
        public ProductMonthlyMetricDTO(ProductReadDTO product, double ProjectMonthlyUnitsSaleProjection )
        {
            _product = product;
            _ProjectMonthlyUnitsSaleProjection = ProjectMonthlyUnitsSaleProjection;

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public double Participation //Percentage of the busines this product has. 
        { get { return (_product.MonthlyUnitsSaleProjection / _ProjectMonthlyUnitsSaleProjection) * 100; } set { Participation = (_product.MonthlyUnitsSaleProjection / _ProjectMonthlyUnitsSaleProjection) * 100; } }
        public double PonderateMargin
        { get { return (_product.MonthlyUnitsSaleProjection / _ProjectMonthlyUnitsSaleProjection) * _product.GrossMargin ;} set { PonderateMargin = (_product.MonthlyUnitsSaleProjection / _ProjectMonthlyUnitsSaleProjection) * _product.GrossMargin; } }
        public double SalePrice
        { get { return _product.PricePlusTax; } set { SalePrice = _product.PricePlusTax; } }
        public double GrossMarginPercent
        { get { return _product.GrossMarginPercent; } set { GrossMarginPercent = _product.GrossMarginPercent; } }
        public double GrossMargin
        { get { return _product.GrossMargin; } set { GrossMargin = _product.GrossMargin; } }
        public double Cost
        { get { return _product.Cost; } set { Cost = _product.Cost; } }
    }
}
