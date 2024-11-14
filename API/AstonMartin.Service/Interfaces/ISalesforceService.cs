namespace AstonMartin.Service.Interfaces;

public interface ISalesforceService
{
    Task<string> QuerySalesforceDataAsync(string query);
}
