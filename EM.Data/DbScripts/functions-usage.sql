INSERT INTO EmployeeInfos
VALUES (LOWER('Age'), UPPER('21'))

UPDATE EmployeeInfos
SET [Name] = SUBSTRING([Name], 1, 5)
WHERE LEN([Name]) > 5

DELETE EmployeeInfos
WHERE LEN([Name]) < 2

GO

INSERT INTO Employees
VALUES (LOWER('Vasya'), UPPER('Pupkin'), LEN('lalalalalala'))

UPDATE Employees
SET [Name] = UPPER('banned')
WHERE LEN([Name]) > 5

DELETE Employees
WHERE LEN([Name]) < 2

GO


INSERT INTO EnterpriseStatistics
VALUES (ABS(-23), GETDATE())

UPDATE EnterpriseStatistics
SET [Date] = GETDATE()
WHERE [Date] != GETDATE()

DELETE EnterpriseStatistics
WHERE AVG([TotalCosts]) < 100

GO

INSERT INTO Penalties
VALUES (ABS(-33), GETDATE())

UPDATE Penalties
SET [Date] = GETDATE()
WHERE [Date] != GETDATE()

DELETE Penalties
WHERE AVG(Amount) < 100

GO

INSERT INTO Premiums
VALUES (ABS(-73), GETDATE())

UPDATE Premiums
SET [Date] = GETDATE()
WHERE [Date] != GETDATE()

DELETE Premiums
WHERE AVG(Amount) < 100

GO

INSERT INTO Roles
VALUES (LOWER('Custom'))

UPDATE Roles
SET [Name] = SUBSTRING([Name], 1, 5)
WHERE LEN([Name]) > 5

DELETE Roles
WHERE LEN([Name]) < 2

GO