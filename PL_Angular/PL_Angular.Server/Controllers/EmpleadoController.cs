using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {

        private readonly BL.Empleado _empleado;
        public EmpleadoController(BL.Empleado empleado) => _empleado = empleado;



        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll([FromBody] ML.Empleado empleado) {

            var result = _empleado.GetAll(empleado);
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
