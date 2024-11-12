using AstonMartin.Application.Interfaces;
using AstonMartin.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Application.Services;

public class GenericService<TEntity> : IGenericService<TEntity> where TEntity : class
{
    private readonly IGenericRepository<TEntity> _repository;

    public GenericService(IGenericRepository<TEntity> repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync() => await _repository.GetAllAsync();

    public async Task<TEntity> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

    public async Task AddAsync(TEntity entity) => await _repository.AddAsync(entity);

    public async Task UpdateAsync(TEntity entity) => await _repository.UpdateAsync(entity);

    public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
}
