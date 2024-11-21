using AstonMartin.Domain.Entities.Salesforce;

namespace AstonMartin.Service.Interfaces;

public interface ISalesforceService
{
    Task<string> QuerySalesforceDataAsync(string query);
    Task<DealerBaseResponse> AllBranches();
}
