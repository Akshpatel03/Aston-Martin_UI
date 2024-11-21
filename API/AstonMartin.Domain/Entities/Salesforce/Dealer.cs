namespace AstonMartin.Domain.Entities.Salesforce;

public class Dealer : BaseEntity
{
    public string? IntegrationKey { get; set; }
    public string? Code { get; set; }
    public string? MakeId { get; set; }
    public string? MakeName { get; set; }
    public string? Phone { get; set; }
    public string? Street { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    public string? PostalCode { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    public bool IsVirtual { get; set; }
    public bool IsServiceOnly { get; set; }
    public string? CodeweaversDealerKey { get; set; }
    public List<Department>? Departments { get; set; }
    public List<SocialMediaAccount>? SocialMediaAccounts { get; set; }
    public string ECommercePath { get; set; } = null!;
}

public class DealerBaseResponse
{
    public List<string>? Messages { get; set; }
    public bool Success { get; set; }
    public IEnumerable<Dealer> Dealers { get; set; } = null!;
}
