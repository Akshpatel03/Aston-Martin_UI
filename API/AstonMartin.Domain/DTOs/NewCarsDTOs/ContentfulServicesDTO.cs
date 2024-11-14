namespace AstonMartin.Domain.DTOs.NewCarsDTOs;
public record ContentfulServicesDTO(string Name, string Description, Contentful.Core.Models.File ImageFile, string ExploreLink);
