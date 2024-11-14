using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulPageHeading
{
    public required string PageTitle { get; set; }
    public required string Heading { get; set; }
    public required string Description { get; set; }
    public required Asset BackgroundImage { get; set; }
    public Contentful.Core.Models.File ImageFile { get { return BackgroundImage.File; } }
}
