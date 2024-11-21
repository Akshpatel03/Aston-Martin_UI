using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities.LandingPageEntities;

public class ContentfulHomePageNavigations
{
    public required string Title {get;set;}

    public required string NavigationLink {get;set;}

    public required Asset BackgroundImage {get;set;}

    public Contentful.Core.Models.File BackgroundImageFile {get {return BackgroundImage.File;}}
}
