﻿using EM.Business.Implementations;
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
            services.AddTransient<IGenericRepository<Employee>, GenericRepository<Employee>>();
            services.AddTransient<GenericRepository<Employee>, EmployeeRepository>();
            services.AddTransient<IEmployeeService, EmployeeService>();
        }
    }
}