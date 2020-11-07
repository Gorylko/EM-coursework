using System.ComponentModel.DataAnnotations.Schema;

namespace EM.Data.Entities
{
    public class EmployeesToPenalties
    {
        public int Id { get; set; }
        
        public int EmployeeId { get; set; }
        
        [ForeignKey(nameof(EmployeeId))]
        public Employee Employee { get; set; }

        public int PenaltyId { get; set; }
        
        [ForeignKey(nameof(PenaltyId))]
        public virtual Penalty Penalty { get; set; }
    }
}