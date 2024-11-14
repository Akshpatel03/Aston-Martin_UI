using AstonMartin.Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartinWebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContentfulController : ControllerBase
{
    private readonly IContentfulService _contentfulService;

    public ContentfulController(IContentfulService contentfulService)
    {
        _contentfulService = contentfulService;
    }

    [HttpGet("PageContentHeading")]
    public async Task<IActionResult> GetPageHeading()
    {
        var articles = await _contentfulService.GetPageHeadingAsync();
        return Ok(articles);
    }

    [HttpGet("PageContentSubHeading")]
    public async Task<IActionResult> GetPageSubHeading()
    {
        var articles = await _contentfulService.GetPageSubHeadingAsync();
        return Ok(articles);
    }

    [HttpGet("CarCards")]
    public async Task<IActionResult> GetCarCards()
    {
        var articles = await _contentfulService.GetCarCardsAsync();
        return Ok(articles);
    }
    
    [HttpGet("CarViewCards")]
    public async Task<IActionResult> GetCarViewCards()
    {
        var articles = await _contentfulService.GetCarViewCardsAsync();
        return Ok(articles);
    }

    [HttpGet("Services")]
    public async Task<IActionResult> GetServices()
    {
        var articles = await _contentfulService.GetServicesAsync();
        return Ok(articles);
    }

    [HttpGet("BuyingWithUs")]
    public async Task<IActionResult> GetBuyingWithUsData()
    {
        var articles = await _contentfulService.GetBuyingWithUsDataAsync();
        return Ok(articles);
    }

    [HttpGet("CustomerReviews")]
    public async Task<IActionResult> GetCustomerReview()
    {
        var articles = await _contentfulService.GetCustomerReviewAsync();
        return Ok(articles);
    }

    [HttpGet("Locations")]
    public async Task<IActionResult> GetLocation()
    {
        var articles = await _contentfulService.GetLocationAsync();
        return Ok(articles);
    }
}
