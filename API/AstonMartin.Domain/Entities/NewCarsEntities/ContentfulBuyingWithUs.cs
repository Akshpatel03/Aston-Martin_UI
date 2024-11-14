using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulBuyingWithUs
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required Asset Image { get; set; }
    public Contentful.Core.Models.File ImageFile { get { return Image.File; } }

}
