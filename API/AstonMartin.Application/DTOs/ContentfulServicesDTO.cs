using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;

public record ContentfulServicesDTO(string Name, string Description, Contentful.Core.Models.File ImageFile, string ExploreLink);
