using Contentful.Core.Models;

namespace AstonMartin.Domain.DTOs;
public record ContentfulServicesDTO(string Name, string Description, Contentful.Core.Models.File ImageFile, string ExploreLink);
