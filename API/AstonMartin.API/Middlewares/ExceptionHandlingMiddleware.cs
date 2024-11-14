using AstonMartin.API.Common;
using AstonMartin.Domain;
using AstonMartin.Service.Exceptions;

namespace AstonMartin.API.Middlewares;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate Next;
    private readonly ILogger<ExceptionHandlingMiddleware> Logger;

    public ExceptionHandlingMiddleware(RequestDelegate _next, ILogger<ExceptionHandlingMiddleware> _logger)
    {
        Next = _next;
        Logger = _logger;
    }
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await Next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = Constants.ApplicationJsonContentType;

        ApiResult<object> errorResponse = new()
        {
            Code = StatusCodes.Status500InternalServerError,
            Item = null,
            Message = exception.Message,
        };
        switch (exception)
        {
            case BadHttpRequestException ex:
                errorResponse.Code = StatusCodes.Status400BadRequest;
                errorResponse.Message = ex.Message;
                break;
            case InvalidOperationException ex:
                errorResponse.Code = StatusCodes.Status409Conflict;
                errorResponse.Message = ex.Message;
                break;
            case CustomException ex:
                errorResponse.Code = ex.StatusCode;
                errorResponse.Message = ex.Message;
                break;
            case NotFoundException ex:
                errorResponse.Code = ex.StatusCode;
                errorResponse.Message = ex.Message;
                break;
            default:
                errorResponse.Code = StatusCodes.Status500InternalServerError;
                errorResponse.Message = Constants.HttpStatusMessageInternalServerError;
                break;
        }
        Logger.LogError(exception.Message);
        context.Response.StatusCode = errorResponse.Code;
        await context.Response.WriteAsync(errorResponse.Message);
    }
}
