using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentalApplication.Models;
using RentalApplication.Models.Interfaces;

namespace RentalApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/Owners")]
    public class OwnersController : Controller
    {
        private readonly IOwnerRepository _ownerRepository;

        public OwnersController(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _ownerRepository.AddOwner(owner);
            return new JsonResult(owner.OwnerId);
        }



        [HttpGet("[action]")]
        public IActionResult GetOwners()
        {
            return new JsonResult(_ownerRepository.GetAll());
        }

        [HttpPost("[action]")]
        public IActionResult UpdateOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _ownerRepository.UpdateOwner(owner);
            return new JsonResult(owner.OwnerId);
        }

        [HttpGet("[action]")]
        public IActionResult GetOwner(int ownerId)
        {
            if (ownerId <= 0)
            {
                return BadRequest("Incorrect owner id.");
            }

            return new JsonResult(_ownerRepository.GetOwner(ownerId));
        }
    }
}