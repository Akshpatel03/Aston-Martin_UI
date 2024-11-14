using System;
using Contentful.Core.Models;

namespace AstonMartin.Application.DTOs;

public record ContentfulPageHeadingDTO(string PageTitle, string Heading, string Description, Contentful.Core.Models.File ImageFile);
