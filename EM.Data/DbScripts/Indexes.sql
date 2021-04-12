CREATE INDEX IX_Penalties_Date ON Penalties (
	[Date]
) WITH (ONLINE = ON)

GO

CREATE INDEX IX_Premiums_Date ON Premiums (
	[Date]
) WITH (ONLINE = ON)

GO

CREATE INDEX IX_Employees_Salary ON Employees (
	[Salary]
) WITH (ONLINE = ON)

GO

CREATE INDEX IX_EnterpriseStatistics_Date ON EnterpriseStatistics (
	[Date]
) WITH (ONLINE = ON)

GO

CREATE INDEX IX_User_Login ON Users (
	Id
) WITH (ONLINE = ON)