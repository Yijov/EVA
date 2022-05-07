using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EVA.Models;
using EVA.DTOs;
using EVA.Mapper;
using EVA.Repository.ProjectRepo;
using AutoMapper;

namespace EVA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : Controller
    {
        private readonly IProjectRepository _repo;
        private readonly IMapper _mapper;
        public ProjectController(IProjectRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            var lista = _repo.GetProjects();

            var response = new List<ProjectReadDTO>();
            
                foreach (var element in lista)
                {
                    response.Add(_mapper.Map<ProjectReadDTO>(element));
                }

            return Ok(response);
        }


        [HttpGet("{projectId:int}", Name = "GetProject")]
        public IActionResult GetProject(int projectId)
        {
            bool exists = _repo.Exist(projectId);

            if (exists)
            {
               var result = _repo.GetProject(projectId);
               var response= _mapper.Map<ProjectReadDTO>(result);
                return Ok(result);

            }
            else
            {
                return NotFound();
            }
           
        }

        [HttpPost]
        public IActionResult CreateProject([FromBody] ProjectCreateDTO receivedDTO)
        {
            if (receivedDTO==null)
            {
                return BadRequest(ModelState);
            }



            var NewProject= _mapper.Map< Project > (receivedDTO);



            if (_repo.CreateProject(NewProject))
            {
                var response = _repo.GetProject(receivedDTO.Name);
                return Ok(response);
            }
            else
            {
                ModelState.AddModelError("","something went wrong. Please try again later");

                return StatusCode(404, ModelState);
            }
            
        }

        [HttpPatch("{projectId:int}", Name = "UpdateProject")]
        public IActionResult UpdateProject(int projectId, [FromBody] Project receivedDTO)
        {
            if (receivedDTO == null)
            {
                return BadRequest(ModelState);
            }


            if (_repo.UpdateProject(receivedDTO))
            {
                
                return NoContent();
            }
            else
            {
                ModelState.AddModelError("", "something went wrong. Please try again later");

                return StatusCode(500, ModelState);
            }
        }
        [HttpDelete("{projectId:int}", Name = "DeleteProject")]
        public IActionResult DeleteProject(int projectId)
        {
            if (_repo.Exist(projectId))
            {
                var ProjectToBeRemoved = _repo.GetProject(projectId);
                _repo.DeleteProject(ProjectToBeRemoved);
                return Ok();

            }
            else
            {
                ModelState.AddModelError("", "something went wrong. Please try again later");

                return StatusCode(500, ModelState);
            }
            
            
        }


    }
}
