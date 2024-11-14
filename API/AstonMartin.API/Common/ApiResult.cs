namespace AstonMartin.API.Common;

public class ApiResult<T> where T : class
{
    public int Code { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Item { get; set; }
    public bool IsSuccessStatusCode
    {
        get
        {
            return this.Code >= 200 && this.Code <= 299;
        }
    }
}
