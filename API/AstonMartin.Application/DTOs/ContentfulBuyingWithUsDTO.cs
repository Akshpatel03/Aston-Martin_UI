using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;

public record ContentfulBuyingWithUsDTO(string Title,string Description, Contentful.Core.Models.File ImageFile);
