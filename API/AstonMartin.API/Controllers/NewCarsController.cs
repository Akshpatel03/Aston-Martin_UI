using AstonMartin.Domain.DTOs.NewCarsDTOs;
using AstonMartin.Domain.Entities.NewCarsEntities;
using AstonMartin.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartin.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class NewCarsController : BaseController
{
    private readonly IContentfulNewCarsService _contentfulService;

    public NewCarsController(IContentfulNewCarsService contentfulService)
    {
        _contentfulService = contentfulService;
    }

    [HttpGet("PageContentHeading")]
    public async Task<IActionResult> PageHeading()
    {
        var articles = await _contentfulService.GetPageHeadingAsync();
        return GetResult(articles);
    }

    [HttpGet("PageContentSubHeading")]
    public async Task<IActionResult> PageSubHeading()
    {
        var articles = await _contentfulService.GetPageSubHeadingAsync();
        return GetResult(articles);
    }

    [HttpGet("CarCards")]
    public async Task<IActionResult> CarCards()
    {
        var articles = await _contentfulService.GetCarCardsAsync();
        return GetResult(articles);
    }

    [HttpGet("CarViewCards")]
    public async Task<IActionResult> CarViewCards()
    {
        IEnumerable<ContentfulCarViewCardDTO>? articles = await _contentfulService.GetCarViewCardsAsync();
        return GetResult(articles);
    }

    [HttpGet("ProvidedServices")]
    public async Task<IActionResult> ProvidedServices()
    {
        IEnumerable<ContentfulServicesDTO>? articles = await _contentfulService.GetServicesAsync();
        return GetResult(articles);
    }

    [HttpGet("BuyingWithUs")]
    public async Task<IActionResult> BuyingWithUsData()
    {
        IEnumerable<ContentfulBuyingWithUsDTO>? articles = await _contentfulService.GetBuyingWithUsDataAsync();
        return GetResult(articles);
    }

    [HttpGet("CustomerReviews")]
    public async Task<IActionResult> CustomerReview()
    {
        IEnumerable<ContentfulCustomerReview>? articles = await _contentfulService.GetCustomerReviewAsync();
        return GetResult(articles);
    }

    [HttpGet("BranchLocations")]
    public async Task<IActionResult> BranchLocations()
    {
        IEnumerable<ContentfulLocationDTO>? articles = await _contentfulService.GetLocationAsync();
        return GetResult(articles);
    }
}

