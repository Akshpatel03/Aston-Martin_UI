using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.LandingPageEntities;

public class ContentfulLandingPageContent
{
    public required string Heading {get;set;}

    public required string Description {get;set;}

    public required string ExploreLink {get;set;}

    public required Asset Image {get;set;}

    public Contentful.Core.Models.File ImageFile {get { return Image.File; }} 
}
