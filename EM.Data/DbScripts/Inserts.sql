USE EmDb;

INSERT INTO Roles
VALUES
('Admin'),
('Moder'),
('Editor')

INSERT INTO Users 
VALUES
('Egor666', NULL, NULL),
('Kiryl223', NULL, NULL),
('Grishaaa', NULL, NULL)

INSERT INTO UsersToRoles
VALUES
(1, 1),
(2, 2),
(3, 3)

INSERT INTO EnterpriseStatistics 
VALUES
(231, '2016-06-10'),
(222, '2018-11-10'),
(311, '2019-10-10')

INSERT INTO UsersToEnterprises 
VALUES
(1, 5),
(2, 6),
(3, 7)

INSERT INTO Employees 
VALUES
('Vova', 'Lujou', 0),
('Kostya', 'Panin', 0),
('Stepan', 'Liceev', 0)

INSERT INTO Employees 
VALUES
('Vova', 'Lujou', 0),
('Kostya', 'Panin', 0),
('Stepan', 'Liceev', 0)