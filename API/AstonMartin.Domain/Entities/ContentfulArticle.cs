using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Domain.Entities;

public class ContentfulArticle
{
    public string Title { get; set; }
    public string Slug { get; set; }
    public DateTime PublishDate { get; set; }
}
