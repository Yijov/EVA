using AutoMapper;
using EVA.DTOs;
using EVA.Models;

namespace EVA.Mapper
{
    public class ProjectMapper:Profile
    {
        public ProjectMapper()
        {
            CreateMap<Project, ProjectCreateDTO>().ReverseMap();
            CreateMap<Project, ProjectReadDTO>().ReverseMap();
            CreateMap<Product, ProductReadDTO>().ReverseMap();
            CreateMap<Expense, ExpenseReadDTO>().ReverseMap();
            CreateMap<Asset, AssetReadDTO>().ReverseMap();
            CreateMap<Employee, EmployeeReadDTO>().ReverseMap();
        }
    }
}
