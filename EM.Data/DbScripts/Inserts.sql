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
(1, 1),
(2, 2),
(3, 3)

INSERT INTO EmployeeInfos 
VALUES
('Age', '54', 1),
('Age','32', 2),
('Age', '22', 3)

INSERT INTO Premiums 
VALUES
(123, '2016-06-10'),
(333, '2018-11-10'),
(322, '2019-10-10')

INSERT INTO EmployeesToPremiums 
VALUES
(1, 1),
(2, 2),
(3, 3)

INSERT INTO Penalties 
VALUES
(123, '2016-06-10', 'deadlines expired'),
(233, '2018-11-10', 'deadlines expired'),
(322, '2019-10-10', 'deadlines expired')

INSERT INTO EmployeesToPenalties 
VALUES
(1, 1),
(2, 2),
(3, 3)