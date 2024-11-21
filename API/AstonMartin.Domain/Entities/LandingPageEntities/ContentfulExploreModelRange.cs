using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.LandingPageEntities;

public class ContentfulExploreModelRange
{
    public required string ModelName {get;set;}

    public required string ModelTag {get;set;}

    public required string ModelDescription {get;set;}

    public required Asset ModelImage {get;set;}

    public Contentful.Core.Models.File ModelImageFile {get {return ModelImage.File; }}
}
