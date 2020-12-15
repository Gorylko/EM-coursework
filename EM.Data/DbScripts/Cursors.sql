USE EmDb

DECLARE UserCredCursor CURSOR
	SCROLL
	KEYSET
	TYPE_WARNING
FOR

SELECT PasswordSalt, [Password], Id
FROM dbo.Users

GO

DECLARE RolesCursor CURSOR
	GLOBAL
	KEYSET
	TYPE_WARNING
FOR

SELECT *
FROM vwUsersRoles

GO

DECLARE EmployeesPenaltiesNonArchivedCursor CURSOR
	GLOBAL
	SCROLL
	TYPE_WARNING
FOR

SELECT *
FROM vwEmployeesPenaltiesNonArchived

GO

DECLARE LoginCursor CURSOR
	GLOBAL
	SCROLL
	KEYSET
FOR

SELECT Id, [Login]
FROM dbo.Users

GO

DECLARE EmployeesPremiumsNonArchivedCursor CURSOR
	GLOBAL
	SCROLL
	KEYSET
	TYPE_WARNING
FOR

SELECT *
FROM vwEmployeesPremiumsNonArchived

GO

DECLARE @name VARCHAR(50) -- database name 
DECLARE @path VARCHAR(256) -- path for backup files 
DECLARE @fileName VARCHAR(256) -- filename for backup 
DECLARE @fileDate VARCHAR(20) -- used for file name 

SET @path = 'C:\Backup\' 

SELECT @fileDate = CONVERT(VARCHAR(20),GETDATE(),112) 

DECLARE db_cursor CURSOR FOR 
SELECT name 
FROM MASTER.dbo.sysdatabases 
WHERE name NOT IN ('master','model','msdb','tempdb') 

OPEN db_cursor  
FETCH NEXT FROM db_cursor INTO @name  

WHILE @@FETCH_STATUS = 0  
BEGIN  
      SET @fileName = @path + @name + '_' + @fileDate + '.BAK' 
      BACKUP DATABASE @name TO DISK = @fileName 

      FETCH NEXT FROM db_cursor INTO @name 
END 

CLOSE db_cursor  
DEALLOCATE db_cursor 

GO

