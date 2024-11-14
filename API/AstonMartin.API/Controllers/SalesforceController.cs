using AstonMartin.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SalesforceController : BaseController
{
    private readonly ISalesforceService _salesforceService;

    public SalesforceController(ISalesforceService salesforceService)
    {
        _salesforceService = salesforceService;
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll()
    {
        string records = await _salesforceService.QuerySalesforceDataAsync("SELECT Id, Name FROM TestObject__c");
        return GetResult(records);
    }
}
