using AstonMartin.API.Middlewares;
using AstonMartin.Application.Services;
using AstonMartin.Service.Clients.Implementation;
using AstonMartin.Service.Clients.Interface;
using AstonMartin.Service.Interfaces;
using AstonMartin.Service.Models;
using AstonMartin.Service.Services;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<ContentfulConfigs>(builder.Configuration.GetSection("ContentfulSettings"));
builder.Services.Configure<SalesforceConfig>(builder.Configuration.GetSection("SalesforceSettings"));
builder.Services.AddSingleton<ContentfulClientFactory>();
builder.Services.AddScoped<IContentfulNewCarsService, ContentfulNewCarsService>();
builder.Services.AddScoped<IContentfulLandingPageService, ContentfulLandingPageService>();
builder.Services.AddMemoryCache();
builder.Services.AddHttpClient();
builder.Services.AddSingleton<ISalesforceClientFactory, SalesforceClientFactory>();
builder.Services.AddScoped<ISalesforceService, SalesforceService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
}));

WebApplication app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseCors("MyPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
