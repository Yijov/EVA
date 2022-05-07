using EVA.Models;

namespace EVA.DTOs
{
    public class ProjectCreateDTO
    {
        public string Name { get; set; }

        public string Industry { get; set; }

        public IEnumerable<Product> Products { get; set; }

        public IEnumerable<Expense> Expenses { get; set; }

        public IEnumerable<Employee> Employees { get; set; }

        public IEnumerable<Asset> Assets { get; set; }

    }
}
