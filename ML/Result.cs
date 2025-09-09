using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ML
{
    public class Result
    {

        public bool Correct { get; set; }
        public string? ErrorMessage { get; set; }
        //[JsonIgnore]
        public Exception? Ex { get; set; }
        public object? Object { get; set; }
        public List<object>? Objects { get; set; }

    }
}
