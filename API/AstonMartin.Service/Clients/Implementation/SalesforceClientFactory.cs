using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using AstonMartin.Service.Clients.Interface;
using AstonMartin.Service.Models;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;

namespace AstonMartin.Service.Clients.Implementation;

public class SalesforceClientFactory : ISalesforceClientFactory
{
    private readonly HttpClient _httpClient;
    private readonly SalesforceConfig _settings;
    private readonly IMemoryCache _memoryCache;

    private const string TokenCacheKey = "SalesforceAccessToken";

    public SalesforceClientFactory(
        IHttpClientFactory httpClientFactory,
        IOptions<SalesforceConfig> options,
        IMemoryCache memoryCache)
    {
        _httpClient = httpClientFactory.CreateClient();
        _settings = options.Value;
        _memoryCache = memoryCache;
    }

    public async Task<string> GetAccessTokenAsync()
    {
        if (_memoryCache.TryGetValue(TokenCacheKey, out string accessToken))
        {
            Console.WriteLine("Using cached Salesforce access token.");
            return accessToken;
        }

        try
        {
            var content = new StringContent(
                $"grant_type=client_credentials&client_id={_settings.ClientId}&client_secret={_settings.ClientSecret}",
                Encoding.UTF8,
                "application/x-www-form-urlencoded");

            var response = await _httpClient.PostAsync($"{_settings.ApiBaseUrl}/services/oauth2/token", content);

            if (!response.IsSuccessStatusCode)
            {
                var errorResponse = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Failed to retrieve Salesforce access token. Status: {StatusCode}, Response: {Response}", response.StatusCode, errorResponse);
                throw new HttpRequestException($"Token request failed with status code {response.StatusCode}.");
            }

            var responseString = await response.Content.ReadAsStringAsync();
            var tokenResponse = JsonSerializer.Deserialize<SalesforceTokenResponse>(responseString);

            accessToken = tokenResponse?.access_token;
            if (string.IsNullOrEmpty(accessToken))
            {
                Console.WriteLine("Access token is null or empty in the Salesforce response.");
                throw new Exception("Failed to retrieve a valid access token from Salesforce.");
            }

            _memoryCache.Set(TokenCacheKey, accessToken, DateTimeOffset.UtcNow.AddSeconds(3600));
            Console.WriteLine("Salesforce access token retrieved and cached successfully.");

            return accessToken;
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred while retrieving the Salesforce access token.");
            throw;
        }
    }

}
