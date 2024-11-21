using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.LandingPageEntities;

public class ContentfulLandingPageCarouselData
{
    public required string ModelName {get;set;}

    public required string ModelTag {get;set;}

    public required string ModelPromoText {get;set;}

    public required Asset ModelImage {get;set;}

    public Contentful.Core.Models.File ModelImageFile{get{return ModelImage.File;}}
}
