using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulLocation
{
    public required Asset Logo { get; set; }
    public required string Name { get; set; }
    public required string Address { get; set; }
    public required string ContactNumber { get; set; }
    public required Location MapLocation { get; set; }
    public Contentful.Core.Models.File LogoImageFile { get { return Logo.File; } }
}
