using System.ComponentModel.DataAnnotations.Schema;

namespace EM.Data.Entities
{
    public class UsersToEnterprises
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        
        public int EnterpriseStatisticId { get; set; }
        
        [ForeignKey(nameof(EnterpriseStatisticId))]
        public EnterpriseStatistic EnterpriseStatistic { get; set; }
    }
}