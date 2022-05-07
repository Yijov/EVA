namespace EVA.DTOs
{
    public class ExpenseReadDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Amount { get; set; }
        public bool SoftDeleted { get; set; }
        public DateTime Created { get; set; }

        public int ProjectId { get; set; }
    }
}
