using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermisoController : ControllerBase
    {

        private readonly BL.Permiso _permiso;
        public PermisoController(BL.Permiso permiso) => _permiso = permiso;


        [HttpPost]
        public IActionResult SolicitarPermiso(ML.Permiso permiso) {

            var result = _permiso.Add(permiso);
            if (result.Correct)
            {
                return Ok(result);
            }
            else { 
                return BadRequest(result);
            }
        
        }


        [HttpGet]
        public IActionResult GetAll() { 
        
            var result = _permiso.GetAll();
            if (result.Correct)
            {
                return Ok(result);
            }
            else {
                return BadRequest(result);
            }
        }


    }
}
