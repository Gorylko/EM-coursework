using System.ComponentModel.DataAnnotations.Schema;

namespace EM.Data.Entities
{
    public class UsersToRoles
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        
        public int RoleId { get; set; }
        
        [ForeignKey(nameof(RoleId))]
        public Role Role { get; set; }
    }
}