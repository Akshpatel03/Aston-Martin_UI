using AstonMartin.Application.DTOs;
using AstonMartin.Application.Interfaces;
using AstonMartin.Domain.Entities;
using AstonMartin.Infrastructure.Contentful;
using Contentful.Core;
using Contentful.Core.Search;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.Services;

public class ContentfulService : IContentfulService
{
    private readonly ContentfulClient _client;

    public ContentfulService(ContentfulClientFactory clientFactory)
    {
        _client = clientFactory.GetClient();
    }

    public async Task<IEnumerable<ContentfulArticleDTO>> GetArticlesAsync()
    {
        var query = new QueryBuilder<ContentfulArticle>()
                        .ContentTypeIs("blogPost")
                        .OrderBy("-fields.publishDate");

        var entries = await _client.GetEntries(query);

        return entries.Select(article => new ContentfulArticleDTO(
            article.Title,
            article.Slug,
            article.PublishDate));
    }
}
