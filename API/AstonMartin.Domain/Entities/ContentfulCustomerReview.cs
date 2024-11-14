using System;

namespace AstonMartin.Domain.Entities;

public class ContentfulCustomerReview
{
    public string Message { get; set; }
    public string Name { get; set; }
    public DateOnly ReviewDate { get; set; }
}
