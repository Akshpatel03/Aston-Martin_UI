namespace AstonMartin.Service.Models;

public class SalesforceTokenResponse
{
    public string access_token { get; set; } = null!;
    public string signature { get; set; } = null!;
    public string instance_url { get; set; } = null!;
}
