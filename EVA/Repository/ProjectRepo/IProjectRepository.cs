using EVA.Models;

namespace EVA.Repository.ProjectRepo
{
    public interface IProjectRepository
    {
        bool CreateProject(Project project);
        ICollection<Project> GetProjects();
        Project GetProject(int projectId);
        Project GetProject(string name);
        bool UpdateProject(Project project);
        bool DeleteProject(Project project);
        bool Exist(int ProjectId);
        bool SaveProject();
    }
}
