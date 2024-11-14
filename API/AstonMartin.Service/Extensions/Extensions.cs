namespace AstonMartin.Service.Extensions;

public static class Extensions
{
    public static int GetValue(this Enum value)
    {
        if (value == null)
            return 0;
        return Convert.ToInt32(value);
    }
}
