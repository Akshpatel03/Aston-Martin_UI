using AstonMartin.Domain.DTOs.NewCarsDTOs;
using AstonMartin.Domain.Entities.NewCarsEntities;

namespace AstonMartin.Service.Interfaces;

public interface IContentfulNewCarsService
{
    Task<ContentfulPageHeadingDTO> GetPageHeadingAsync();
    Task<ContentfulPageSubHeading> GetPageSubHeadingAsync();
    Task<IEnumerable<ContentfulCarCardDTO>> GetCarCardsAsync();
    Task<IEnumerable<ContentfulCarViewCardDTO>> GetCarViewCardsAsync();
    Task<IEnumerable<ContentfulServicesDTO>> GetServicesAsync();
    Task<ContentfulBuyingWithUsDTO> GetBuyingWithUsDataAsync();
    Task<IEnumerable<ContentfulCustomerReview>> GetCustomerReviewAsync();
    Task<IEnumerable<ContentfulLocationDTO>> GetLocationAsync();
}
