using System.ComponentModel.DataAnnotations.Schema;

namespace EM.Data.Entities
{
    public class EmployeeInfo
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public string Value { get; set; }
        
        public int EmployeeId { get; set; }

        [ForeignKey((nameof(EmployeeId)))]
        public Employee Employee { get; set; }
    }
}