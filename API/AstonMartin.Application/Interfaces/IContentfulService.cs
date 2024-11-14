using AstonMartin.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.Interfaces;

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
