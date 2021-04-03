namespace EM.Data.Entities
{
    public class Employee
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public string Surname { get; set; }
        
        public decimal Salary { get; set; }
        
        public bool IsArchived { get; set; }
    }
}