use task1;
create table EMPLOYEE (
	EmployeeID INT PRIMARY KEY,
	EmployeeName VARCHAR(50) NOT NULL,
	Department VARCHAR(50)NOT NULL ,
	DateOfBirth DATE,
	Designation VARCHAR(20), 
	Address VARCHAR(100),
	MobileNumber INT, 
	Email VARCHAR(50) UNIQUE
);

ALTER TABLE EMPLOYEE ADD COLUMN Salary INT;
ALTER TABLE EMPLOYEE CHANGE DateOfBirth EmployeeDOB DATE;
ALTER TABLE EMPLOYEE CHANGE MobileNumber MobileNumber bigint;

INSERT INTO EMPLOYEE (EmployeeID,EmployeeName,EmployeeDOB,Designation,Address,MobileNumber,Email,Salary)
VALUES (10,'Mohamed','1991-12-09','TeamLead','Villupuram',9597702487,'mohamed@gmail.com',50000),
(11,'Hussain','1997-11-14','Manager','Ariyur',7599902487,'hussain@gmail.com',40000),
(12,'Karthik','1999-01-02','Senior Dveloper','Trichy',8597702487,'karthi@gmail.com',35000),
(13,'Kalai','2000-02-06','TeamLead','Chennai',7995202487,'kalai@gmail.com',40000);
INSERT INTO EMPLOYEE(EmployeeID,EmployeeName,EmployeeDOB) VALUES (15,'ram','2000-02-06');
SELECT*FROM EMPLOYEE;
ALTER TABLE EMPLOYEE DROP COLUMN Department;
DROP TABLE Department;
CREATE TABLE Department (
  DeptID int,
  DeptName varchar(30),
  EmployeeID int,
   FOREIGN KEY (EmployeeID) REFERENCES EMPLOYEE(EmployeeID)
);

INSERT INTO `department` (`DeptID`, `DeptName`, `EmployeeID`) VALUES
(101, 'Training', 10),
(102, 'Testing', 11),
(103, 'Design', 12),
(104, 'Training', 13);

SELECT* FROM Department;

update  EMPLOYEE SET EmployeeName='Arun' WHERE EmployeeID=15;
-- LEFT JOIN
SELECT * FROM EMPLOYEE LEFT JOIN Department ON EMPLOYEE.EmployeeID = Department.EmployeeID;

-- INNER JOIN
SELECT * FROM EMPLOYEE INNER JOIN Department ON EMPLOYEE.EmployeeID = Department.EmployeeID;

-- RIGHT JOIN
SELECT * FROM EMPLOYEE RIGHT JOIN Department ON EMPLOYEE.EmployeeID = Department.EmployeeID;
