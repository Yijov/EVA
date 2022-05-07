using System.ComponentModel.DataAnnotations;

namespace EVA.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Industry { get; set; }

        public IEnumerable<Product> Products { get; set; }

        public IEnumerable<Expense> Expenses { get; set; }

        public IEnumerable<Employee> Employees { get; set; }

        public IEnumerable<Asset> Assets { get; set; }

        public DateTime Created { get; set; }


    }
}
