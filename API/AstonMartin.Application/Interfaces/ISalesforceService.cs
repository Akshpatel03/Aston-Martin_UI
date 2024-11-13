namespace AstonMartin.Application.Interfaces;

public interface ISalesforceService
{
    Task<string> QuerySalesforceDataAsync(string query);
}
