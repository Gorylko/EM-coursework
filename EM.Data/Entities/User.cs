namespace EM.Data.Entities
{
    public class User
    {
        public int Id { get; set; }
        
        public string Login { get; set; }
        
        public byte[] Password { get; set; }
        
        public byte[] PasswordSalt { get; set; }
    }
}