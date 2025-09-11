using DL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DireccionController : ControllerBase
    {

        private readonly BL.Estado _estado;
        private readonly BL.Municipio _municipio;
        private readonly BL.Colonia _colonia;

        public DireccionController(BL.Estado estado, BL.Municipio municipio, BL.Colonia colonia) { 
            
            _estado = estado;
            _municipio = municipio;
            _colonia = colonia;
        }



        [HttpGet]
        [Route("Estados")]
        public IActionResult GetEstados() {


            ML.Result result = _estado.GetAll();

            if (result.Correct) { 
                
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }

        }

        [HttpGet]
        [Route("Municipios/{IdEstado}")]
        public IActionResult GetMunicipios(int IdEstado) { 
            
            ML.Result result = _municipio.GetMunicipioByIdEstado(IdEstado);
            if (result.Correct)
            {

                return Ok(result);
            }
            else { 
                return BadRequest(result);
            }
        }

        [HttpGet]
        [Route("Colonias/{IdMunicipio}")]
        public IActionResult GetColonias(int IdMunicipio) {

            ML.Result result = _colonia.GetColoniaByIdMunicipio(IdMunicipio);

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
