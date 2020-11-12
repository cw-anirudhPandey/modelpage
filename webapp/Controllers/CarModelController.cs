using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using webapp.Model;

namespace webapp.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class CarModelController : ControllerBase
  {
    private readonly ILogger<CarModelController> _logger;

    public CarModelController(ILogger<CarModelController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public CarModel Get()
    {
      DataAccess data = new DataAccess();
      return data.getCarData();
    }
  }
}
