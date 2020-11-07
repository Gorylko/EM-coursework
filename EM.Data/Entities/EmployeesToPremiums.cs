using System.ComponentModel.DataAnnotations.Schema;

namespace EM.Data.Entities
{
    public class EmployeesToPremiums
    {
        public int Id { get; set; }
        
        public int EmployeeId { get; set; }
        
        [ForeignKey(nameof(EmployeeId))]
        public Employee Employee { get; set; }
        
        public int PremiumId { get; set; }
        
        [ForeignKey(nameof(PremiumId))]
        public Premium Premium { get; set; }
    }
}