using AstonMartin.Domain.Entities.NewCarsEntities;

namespace AstonMartin.Domain.DTOs.NewCarsDTOs;
public record ContentfulCarViewCardDTO(string Tag, string Model, string Description, Contentful.Core.Models.File ImageFile, List<ContentfulCarCardDTO> Models);
