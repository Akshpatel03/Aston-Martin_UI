using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;
public record ContentfulCarCardDTO(string ModalName, Contentful.Core.Models.File ImageFile);