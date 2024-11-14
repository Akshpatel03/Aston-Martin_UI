using System.Net;
using AstonMartin.API.Common;
using AstonMartin.Domain;
using AstonMartin.Service.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BaseController : ControllerBase
{
    protected IActionResult GetResult<T>(T? _dto, string _message = Constants.HttpStatusMessageSuccess, HttpStatusCode _statusCode = HttpStatusCode.OK) where T : class
    {
        ApiResult<T> result = new()
        {
            Item = _dto,
            Code = _statusCode.GetValue(),
            Message = _message
        };
        return StatusCode(result.Code, result);
    }
}
