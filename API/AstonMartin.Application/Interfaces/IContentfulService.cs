using AstonMartin.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.Interfaces;

public interface IContentfulService
{
    Task<IEnumerable<ContentfulArticleDTO>> GetArticlesAsync();
}
