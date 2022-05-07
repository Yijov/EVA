using EVA.Models;

namespace EVA.DTOs
{
    public class ProjectReadDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Industry { get; set; }

        public IEnumerable<ProductReadDTO> Products { get; set; }

        public IEnumerable<ExpenseReadDTO> Expenses { get; set; }

        public IEnumerable<EmployeeReadDTO> Employees { get; set; }

        public IEnumerable<AssetReadDTO> Assets { get; set; }

        public double MonthlySalesUnits
        { get { return Products.Aggregate(0.00, (a, b) => a + b.MonthlyUnitsSaleProjection); } set { MonthlySalesUnits = Products.Aggregate(0.00, (a, b) => a + b.MonthlyUnitsSaleProjection); } }
       
        public double MonthySales
        { get { return Products.Aggregate(0.00, (a, b) => a + b.SalesPlusTax); } set { MonthySales = Products.Aggregate(0.00, (a, b) => a + b.SalesPlusTax); } }
        
        public double MonthlySaleTax
        { get { return Products.Aggregate(0.00, (a, b) => a + b.TotalSalesTax); } set { MonthlySaleTax = Products.Aggregate(0.00, (a, b) => a + b.TotalSalesTax); } }
        
        public double MonthlySalesCost
        { get { return Products.Aggregate(0.00, (a, b) => a + b.SalesCost); } set { MonthlySalesCost = Products.Aggregate(0.00, (a, b) => a + b.SalesCost); } }
        
        public IEnumerable<ProductMonthlyMetricDTO>  ProductsMonthlyMetrics
        { get { return Products.Select(p => new ProductMonthlyMetricDTO(p, MonthlySalesUnits)); } set { ProductsMonthlyMetrics = Products.Select(p => new ProductMonthlyMetricDTO(p, MonthlySalesUnits)); } }
        
        public double TotalPondarateMargin
        { get { return ProductsMonthlyMetrics.Aggregate(0.00, (a, b) => a + b.PonderateMargin); } set { TotalPondarateMargin = ProductsMonthlyMetrics.Aggregate(0.00, (a, b) => a + b.PonderateMargin); } }

        public double MonthlyExpense
        { get { return Expenses.Aggregate(0.00, (a, b) => a + b.Amount); } set { MonthlyExpense = Expenses.Aggregate(0.00, (a, b) => a + b.Amount); } }

        public double YearlylyExpense
        { get { return MonthlyExpense * 12 ; } set { YearlylyExpense = MonthlyExpense * 12; } }

        public double MonthlyPayroll
        { get { return Employees.Aggregate(0.00, (a, b) => a + b.MonthlySalary); } set { MonthlyPayroll = Employees.Aggregate(0.00, (a, b) => a + b.MonthlySalary); } }
        public double yearlyPayroll
        { get { return MonthlyPayroll *12; } set { yearlyPayroll = MonthlyPayroll *12; } }
        public double AssetsTotalAmount
        { get { return Assets.Aggregate(0.00, (a, b) => a + (b.Cost * b.Quantity)); } set { AssetsTotalAmount = Assets.Aggregate(0.00, (a, b) => a + (b.Cost * b.Quantity)); } }

        public DateTime Created { get; set; }
    }
}
