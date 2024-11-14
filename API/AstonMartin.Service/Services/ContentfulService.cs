using AstonMartin.Domain.DTOs;
using AstonMartin.Domain.Entities;
using AstonMartin.Service.Clients.Implementation;
using AstonMartin.Service.Interfaces;
using Contentful.Core;
using Contentful.Core.Search;

namespace AstonMartin.Application.Services;

public class ContentfulService : IContentfulService
{
    private readonly ContentfulClient _client;

    public ContentfulService(ContentfulClientFactory clientFactory)
    {
        _client = clientFactory.GetClient();
    }

    public async Task<IEnumerable<ContentfulPageHeadingDTO>> GetPageHeadingAsync()
    {
        var query = new QueryBuilder<ContentfulPageHeading>()
                        .ContentTypeIs("pageHeading");

        var entries = await _client.GetEntries(query);

        foreach (var pageHeading in entries)
        {
            pageHeading.SetImageFile();
        }

        return entries.Select(article => new ContentfulPageHeadingDTO(
            article.PageTitle,
            article.Heading,
            article.Description,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulPageSubHeadingDTO>> GetPageSubHeadingAsync()
    {
        var query = new QueryBuilder<ContentfulPageSubHeading>()
                        .ContentTypeIs("pageSubHeading");

        var entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulPageSubHeadingDTO(
            article.Title,
            article.Description
            ));
    }

    public async Task<IEnumerable<ContentfulCarCardDTO>> GetCarCardsAsync()
    {
        var query = new QueryBuilder<ContentfulCarCard>()
                        .ContentTypeIs("carCard");

        var entries = await _client.GetEntries(query);

        foreach (var carCard in entries)
        {
            carCard.SetImageFile();
        }

        return entries.Select(article => new ContentfulCarCardDTO(
            article.ModelName,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulCarViewCardDTO>> GetCarViewCardsAsync()
    {
        var query = new QueryBuilder<ContentfulCarViewCard>()
                        .ContentTypeIs("carViewCard");

        var entries = await _client.GetEntries(query);

        foreach (var carViewCard in entries)
        {
            carViewCard.SetImageFile();
        }

        return entries.Select(article => new ContentfulCarViewCardDTO(
            article.Tag,
            article.Model,
            article.Description,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulServicesDTO>> GetServicesAsync()
    {
        var query = new QueryBuilder<ContentfulServices>()
                        .ContentTypeIs("services");

        var entries = await _client.GetEntries(query);

        foreach (var services in entries)
        {
            services.SetImageFile();
        }

        return entries.Select(article => new ContentfulServicesDTO(
            article.Name,
            article.Description,
            article.ImageFile,
            article.ExploreLink
            ));
    }

    public async Task<IEnumerable<ContentfulBuyingWithUsDTO>> GetBuyingWithUsDataAsync()
    {
        var query = new QueryBuilder<ContentfulBuyingWithUs>()
                        .ContentTypeIs("buyingWithUs");

        var entries = await _client.GetEntries(query);

        foreach (var buyingWithUs in entries)
        {
            buyingWithUs.SetImageFile();
        }

        return entries.Select(article => new ContentfulBuyingWithUsDTO(
            article.Title,
            article.Description,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulCustomerReviewDTO>> GetCustomerReviewAsync()
    {
        var query = new QueryBuilder<ContentfulCustomerReview>()
                        .ContentTypeIs("customerReview");

        var entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulCustomerReviewDTO(
            article.Message,
            article.Name,
            article.ReviewDate
            ));
    }

    public async Task<IEnumerable<ContentfulLocationDTO>> GetLocationAsync()
    {
        var query = new QueryBuilder<ContentfulLocation>()
                        .ContentTypeIs("location");

        var entries = await _client.GetEntries(query);

        foreach (var location in entries)
        {
            location.SetImageFile();
        }

        return entries.Select(article => new ContentfulLocationDTO(
            article.LogoImageFile,
            article.Name,
            article.Address,
            article.ContactNumber,
            article.MapLocation
            ));
    }
}
