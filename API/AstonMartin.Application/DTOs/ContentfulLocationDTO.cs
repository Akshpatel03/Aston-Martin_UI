using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;

public record ContentfulLocationDTO(Contentful.Core.Models.File LogoImageFile, string Name, string Address, string ContactNumber, Location MapLocation);
