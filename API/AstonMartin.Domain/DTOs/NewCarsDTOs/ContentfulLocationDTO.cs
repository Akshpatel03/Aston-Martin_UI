using Contentful.Core.Models;

namespace AstonMartin.Domain.DTOs.NewCarsDTOs;
public record ContentfulLocationDTO(Contentful.Core.Models.File LogoImageFile, string Name, string Address, string ContactNumber, Location MapLocation);
