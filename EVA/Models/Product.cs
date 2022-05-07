using System.ComponentModel.DataAnnotations;

namespace EVA.Models
{
    public class Product
    {

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double Cost { get; set; }
        public double Price { get; set; }
        public double TaxPercent { get; set; }
        public double MonthlyUnitsSaleProjection { get; set; }
        public bool SoftDeleted { get; set; }
        public DateTime Created { get; set; }

        public int ProjectId { get; set; }

    }
}
