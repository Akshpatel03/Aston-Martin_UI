using Contentful.Core.Models;

namespace AstonMartin.Domain.DTOs;
public record ContentfulCarViewCardDTO(string Tag, string Model, string Description, Contentful.Core.Models.File ImageFile);
