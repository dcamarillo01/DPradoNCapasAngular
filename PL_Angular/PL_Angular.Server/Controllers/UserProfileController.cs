using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PL_Angular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {

        private readonly BL.UserProfile _userProfile;

        public UserProfileController(BL.UserProfile userProfile) => _userProfile = userProfile;


        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll() {

            var result = _userProfile.GetAll();
            if (result.Correct)
            {
                return Ok(result);
            }
            else { 
                return BadRequest(result);
            }

        }

        [HttpGet]
        [Route("GetById/{IdEmpleado}")]
        public IActionResult GetById(int IdEmpleado) {

            var result = _userProfile.GetById(IdEmpleado);
            if (result.Correct)
            {
                return Ok(result);
            }
            else {
                return BadRequest(result);
            }
        }

        [HttpGet]
        [Route("Deactivate/{IdUserProfile}/{Status}")]
        public IActionResult Deactivate(int IdUserProfile, bool Status) {

            var result = _userProfile.ChangeStatus(IdUserProfile, Status);
            if (result.Correct)
            {
                return Ok(result);
            }
            else { 
                return BadRequest(result);
            }
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody] ML.UserProfile userProfile) 
        {
            var result = _userProfile.Add(userProfile);
            if (result.Correct)
            {
                return Ok(result);
            }
            else {
                return BadRequest(result);
            }

        }

        [HttpPut]
        [Route("Update/{IdUserProfile}")]
        public IActionResult Update(int IdUserProfile, [FromBody] ML.UserProfile userProfile) {

            var result = _userProfile.Update(IdUserProfile, userProfile);
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
