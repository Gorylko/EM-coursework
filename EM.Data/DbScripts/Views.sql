USE EmDb

GO

CREATE VIEW vwUsersRoles
AS

SELECT Roles.Id AS RoleId, [Roles].[Name], Users.Id AS UserId, [Users].[Login]
FROM dbo.Users
INNER JOIN dbo.UsersToRoles ON dbo.UsersToRoles.UserId = dbo.Users.Id
INNER JOIN dbo.Roles ON dbo.Roles.Id = dbo.UsersToRoles.RoleId;

GO

CREATE VIEW vwCredentials
AS

SELECT PasswordSalt, [Password], Id
FROM dbo.Users

GO

CREATE VIEW vwLogins
AS

SELECT Id, [Login]
FROM dbo.Users

GO

CREATE VIEW vwUsersEnterprises
AS

SELECT dbo.UsersToEnterprises.EnterpriseStatisticId, dbo.UsersToEnterprises.UserId, dbo.Users.[Login]
FROM dbo.EnterpriseStatistics
INNER JOIN dbo.UsersToEnterprises ON dbo.EnterpriseStatistics.Id = dbo.UsersToEnterprises.EnterpriseStatisticId
INNER JOIN dbo.Users ON dbo.UsersToEnterprises.UserId = dbo.Users.Id 

GO

CREATE VIEW vwRoles
AS

SELECT dbo.Roles.[Name]
FROM dbo.Roles

GO

CREATE VIEW vwEmployeesPenalties
AS

SELECT dbo.EmployeesToPenalties.EmployeeId, dbo.EmployeesToPenalties.PenaltyId, dbo.Employees.[Name], dbo.Employees.Surname, dbo.Penalties.Amount, dbo.Penalties.[Date], dbo.Penalties.Reason
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPenalties ON dbo.Employees.Id = dbo.EmployeesToPenalties.EmployeeId
INNER JOIN dbo.Penalties ON dbo.EmployeesToPenalties.PenaltyId = dbo.Penalties.Id
WHERE Employees.IsArchived = 0;

GO

CREATE VIEW vwEmployeesPenaltiesArchived
AS

SELECT dbo.EmployeesToPenalties.EmployeeId, dbo.EmployeesToPenalties.PenaltyId, dbo.Employees.[Name], dbo.Employees.Surname, dbo.Penalties.Amount, dbo.Penalties.[Date], dbo.Penalties.Reason
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPenalties ON dbo.Employees.Id = dbo.EmployeesToPenalties.EmployeeId
INNER JOIN dbo.Penalties ON dbo.EmployeesToPenalties.PenaltyId = dbo.Penalties.Id
WHERE Employees.IsArchived = 1;

GO

CREATE VIEW vwEmployeesPremiumsNonArchived
AS

SELECT dbo.EmployeesToPremiums.EmployeeId, dbo.EmployeesToPremiums.PremiumId, dbo.Employees.[Name], dbo.Employees.Surname, dbo.Premiums.Amount, dbo.Premiums.[Date]
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPremiums ON dbo.Employees.Id = dbo.EmployeesToPremiums.EmployeeId
INNER JOIN dbo.Premiums ON dbo.EmployeesToPremiums.PremiumId = dbo.Premiums.Id
WHERE Employees.IsArchived = 0;

GO

CREATE VIEW vwEmployeesPremiumsArchived
AS

SELECT dbo.EmployeesToPenalties.EmployeeId, dbo.EmployeesToPenalties.PenaltyId, dbo.Employees.[Name], dbo.Employees.Surname, dbo.Penalties.Amount, dbo.Penalties.[Date], dbo.Penalties.Reason
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPenalties ON dbo.Employees.Id = dbo.EmployeesToPenalties.EmployeeId
INNER JOIN dbo.Penalties ON dbo.EmployeesToPenalties.PenaltyId = dbo.Penalties.Id
WHERE Employees.IsArchived = 1;

GO

CREATE VIEW vwPremiumsArchived
AS

SELECT dbo.Premiums.Id, dbo.Premiums.Amount, dbo.Premiums.[Date]
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPremiums ON dbo.Employees.Id = dbo.EmployeesToPremiums.EmployeeId
INNER JOIN dbo.Premiums ON dbo.EmployeesToPremiums.PremiumId = dbo.Premiums.Id
WHERE Employees.IsArchived = 1

GO

CREATE VIEW vwPremiumsNonArchived
AS

SELECT dbo.Premiums.Id, dbo.Premiums.Amount, dbo.Premiums.[Date]
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPremiums ON dbo.Employees.Id = dbo.EmployeesToPremiums.EmployeeId
INNER JOIN dbo.Premiums ON dbo.EmployeesToPremiums.PremiumId = dbo.Premiums.Id
WHERE Employees.IsArchived = 0

GO

CREATE VIEW vwPenaltiesArchived
AS

SELECT dbo.Penalties.Id, dbo.Penalties.Amount, dbo.Penalties.[Date]
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPenalties ON dbo.Employees.Id = dbo.EmployeesToPenalties.EmployeeId
INNER JOIN dbo.Penalties ON dbo.EmployeesToPenalties.PenaltyId = dbo.Penalties.Id
WHERE Employees.IsArchived = 1

GO

CREATE VIEW vwPenaltiesNonArchived
AS

SELECT dbo.Penalties.Id, dbo.Penalties.Amount, dbo.Penalties.[Date]
FROM dbo.Employees
INNER JOIN dbo.EmployeesToPenalties ON dbo.Employees.Id = dbo.EmployeesToPenalties.EmployeeId
INNER JOIN dbo.Penalties ON dbo.EmployeesToPenalties.PenaltyId = dbo.Penalties.Id
WHERE Employees.IsArchived = 0

GO

CREATE VIEW vwEmployeesArchived
AS

SELECT *
FROM Employees
WHERE IsArchived = 1

GO

CREATE VIEW vwEmployeesNonArchived
AS

SELECT *
FROM Employees
WHERE IsArchived = 0

GO