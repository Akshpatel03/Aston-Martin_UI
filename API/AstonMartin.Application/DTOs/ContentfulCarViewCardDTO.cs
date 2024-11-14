using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;

public record ContentfulCarViewCardDTO(string Tag, string Model, string Description, Contentful.Core.Models.File ImageFile);
