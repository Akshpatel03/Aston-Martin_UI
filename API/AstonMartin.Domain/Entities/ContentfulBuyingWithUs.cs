using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities;

public class ContentfulBuyingWithUs
{
    public string Title { get; set; }
    public string Description { get; set; }
    public Asset Image { get; set; }
    public Contentful.Core.Models.File ImageFile { get; set; }

    public void SetImageFile()
    {
        if (Image != null && Image.File != null)
        {
            ImageFile = Image.File;  // Extract the URL from the Asset object
        }
    }
}
