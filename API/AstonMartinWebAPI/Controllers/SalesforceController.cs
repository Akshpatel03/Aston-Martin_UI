using AstonMartin.Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartinWebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SalesforceController : ControllerBase
{
    private readonly ISalesforceService _salesforceService;

    public SalesforceController(ISalesforceService salesforceService)
    {
        _salesforceService = salesforceService;
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll()
    {
        var records = await _salesforceService.QuerySalesforceDataAsync("SELECT Id, Name FROM TestObject__c");
        return Ok(records);
    }
}
