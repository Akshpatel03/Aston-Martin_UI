using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.DTOs;

public record ContentfulArticleDTO(string Title, string Slug, DateTime PublishDate);

