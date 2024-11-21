namespace AstonMartin.Domain.DTOs.LandingPageDTOs;

public record ContentfulWelcomeIntroductionDTO(string Heading, string Description, Contentful.Core.Models.File ImageFile);
