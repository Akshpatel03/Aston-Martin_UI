using System.Net;
using AstonMartin.Service.Extensions;
using Microsoft.AspNetCore.Http;

namespace AstonMartin.Service.Exceptions;

public class CustomException : Exception
{
    public int StatusCode { get; set; }
    public string Message { get; set; }

    public CustomException(HttpStatusCode statusCode, string message) : base(message)
    {
        StatusCode = statusCode.GetValue();
        Message = message;
    }
}

public class NotFoundException : Exception
{
    public int StatusCode { get; set; }
    public string Message { get; set; }

    public NotFoundException(string message) : base(message)
    {
        StatusCode = StatusCodes.Status404NotFound;
        Message = message;
    }
}


