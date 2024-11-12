using AstonMartin.Application.Interfaces;
using AstonMartin.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AstonMartinWebAPI.Controllers;


[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IGenericService<Product> _productService;

    public ProductsController(IGenericService<Product> productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IEnumerable<Product>> Get() => await _productService.GetAllAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> Get(int id)
    {
        var product = await _productService.GetByIdAsync(id);
        if (product == null) return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public async Task<ActionResult> Post(Product product)
    {
        await _productService.AddAsync(product);
        return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, Product product)
    {
        if (id != product.Id) return BadRequest();
        await _productService.UpdateAsync(product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        await _productService.DeleteAsync(id);
        return NoContent();
    }
}