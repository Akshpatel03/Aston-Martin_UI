using AstonMartin.Domain.DTOs;

namespace AstonMartin.Service.Interfaces;

public interface IContentfulService
{
    Task<IEnumerable<ContentfulPageHeadingDTO>> GetPageHeadingAsync();
    Task<IEnumerable<ContentfulPageSubHeadingDTO>> GetPageSubHeadingAsync();
    Task<IEnumerable<ContentfulCarCardDTO>> GetCarCardsAsync();
    Task<IEnumerable<ContentfulCarViewCardDTO>> GetCarViewCardsAsync();
    Task<IEnumerable<ContentfulServicesDTO>> GetServicesAsync();
    Task<IEnumerable<ContentfulBuyingWithUsDTO>> GetBuyingWithUsDataAsync();
    Task<IEnumerable<ContentfulCustomerReviewDTO>> GetCustomerReviewAsync();
    Task<IEnumerable<ContentfulLocationDTO>> GetLocationAsync();
}
