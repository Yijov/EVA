using EVA.Data;
using EVA.Models;
using Microsoft.EntityFrameworkCore;

namespace EVA.Repository.ProjectRepo
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly ApplicationDBContext _DB;
        public ProjectRepository(ApplicationDBContext DB)
        {
            _DB = DB;
        }
        public bool CreateProject(Project project)
        {
            _DB.Projects.Add(project);
            return SaveProject();
        }

        public bool DeleteProject(Project project)
        {
            //remove child before deleting

            foreach(var asset in project.Assets)
            {
                _DB.Assets.Remove(asset);
            }

            foreach (var product in project.Products)
            {
                _DB.Products.Remove(product);
            }

            foreach (var employee in project.Employees)
            {
                _DB.Employees.Remove(employee);
            }

            foreach (var expense in project.Expenses)
            {
                _DB.Expenses.Remove(expense);
            }


            _DB.Projects.Remove(project);
            return SaveProject();
        }

        public bool Exist(int ProjectId)
        {
            var existentProject = _DB.Projects.Any(p => p.Id == ProjectId);
            return existentProject;
        }

        public Project GetProject(int projectId)
        {
            return _DB.Projects
                .Include(P => P.Products)
                .Include(p => p.Assets)
                .Include(p => p.Expenses)
                .Include(p => p.Employees)
                .FirstOrDefault(p => p.Id == projectId);
        }

        public Project GetProject(string name)
        {
            return _DB.Projects
                .Include(P => P.Products)
                .Include(p => p.Assets)
                .Include(p => p.Expenses)
                .Include(p => p.Employees)
                .FirstOrDefault(p => p.Name == name);
        }

        public ICollection<Project> GetProjects()
        {

           
             return _DB.Projects
                .Include(P => P.Products)
                .Include(p => p.Assets)
                .Include(p => p.Expenses)
                .Include(p => p.Employees)
                .OrderBy(p => p.Name).ToList();
        }

        public bool SaveProject()
        {
            return _DB.SaveChanges() >= 0 ? true : false;
        }

        public bool UpdateProject(Project project)
        {
            //update general project object
            _DB.Projects.Update(project);

            return SaveProject();
        }
    }
}
