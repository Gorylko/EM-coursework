using System;

namespace EM.Data.Entities
{
    public class PremiumsHistory
    {
        public int Id { get; set; }
        
        public double Amount { get; set; }
        
        public DateTime? Date { get; set; }
    }
}