using AstonMartin.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MyProject.Infrastructure.Data.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Product> Products { get; set; }
}
