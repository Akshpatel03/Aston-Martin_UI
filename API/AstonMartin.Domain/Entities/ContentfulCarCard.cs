using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities;

public class ContentfulCarCard
{
    public string ModelName {get;set;}

    public Asset ModelImage {get;set;}

    public Contentful.Core.Models.File ImageFile { get; set; }

    public void SetImageFile()
    {
        if (ModelImage != null && ModelImage.File != null)
        {
            ImageFile = ModelImage.File;  // Extract the URL from the Asset object
        }
    }
}
