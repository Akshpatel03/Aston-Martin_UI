using Contentful.Core;

namespace AstonMartin.Service.Clients.Interface;

public interface IContentfulClientFactory
{
    ContentfulClient GetClient();
}
