namespace AstonMartin.Service.Models;

public class SalesforceConfig
{
    public string ClientId { get; set; } = null!;
    public string ClientSecret { get; set; } = null!;
    public string APIVersion { get; set; } = null!;
    public string ApiBaseUrl { get; set; } = null!;
    public string SalesforceBaseUrl { get; set; } = null!;
}
