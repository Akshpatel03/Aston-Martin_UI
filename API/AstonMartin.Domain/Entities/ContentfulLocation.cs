using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.Entities;

public class ContentfulLocation
{
    public Asset Logo {get;set;}

    public string Name {get;set;}

    public string Address {get;set;}

    public string ContactNumber {get;set;}
    
    public Location MapLocation {get;set;}

    public Contentful.Core.Models.File LogoImageFile { get; set; }

    public void SetImageFile()
    {
        if (Logo != null && Logo.File != null)
        {
            LogoImageFile = Logo.File;  // Extract the URL from the Asset object
        }
    }
}
