using System;
using AstonMartin.Domain.DTOs.LandingPageDTOs;
using AstonMartin.Domain.Entities.LandingPageEntities;
using AstonMartin.Service.Clients.Implementation;
using AstonMartin.Service.Interfaces;
using Contentful.Core;
using Contentful.Core.Models;
using Contentful.Core.Search;

namespace AstonMartin.Service.Services;

public class ContentfulLandingPageService: IContentfulLandingPageService
{
    private readonly ContentfulClient _client;

    public ContentfulLandingPageService(ContentfulClientFactory clientFactory)
    {
        _client = clientFactory.GetClient();
    }

    public async Task<IEnumerable<ContentfulLatestNewsDTO>> GetLatestNewsAsync()
    {
        QueryBuilder<ContentfulLatestNews> query = new QueryBuilder<ContentfulLatestNews>()
                        .ContentTypeIs("latestNews");

        ContentfulCollection<ContentfulLatestNews>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulLatestNewsDTO(
            article.NewsHeading,
            article.NewsDate,
            article.NewsImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulLandingPageContentDTO>> GetLandingPageContentsAsync()
    {
        QueryBuilder<ContentfulLandingPageContent> query = new QueryBuilder<ContentfulLandingPageContent>()
                        .ContentTypeIs("homePageContent");

        ContentfulCollection<ContentfulLandingPageContent>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulLandingPageContentDTO(
            article.Heading,
            article.Description,
            article.ExploreLink,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulExploreModelRangeDTO>> GetExploreModelRangesAsync()
    {
        QueryBuilder<ContentfulExploreModelRange> query = new QueryBuilder<ContentfulExploreModelRange>()
                        .ContentTypeIs("exploreModelRange");

        ContentfulCollection<ContentfulExploreModelRange>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulExploreModelRangeDTO(
            article.ModelName,
            article.ModelTag,
            article.ModelDescription,
            article.ModelImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulBenefitsOfDealerXDTO>> GetBenefitsOfDealerXAsync()
    {
        QueryBuilder<ContentfulBenefitsOfDealerX> query = new QueryBuilder<ContentfulBenefitsOfDealerX>()
                        .ContentTypeIs("benefitsOfDealerX");

        ContentfulCollection<ContentfulBenefitsOfDealerX>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulBenefitsOfDealerXDTO(
            article.Benefit
        ));
    }

    public async Task<ContentfulWelcomeIntroductionDTO> GetWelcomeIntroductionsAsync()
    {
        QueryBuilder<ContentfulWelcomeIntroduction> query = new QueryBuilder<ContentfulWelcomeIntroduction>()
                        .ContentTypeIs("welcomeIntroduction");

        ContentfulCollection<ContentfulWelcomeIntroduction>? entries = await _client.GetEntries(query);

        var article = entries.Items.FirstOrDefault();
        if (article == null)
        {
            throw new InvalidOperationException("No welcome introduction entry found.");
        }

        // Return the mapped DTO    
        return new ContentfulWelcomeIntroductionDTO(article.Heading, article.Description, article.ImageFile);
    }

    public async Task<IEnumerable<ContentfulHomePageNavigationsDTO>> GetLandingPageNavigationsAsync()
    {
        QueryBuilder<ContentfulHomePageNavigations> query = new QueryBuilder<ContentfulHomePageNavigations>()
                        .ContentTypeIs("homePageNavigations");

        ContentfulCollection<ContentfulHomePageNavigations>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulHomePageNavigationsDTO(
            article.Title,
            article.NavigationLink,
            article.BackgroundImageFile
        ));
    }

    public async Task<IEnumerable<ContentfulLandingPageCarouselDataDTO>> GetLandingPageCarouselDataAsync()
    {
        QueryBuilder<ContentfulLandingPageCarouselData> query = new QueryBuilder<ContentfulLandingPageCarouselData>()
                        .ContentTypeIs("homePageCarouselData");

        ContentfulCollection<ContentfulLandingPageCarouselData>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulLandingPageCarouselDataDTO(
            article.ModelName,
            article.ModelTag,
            article.ModelPromoText,
            article.ModelImageFile
        ));
    }
}
