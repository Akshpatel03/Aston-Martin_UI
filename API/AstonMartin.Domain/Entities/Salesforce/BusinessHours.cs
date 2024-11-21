namespace AstonMartin.Domain.Entities.Salesforce;

public class BusinessHours : BaseEntity
{
    public bool IsActive { get; set; }
    public bool IsDefault { get; set; }
    public string? SundayStartTime { get; set; }
    public string? SundayEndTime { get; set; }
    public string? MondayStartTime { get; set; }
    public string? MondayEndTime { get; set; }
    public string? TuesdayStartTime { get; set; }
    public string? TuesdayEndTime { get; set; }
    public string? WednesdayStartTime { get; set; }
    public string? WednesdayEndTime { get; set; }
    public string? ThursdayStartTime { get; set; }
    public string? ThursdayEndTime { get; set; }
    public string? FridayStartTime { get; set; }
    public string? FridayEndTime { get; set; }
    public string? SaturdayStartTime { get; set; }
    public string? SaturdayEndTime { get; set; }
}
