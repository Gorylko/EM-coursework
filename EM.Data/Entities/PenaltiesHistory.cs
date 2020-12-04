using System;

namespace EM.Data.Entities
{
    public class PenaltiesHistory
    {
        public int Id { get; set; }
        
        public double Amount { get; set; }

        public DateTime? Date { get; set; }
    }
}