using System.ComponentModel.DataAnnotations;

namespace EVA.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string Position { get; set; }
        public double MonthlySalary { get; set; }
        public string JobDescription { get; set; }
        public string Department { get; set; }
        public bool SoftDeleted { get; set; }
        public DateTime Created { get; set; }


       public int ProjectId { get; set; }
   

    }
}
