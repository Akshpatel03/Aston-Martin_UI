namespace AstonMartin.Service.Clients.Interface;

public interface ISalesforceClientFactory
{
    Task<string> GetAccessTokenAsync();
}
