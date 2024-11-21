namespace AstonMartin.Domain.DTOs.LandingPageDTOs;

public record ContentfulLatestNewsDTO(string NewsHeading, DateOnly NewsDate, Contentful.Core.Models.File NewsImageFile);
