using Contentful.Core;
using Contentful.Core.Configuration;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Infrastructure.Contentful;

public class ContentfulClientFactory
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
