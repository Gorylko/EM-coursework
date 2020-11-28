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

INSERT INTO Employees([Name],[Surname],[IsArchived]) VALUES('Basil','Keith','0'),('Emi','Fitzpatrick','1'),('Aaron','Chambers','0'),('Roanna','Bryant','0'),('Caesar','Wade','1'),('Vernon','Henderson','1'),('Lars','Gonzalez','0'),('Cain','Lynn','0'),('Brock','Todd','1'),('Ignatius','Schwartz','1'),('Paul','Watts','0'),('Gemma','Hernandez','0'),('Indigo','Wells','1'),('Cameron','Kent','0'),('Aline','Hester','0'),('April','Gill','1'),('Robert','Salinas','0'),('Nathan','Snider','1'),('Gavin','Morrow','1'),('Constance','Rasmussen','0'),('Carson','Weeks','1'),('Wynne','Horn','0'),('Harriet','Moore','0'),('Kenyon','Noble','0'),('Lillian','Erickson','0'),('Jemima','House','1'),('Tallulah','Hale','1'),('Rylee','Lowery','0'),('Kiona','Mcgee','0'),('Illiana','Walker','1'),('Daryl','Hardy','1'),('Naida','Case','0'),('Daryl','Chapman','1'),('Fritz','Day','1'),('Tasha','Mcclure','1'),('Barclay','Bond','0'),('Bevis','Faulkner','1'),('Whilemina','Sanchez','1'),('Brian','Marshall','1'),('Jelani','Allison','0'),('Brody','Abbott','1'),('Hiroko','Farmer','1'),('Blossom','Duffy','0'),('Sonia','Cohen','1'),('Brendan','Swanson','1'),('Tatyana','Mccullough','0'),('Nehru','Yates','0'),('Belle','West','1'),('Morgan','Hodges','0'),('Rigel','Lara','1'),('Channing','Cardenas','1'),('Luke','Townsend','0'),('Kevyn','Wynn','0'),('Macaulay','Goodwin','0'),('Thor','Winters','0'),('Mannix','Swanson','0'),('Myra','Buckley','1'),('Dillon','Lynch','1'),('Signe','Hess','1'),('Kerry','Hoffman','1'),('Randall','Hanson','1'),('Ryder','Dawson','0'),('Lillith','Patrick','0'),('Jermaine','Dorsey','0'),('Zane','Cummings','1'),('Mollie','Lynch','1'),('May','Clay','0'),('Chantale','Burke','0'),('Vance','Buckner','0'),('Jacqueline','Simpson','0'),('Megan','Madden','0'),('Sawyer','Mcdowell','0'),('Moses','Hopper','0'),('Kasimir','Church','0'),('Nell','Vance','1'),('Jolene','Richard','0'),('Connor','Nash','0'),('Basil','Mcmillan','0'),('Neve','Mcfarland','0'),('Ruby','Hernandez','0'),('Reese','Eaton','0'),('Eugenia','Morgan','1'),('Keane','Hopper','1'),('Kirestin','Moore','0'),('Ishmael','Slater','1'),('Wilma','Gonzalez','1'),('Brady','Lopez','1'),('Cruz','England','1'),('Hedy','Cooley','0'),('Marshall','Gomez','0'),('Hasad','Trujillo','0'),('Amy','Sandoval','0'),('Melodie','Williamson','0'),('John','Avery','1'),('Madeson','Mccarty','0'),('Jerome','Murray','1'),('Valentine','Henry','1'),('Linus','Stevens','1'),('Abdul','Patrick','1'),('Ethan','Flowers','1');
INSERT INTO Employees([Name],[Surname],[IsArchived]) VALUES('Maris','Cabrera','0'),('Moana','Burch','0'),('Kylee','Finch','0'),('Porter','Schwartz','0'),('Gregory','Kinney','0'),('Raja','Clayton','1'),('Fritz','Dale','0'),('Ulla','Kane','0'),('Lee','Durham','1'),('Tyler','Sharp','0'),('Ezekiel','Hyde','0'),('Mia','Camacho','0'),('Eaton','Guy','0'),('Henry','Obrien','1'),('Dexter','Rosa','0'),('Colt','Rowe','0'),('Craig','Vinson','1'),('Herrod','Knapp','1'),('Len','Collins','1'),('Solomon','Hatfield','1'),('Karen','Bell','0'),('Karyn','Watts','1'),('Alisa','Marsh','1'),('Nicholas','Powers','0'),('Tanisha','Gutierrez','0'),('Nadine','Grant','1'),('Wing','Buckley','0'),('Ila','Mcneil','0'),('Cameran','Henson','1'),('May','Myers','1'),('Jared','Baird','1'),('Hedy','Bryant','1'),('Lavinia','Mccormick','1'),('Britanney','Holden','1'),('Cedric','Keith','0'),('Carol','Velez','1'),('Angela','Hernandez','0'),('Tanya','Browning','0'),('Kiayada','Berg','1'),('Ryan','Maxwell','0'),('Fitzgerald','Bright','0'),('Flynn','Garza','0'),('Anne','Potter','0'),('Noelle','Carter','0'),('Hyacinth','Mills','0'),('Herrod','Torres','1'),('Eagan','Clemons','0'),('August','Warner','1'),('Dolan','Love','0'),('Stella','Leon','0'),('Octavius','Huffman','1'),('Shelley','Morse','0'),('Coby','Rollins','1'),('Ifeoma','Rodriguez','0'),('Kasimir','Patel','1'),('Caleb','Page','0'),('Charles','Mcintosh','0'),('Lance','Hoffman','0'),('Nash','Clay','0'),('Shana','Rodriquez','0'),('Jana','England','1'),('Salvador','Burns','1'),('Len','Cain','1'),('Wyatt','Lindsay','0'),('Ralph','Terry','1'),('Tobias','Peters','1'),('Rachel','Rodriguez','0'),('Castor','Herrera','0'),('McKenzie','Robinson','1'),('Hammett','Webster','0'),('Emma','Melton','1'),('Sloane','Warner','0'),('Paki','Kelly','0'),('Carolyn','Sherman','1'),('Kadeem','Roach','0'),('Idola','Haney','1'),('Sonia','Douglas','1'),('Hanae','Warren','0'),('Ivor','Mcclain','1'),('Byron','Carter','1'),('Kyle','Oliver','0'),('Sybill','Gibbs','1'),('Sybill','Michael','0'),('Malcolm','Nichols','0'),('Amos','Lynch','1'),('Quentin','Farley','0'),('Bruno','Wise','0'),('Armand','Brewer','0'),('Timothy','Lindsay','0'),('Lewis','Mccullough','0'),('Reece','Robbins','1'),('Quynn','Armstrong','0'),('Lionel','Emerson','1'),('Lyle','Kerr','1'),('Patrick','Bentley','0'),('Bert','Stevens','1'),('Sebastian','Mcknight','0'),('Alan','Preston','1'),('Ali','Peters','1'),('Angela','Fleming','0');

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