namespace AstonMartin.Domain.DTOs.LandingPageDTOs;

public record ContentfulLandingPageContentDTO(string Heading, string Description, string ExploreLink, Contentful.Core.Models.File ImageFile);
