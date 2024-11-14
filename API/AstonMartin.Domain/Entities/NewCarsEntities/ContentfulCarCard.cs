using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulCarCard
{
    public required string ModelName { get; set; }
    public required Asset ModelImage { get; set; }
    public Contentful.Core.Models.File ImageFile { get { return ModelImage.File; } }
}
