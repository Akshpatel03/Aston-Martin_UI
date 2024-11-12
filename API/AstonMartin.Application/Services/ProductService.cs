using AstonMartin.Application.Interfaces;
using AstonMartin.Domain.Entities;
using AstonMartin.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.Services;

public class ProductService : GenericService<Product>, IProductService
{
    private readonly IProductRepository _productRepository;

    public ProductService(IProductRepository productRepository)
        : base(productRepository)
    {
        _productRepository = productRepository;
    }
}
