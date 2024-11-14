using Contentful.Core.Models;

namespace AstonMartin.Domain.DTOs;
public record ContentfulBuyingWithUsDTO(string Title, string Description, Contentful.Core.Models.File ImageFile);
