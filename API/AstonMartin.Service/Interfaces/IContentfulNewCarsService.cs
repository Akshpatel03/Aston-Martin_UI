using AstonMartin.Domain.DTOs.NewCarsDTOs;
using AstonMartin.Domain.Entities.NewCarsEntities;

namespace AstonMartin.Service.Interfaces;

public interface IContentfulNewCarsService
{
    Task<IEnumerable<ContentfulPageHeadingDTO>> GetPageHeadingAsync();
    Task<IEnumerable<ContentfulPageSubHeading>> GetPageSubHeadingAsync();
    Task<IEnumerable<ContentfulCarCardDTO>> GetCarCardsAsync();
    Task<IEnumerable<ContentfulCarViewCardDTO>> GetCarViewCardsAsync();
    Task<IEnumerable<ContentfulServicesDTO>> GetServicesAsync();
    Task<IEnumerable<ContentfulBuyingWithUsDTO>> GetBuyingWithUsDataAsync();
    Task<IEnumerable<ContentfulCustomerReview>> GetCustomerReviewAsync();
    Task<IEnumerable<ContentfulLocationDTO>> GetLocationAsync();
}
