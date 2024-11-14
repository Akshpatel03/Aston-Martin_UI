namespace AstonMartin.Domain.Entities.NewCarsEntities;

public class ContentfulCustomerReview
{
    public required string Message { get; set; }
    public required string Name { get; set; }
    public required DateOnly ReviewDate { get; set; }
}
