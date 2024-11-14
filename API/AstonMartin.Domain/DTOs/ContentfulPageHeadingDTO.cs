using System;
using Contentful.Core.Models;

namespace AstonMartin.Domain.DTOs;
public record ContentfulPageHeadingDTO(string PageTitle, string Heading, string Description, Contentful.Core.Models.File ImageFile);
