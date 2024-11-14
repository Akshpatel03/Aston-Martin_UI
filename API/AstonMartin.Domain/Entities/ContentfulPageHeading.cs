using System;
using System.Diagnostics.Contracts;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities;

public class ContentfulPageHeading
{
    public string PageTitle { get; set; }

    public string Heading { get; set; }

    public string Description { get; set; }

    public Asset BackgroundImage {get;set;}

    public Contentful.Core.Models.File ImageFile { get; set; }

    public void SetImageFile()
    {
        if (BackgroundImage != null && BackgroundImage.File != null)
        {
            ImageFile = BackgroundImage.File;  // Extract the URL from the Asset object
        }
    }
}
