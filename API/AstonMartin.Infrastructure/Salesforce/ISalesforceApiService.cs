namespace AstonMartin.Infrastructure.Salesforce;

public interface ISalesforceApiService
{
    Task<string> QuerySalesforceDataAsync(string query);
}
