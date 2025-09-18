using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermisoController : ControllerBase
    {

        private readonly BL.Permiso _permiso;
        private readonly BL.HistorialPermiso _permisoHistorial;
        public PermisoController(BL.Permiso permiso, BL.HistorialPermiso historialPermiso)
        {
            _permiso = permiso;
            _permisoHistorial = historialPermiso;
        }


        [HttpPost]
        [Route("SolicitarPermiso")]
        public IActionResult SolicitarPermiso([FromBody] ML.Permiso permiso) {

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
        [Route("GetAll")]
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

        [HttpPut]
        [Route("AprovarRechazar")]
        public IActionResult AprovarRechazar([FromBody]ML.HistorialPermiso historial) {

            var result = _permisoHistorial.AprobarRechazarSolicitud(historial);
            if (result.Correct)
            {

                return Ok(result);
            }
            else {
                return BadRequest(result);
            }
        
        }

        [HttpPost]
        [Route("Historial")]
        public IActionResult Historial([FromBody] ML.HistorialPermiso historialPermiso) {

            var result = _permisoHistorial.GetAll(historialPermiso);
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
