using EM.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace EM.Data.Context
{
    public sealed class EmContext : DbContext
    {
        public EmContext(DbContextOptions<EmContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        
        public DbSet<Employee> Employees { get; set; }
        
        public DbSet<EmployeeInfo> EmployeeInfos { get; set; }
        
        public DbSet<EmployeesToPenalties> EmployeesToPenalties { get; set; }
        
        public DbSet<EmployeesToPremiums> EmployeesToPremiums { get; set; }
        
        public DbSet<EnterpriseStatistic> EnterpriseStatistics { get; set; }
        
        public DbSet<Penalty> Penalties { get; set; }
        
        public DbSet<Premium> Premiums { get; set; }
        
        public DbSet<Role> Roles { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UsersToEnterprises> UsersToEnterprises { get; set; }

        public DbSet<UsersToRoles> UsersToRoles { get; set; }
        
        public DbSet<UsersHistory> UsersHistories { get; set; }
        
        public DbSet<PenaltiesHistory> PenaltiesHistories { get; set; }
        
        public DbSet<PremiumsHistory> PremiumsHistories { get; set; }
    }
}