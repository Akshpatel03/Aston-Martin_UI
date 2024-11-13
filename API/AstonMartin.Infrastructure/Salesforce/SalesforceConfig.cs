using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AstonMartin.Infrastructure.Salesforce;

public class SalesforceConfig
{
    public string ClientId { get; set; }
    public string ClientSecret { get; set; }
    public string APIVersion { get; set; }
    public string ApiBaseUrl { get; set; }
}
