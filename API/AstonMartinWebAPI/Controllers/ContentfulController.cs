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

    [HttpGet]
    public async Task<IActionResult> GetArticles()
    {
        var articles = await _contentfulService.GetArticlesAsync();
        return Ok(articles);
    }
}
