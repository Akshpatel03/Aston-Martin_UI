using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulCarViewCard
{
    public required string Tag { get; set; }
    public required string Model { get; set; }
    public required string Description { get; set; }
    public required Asset Image { get; set; }

    public required List<ContentfulCarCard> Models {get;set;}
    
    public Contentful.Core.Models.File ImageFile { get { return Image.File; } }
}
