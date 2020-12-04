using System;

namespace EM.Data.Entities
{
    public class Penalty
    {
        public int Id { get; set; }

        public double Amount { get; set; }
        
        public DateTime? Date { get; set; }
        
        public string Reason { get; set; }
    }
}