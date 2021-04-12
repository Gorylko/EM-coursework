CREATE LOGIN MyAdministrator
WITH PASSWORD = 'htoya228lalalaRE'

CREATE LOGIN MyUser1
WITH PASSWORD = 'htoya228lalalaRE'

CREATE LOGIN MyUser2
WITH PASSWORD = 'htoya228lalalaRE'

CREATE LOGIN MyGuest1
WITH PASSWORD = 'htoya228lalalaRE'

CREATE LOGIN Vobla
WITH PASSWORD = 'htoya228lalalaRE'

USE EmDb

CREATE USER MyAdmin FOR LOGIN MyAdministrator
CREATE USER UserWithMaxRight FOR LOGIN MyUser1
CREATE USER UserWithMinRight FOR LOGIN MyUser2
CREATE USER GuestWithMaxRight FOR LOGIN MyGuest1
CREATE USER GuestWithMinRight FOR LOGIN Vobla

/*Пользователям UserWithMaxRight и UserWithMinRight предоставляются разрешение на создание таблиц и хранимых процедур, выполнение хранимых процедур, разрешение извлекать данные из таблицы или представления, разрешение модифицировать существующие данные в таблице или представлении, разрешение на вставку новых данных в таблицы, а также право самому предоставлять это разрешение другим пользователям базы данных.*/

USE EmDb
GRANT CREATE TABLE, CREATE PROCEDURE, EXECUTE, DELETE, SELECT, INSERT, UPDATE
TO UserWithMaxRight, UserWithMinRight
WITH GRANT OPTION

/*Пользователю UserWithMinRight запрещется производить операции вставки, удаления и обновления в таблице User, а так же разрешения, запрещенные пользователю UserWithMinRight , будут также запрещены пользователям, которым он их предоставил*/

USE EmDb
DENY INSERT ON [User] TO UserWithMinRight CASCADE
DENY UPDATE ON [User] TO UserWithMinRight CASCADE
DENY DELETE ON [User] TO UserWithMinRight CASCADE

/*Пользователю GuestWithMaxRight предоставлены права на разрешение извлекать данные из таблицы или представления, а так же выполнять хранимые процедуры*/

USE EmDb
GRANT SELECT, EXECUTE
TO GuestWithMaxRight

/*Пользователю GuestWithMinRight запрещается извлекать из таблицы User поле Password, так же запрещается выполнять хранимые процедуры*/

USE EmDb
DENY SELECT ON [User](Password) TO GuestWithMinRight
DENY EXECUTE TO GuestWithMinRight