using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulProvidedServices
{
    public required string Name { get; set; }
    public required string Description { get; set; }
    public required Asset Image { get; set; }
    public required string ExploreLink { get; set; }
    public Contentful.Core.Models.File ImageFile { get { return Image.File; } }
}
