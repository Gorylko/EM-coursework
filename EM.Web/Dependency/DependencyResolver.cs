using EM.Business.Implementations;
using EM.Business.Interfaces;
using EM.Data.Entities;
using EM.Data.Repositories.Implementations;
using EM.Data.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace EM.Web.Dependency
{
    public static class DependencyResolver
    {
        public static void AddAppDependencies(this IServiceCollection services)
        {
            services.AddTransient<GenericRepository<EmployeeInfo>>();
            services.AddTransient<GenericRepository<EnterpriseStatistic>>();
            services.AddTransient<GenericRepository<PenaltiesHistory>>();
            services.AddTransient<GenericRepository<Penalty>>();
            services.AddTransient<GenericRepository<Premium>>();
            services.AddTransient<GenericRepository<PremiumsHistory>>();
            services.AddTransient<GenericRepository<User>>();
            services.AddTransient<GenericRepository<UsersHistory>>();
            services.AddTransient<IGenericRepository<Employee>, GenericRepository<Employee>>();
            services.AddTransient<IEmployeesRepository, EmployeeRepository>();
            services.AddTransient<IEmployeeService, EmployeeService>();
        }
    }
}