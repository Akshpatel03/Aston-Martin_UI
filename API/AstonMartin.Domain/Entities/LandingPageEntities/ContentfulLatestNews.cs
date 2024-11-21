using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.LandingPageEntities;

public class ContentfulLatestNews
{
    public required Asset NewsImage {get;set;}
    public Contentful.Core.Models.File NewsImageFile { get { return NewsImage.File; } }

    public required DateOnly NewsDate {get;set;}

    public required string NewsHeading {get;set;}
}
