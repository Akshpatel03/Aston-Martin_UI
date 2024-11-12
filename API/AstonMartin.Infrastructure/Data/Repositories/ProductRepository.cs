using AstonMartin.Domain.Entities;
using AstonMartin.Domain.Interfaces;
using MyProject.Infrastructure.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Infrastructure.Data.Repositories;

public class ProductRepository : GenericRepository<Product>, IProductRepository
{
    private readonly AppDbContext _context;

    public ProductRepository(AppDbContext context)
        : base(context)
    {
        _context = context;
    }
}
