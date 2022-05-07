using EVA.Models;
using Microsoft.EntityFrameworkCore;

namespace EVA.Data
{
    public class ApplicationDBContext: DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options):base(options)
        {

        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<Employee> Employees { get; set; }

        //filter softdeleted items out of queryes
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasQueryFilter(p => !p.SoftDeleted);
            modelBuilder.Entity<Asset>().HasQueryFilter(p => !p.SoftDeleted);
            modelBuilder.Entity<Expense>().HasQueryFilter(p => !p.SoftDeleted);
            modelBuilder.Entity<Employee>().HasQueryFilter(p => !p.SoftDeleted);
        }
    }
}
