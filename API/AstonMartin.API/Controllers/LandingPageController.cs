using AstonMartin.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandingPageController : BaseController
    {
        private readonly IContentfulLandingPageService _contentfulService;

        public LandingPageController(IContentfulLandingPageService contentfulService)
        {
            _contentfulService = contentfulService;
        }

        [HttpGet("LatestNews")]
        public async Task<IActionResult> LatestNews()
        {
            var articles = await _contentfulService.GetLatestNewsAsync();
            return GetResult(articles);
        }

        [HttpGet("LandingPageContent")]
        public async Task<IActionResult> LandingPageContent()
        {
            var articles = await _contentfulService.GetLandingPageContentsAsync();
            return GetResult(articles);
        }

        [HttpGet("ExploreModelRange")]
        public async Task<IActionResult> ExploreModelRange()
        {
            var articles = await _contentfulService.GetExploreModelRangesAsync();
            return GetResult(articles);
        }

        [HttpGet("BenefitsOfDealerX")]
        public async Task<IActionResult> BenefitsOfDealerX()
        {
            var articles = await _contentfulService.GetBenefitsOfDealerXAsync();
            return GetResult(articles);
        }

        [HttpGet("WelcomeIntroduction")]
        public async Task<IActionResult> WelcomeIntroduction()
        {
            var articles = await _contentfulService.GetWelcomeIntroductionsAsync();
            return GetResult(articles);
        }

        [HttpGet("LandingPageNavigations")]
        public async Task<IActionResult> LandingPageNavigations()
        {
            var articles = await _contentfulService.GetLandingPageNavigationsAsync();
            return GetResult(articles);
        }

        [HttpGet("LandingPageCarouselData")]
        public async Task<IActionResult> LandingPageCarouselData()
        {
            var articles = await _contentfulService.GetLandingPageCarouselDataAsync();
            return GetResult(articles);
        }
    }

}
