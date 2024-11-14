using AstonMartin.Service.Clients.Interface;
using AstonMartin.Service.Models;
using Contentful.Core;
using Contentful.Core.Configuration;
using Microsoft.Extensions.Options;

namespace AstonMartin.Service.Clients.Implementation;

public class ContentfulClientFactory : IContentfulClientFactory
{
    private readonly ContentfulClient _client;

    public ContentfulClientFactory(IOptions<ContentfulConfigs> settings)
    {
        var options = new ContentfulOptions
        {
            SpaceId = settings.Value.SpaceId,
            DeliveryApiKey = settings.Value.AccessToken
        };
        _client = new ContentfulClient(new HttpClient(), options);
    }

    public ContentfulClient GetClient() => _client;
}
