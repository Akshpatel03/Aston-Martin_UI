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
        string records = await _salesforceService.QuerySalesforceDataAsync("SELECT Id, Name, Name__c, Car_Model__r.Car_Model_Name__c, Car_Model__r.Id, Meeting_Time__c, Mobile__c FROM CustService__c");
        return GetResult(records);
    }

    [HttpGet("AllBranches")]
    public async Task<IActionResult> AllBranches()
    {
        return GetResult(await _salesforceService.AllBranches());
    }
}
