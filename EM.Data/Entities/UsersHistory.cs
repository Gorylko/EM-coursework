using System;

namespace EM.Data.Entities
{
    public class UsersHistory
    {
        public int Id { get; set; }
        
        public string Login { get; set; }

        public DateTime? Date { get; set; }
    }
}