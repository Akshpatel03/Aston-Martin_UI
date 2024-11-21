using AstonMartin.Domain.DTOs.NewCarsDTOs;
using AstonMartin.Domain.Entities.NewCarsEntities;
using AstonMartin.Service.Clients.Implementation;
using AstonMartin.Service.Interfaces;
using Contentful.Core;
using Contentful.Core.Models;
using Contentful.Core.Search;

namespace AstonMartin.Application.Services;

public class ContentfulNewCarsService : IContentfulNewCarsService
{
    private readonly ContentfulClient _client;

    public ContentfulNewCarsService(ContentfulClientFactory clientFactory)
    {
        _client = clientFactory.GetClient();
    }

    public async Task<ContentfulPageHeadingDTO> GetPageHeadingAsync()
    {
        QueryBuilder<ContentfulPageHeading> query = new QueryBuilder<ContentfulPageHeading>()
                        .ContentTypeIs("pageHeading");

        ContentfulCollection<ContentfulPageHeading>? entries = await _client.GetEntries(query);
        var article = entries.Items.FirstOrDefault();
        if (article == null)
        {
            throw new InvalidOperationException("No data entry found.");
        }
        return new ContentfulPageHeadingDTO(
            article.PageTitle,
            article.Heading,
            article.Description,
            article.ImageFile
        );
    }

    public async Task<ContentfulPageSubHeading> GetPageSubHeadingAsync()
    {
        QueryBuilder<ContentfulPageSubHeading> query = new QueryBuilder<ContentfulPageSubHeading>()
                        .ContentTypeIs("pageSubHeading");

        ContentfulCollection<ContentfulPageSubHeading>? entries = await _client.GetEntries(query);

        return entries.Items.FirstOrDefault();
    }

    public async Task<IEnumerable<ContentfulCarCardDTO>> GetCarCardsAsync()
    {
        QueryBuilder<ContentfulCarCard> query = new QueryBuilder<ContentfulCarCard>()
                        .ContentTypeIs("carCard");

        ContentfulCollection<ContentfulCarCard>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulCarCardDTO(
            article.ModelName,
            article.ImageFile
            ));
    }

    public async Task<IEnumerable<ContentfulCarViewCardDTO>> GetCarViewCardsAsync()
    {
        QueryBuilder<ContentfulCarViewCard> query = new QueryBuilder<ContentfulCarViewCard>()
                        .ContentTypeIs("carViewCard")
                        .Include(2).OrderBy("sys.createdAt");

        ContentfulCollection<ContentfulCarViewCard>? entries = await _client.GetEntries(query);

        return entries.Items.Select(article => new ContentfulCarViewCardDTO(
        article.Tag,
        article.Model,
        article.Description,
        article.ImageFile,
        article.Models?.Select(model => new ContentfulCarCardDTO(
           model.ModelName,
           model.ModelImage.File
        )).ToList() ?? new List<ContentfulCarCardDTO>()
        ));
    }

    public async Task<IEnumerable<ContentfulServicesDTO>> GetServicesAsync()
    {
        QueryBuilder<ContentfulProvidedServices> query = new QueryBuilder<ContentfulProvidedServices>()
                        .ContentTypeIs("services");

        ContentfulCollection<ContentfulProvidedServices>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulServicesDTO(
            article.Name,
            article.Description,
            article.ImageFile,
            article.ExploreLink
            ));
    }

    public async Task<ContentfulBuyingWithUsDTO> GetBuyingWithUsDataAsync()
    {
        QueryBuilder<ContentfulBuyingWithUs> query = new QueryBuilder<ContentfulBuyingWithUs>()
                        .ContentTypeIs("buyingWithUs");

        ContentfulCollection<ContentfulBuyingWithUs>? entries = await _client.GetEntries(query);

        var article = entries.Items.FirstOrDefault();
        if (article == null)
        {
            throw new InvalidOperationException("No data entry found.");
        }
        return new ContentfulBuyingWithUsDTO(
            article.Title,
            article.Description,
            article.ImageFile
        );
    }

    public async Task<IEnumerable<ContentfulCustomerReview>> GetCustomerReviewAsync()
    {
        QueryBuilder<ContentfulCustomerReview> query = new QueryBuilder<ContentfulCustomerReview>()
                        .ContentTypeIs("customerReview").OrderBy("sys.createdAt");
        ContentfulCollection<ContentfulCustomerReview>? entries = await _client.GetEntries(query);

        return entries;
    }

    public async Task<IEnumerable<ContentfulLocationDTO>> GetLocationAsync()
    {
        QueryBuilder<ContentfulLocation> query = new QueryBuilder<ContentfulLocation>()
                        .ContentTypeIs("location");

        ContentfulCollection<ContentfulLocation>? entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulLocationDTO(
            article.LogoImageFile,
            article.Name,
            article.Address,
            article.ContactNumber,
            article.MapLocation
            ));
    }
}
