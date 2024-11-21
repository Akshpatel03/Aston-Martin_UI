using System;
using AstonMartin.Domain.DTOs.LandingPageDTOs;
using AstonMartin.Domain.Entities.LandingPageEntities;

namespace AstonMartin.Service.Interfaces;

public interface IContentfulLandingPageService
{
    Task<IEnumerable<ContentfulLatestNewsDTO>> GetLatestNewsAsync();

    Task<IEnumerable<ContentfulLandingPageContentDTO>> GetLandingPageContentsAsync();

    Task<IEnumerable<ContentfulExploreModelRangeDTO>> GetExploreModelRangesAsync();

    Task<IEnumerable<ContentfulBenefitsOfDealerXDTO>> GetBenefitsOfDealerXAsync();

    Task<ContentfulWelcomeIntroductionDTO> GetWelcomeIntroductionsAsync();

    Task<IEnumerable<ContentfulHomePageNavigationsDTO>> GetLandingPageNavigationsAsync();

    Task<IEnumerable<ContentfulLandingPageCarouselDataDTO>> GetLandingPageCarouselDataAsync();
}
