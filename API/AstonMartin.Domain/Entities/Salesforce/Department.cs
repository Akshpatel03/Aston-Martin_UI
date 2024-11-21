namespace AstonMartin.Domain.Entities.Salesforce;

public class Department : BaseEntity
{
    public string DepartmentFunction { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string? Website { get; set; }
    public string? Email { get; set; }
    public BusinessHours BusinessHours { get; set; } = null!;
}
