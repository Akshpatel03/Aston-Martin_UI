using AstonMartin.Application.Interfaces;
using AstonMartin.Infrastructure.Salesforce;

namespace AstonMartin.Application.Services;

public class SalesforceService : ISalesforceService
{
    private readonly ISalesforceApiService _salesforceApiService;

    public SalesforceService(ISalesforceApiService salesforceApiService)
    {
        _salesforceApiService = salesforceApiService;
    }

    public async Task<string> QuerySalesforceDataAsync(string query)
    {
        return await _salesforceApiService.QuerySalesforceDataAsync(query);
    }
}
