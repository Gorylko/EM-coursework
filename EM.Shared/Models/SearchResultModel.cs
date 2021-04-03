using System.Collections.Generic;
using System.Linq;

namespace EM.Shared.Models
{
    public class SearchResultModel<T>
    {
        public IEnumerable<T> Collection { get; set; }

        public int Count { get; set; }
    }
}