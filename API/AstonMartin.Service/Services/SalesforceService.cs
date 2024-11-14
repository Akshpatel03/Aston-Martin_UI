using System.Net.Http.Headers;
using AstonMartin.Service.Clients.Interface;
using AstonMartin.Service.Interfaces;
using AstonMartin.Service.Models;
using Microsoft.Extensions.Options;

namespace AstonMartin.Service.Services;

public class SalesforceService : ISalesforceService
{
    private readonly HttpClient _httpClient;
    private readonly SalesforceConfig _settings;
    private readonly ISalesforceClientFactory _salesforceClientFactory;

    public SalesforceService(IHttpClientFactory httpClientFactory,
            IOptions<SalesforceConfig> options,
            ISalesforceClientFactory salesforceClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient();
        _settings = options.Value;
        _salesforceClientFactory = salesforceClientFactory;
    }

    public async Task<string> QuerySalesforceDataAsync(string query)
    {
        try
        {
            var accessToken = await _salesforceClientFactory.GetAccessTokenAsync();
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var response = await _httpClient.GetAsync($"{_settings.ApiBaseUrl}/services/data/{_settings.APIVersion}/query/?q={query}");

            if (!response.IsSuccessStatusCode)
            {
                var errorResponse = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Salesforce query failed. Status: {StatusCode}, Response: {Response}", response.StatusCode, errorResponse);
                throw new HttpRequestException($"Query request failed with status code {response.StatusCode}.");
            }

            Console.WriteLine("Salesforce query executed successfully.");
            return await response.Content.ReadAsStringAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred while querying Salesforce data.");
            throw;
        }
    }
}
