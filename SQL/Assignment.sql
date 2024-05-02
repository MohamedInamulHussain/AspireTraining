/*
 * Title : DBMS SQL Assignment
 * Author : KRISHNA G
 * Created At : 06-04-2024
 * Last Modified Date : 07-04-2024
 * Reviewed By :
 * Review Date :
 */

 --programmer
CREATE TABLE `programmer` (
  `name` varchar(8) NOT NULL,
  `dob` date NOT NULL,
  `doj` date NOT NULL,
  `sex` varchar(1) NOT NULL,
  `prof1` varchar(8) DEFAULT NULL,
  `prof2` varchar(8) DEFAULT NULL,
  `salary` int(4) NOT NULL
)
INSERT INTO `programmer` (`name`, `dob`, `doj`, `sex`, `prof1`, `prof2`, `salary`) VALUES
('somdutt', '1966-04-20', '1992-04-21', 'm', 'pascal', 'basic', 3200),
('ram', '1975-06-20', '1995-10-15', 'm', 'dbase', 'COBOL', 4800),
('rajesh', '1982-12-08', '2000-04-25', 'm', 'Pascal', 'C', 4300),
('ramesh', '1978-03-17', '1998-09-05', 'm', 'C', 'BASIC', 3600),
('mary', '1985-09-30', '2005-02-12', 'f', 'COBOL', 'Pascal', 3900);

--software
CREATE TABLE `software` (
  `name` varchar(8) NOT NULL,
  `title` varchar(20) NOT NULL,
  `dev_in` varchar(8) NOT NULL,
  `scost` decimal(7,2) DEFAULT NULL,
  `dcost` int(5) DEFAULT NULL,
  `sold` int(3) DEFAULT NULL
)
INSERT INTO `software` (`name`, `title`, `dev_in`, `scost`, `dcost`, `sold`) VALUES
('Somdutt', 'Parachutes', 'Basic', 399.95, 6000, 43),
('Somdutt', 'Accounting Software', 'Basic', 399.95, 6000, 43),
('Ram', 'Inventory Management', 'dbase', 500.50, 3000, 30),
('Rajesh', 'Data Analysis Tool', 'Pascal', 799.75, 4500, 35),
('ramesh', 'Web Development Fram', 'C', 600.25, 4000, 40),
('mary', 'Document Management ', 'COBOL', 899.00, 5000, 50);

--studies
CREATE TABLE `studies` (
  `name` varchar(8) NOT NULL,
  `splace` varchar(9) NOT NULL,
  `course` varchar(5) NOT NULL,
  `ccost` varchar(5) NOT NULL
)
INSERT INTO `studies` (`name`, `splace`, `course`, `ccost`) VALUES
('Somdutt', 'sabhari', 'PGDCA', '1000'),
('Ram', 'bdps', 'DCS', '1500'),
('Rajesh', 'sabhari', 'PGDCA', '1000'),
('ramesh', 'bdps', 'DCS', '1500'),
('mary', 'sabhari', 'PGDCA', '1000');

 --Assignment1
SELECT AVG(scost) FROM Software WHERE dev_in = "pascal";
SELECT name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM programmer;
SELECT programmer.name, TIMESTAMPDIFF(YEAR, programmer.dob, CURDATE()) AS age FROM programmer JOIN studies  ON programmer.name = studies.name WHERE studies.course = 'DCS';
SELECT dev_in, MAX(sold) AS highest_number_copies FROM software;
SELECT name, dob FROM programmer WHERE MONTH(dob) = 1;
SELECT course,MIN(ccost) FROM studies; 
SELECT COUNT(course) FROM studies WHERE course='pgdca';
SELECT SUM(scost * sold) AS total_revenue FROM software WHERE dev_in = 'C';
SELECT * FROM software WHERE name='ramesh';
SELECT COUNT(splace) FROM studies WHERE splace='sabhari';
SELECT * FROM software WHERE sold>=20000; 
SELECT title, CEIL(dcost / scost) AS copies_to_sell FROM software;
SELECT title, max(scost) from software WHERE dev_in = 'basic';
SELECT * FROM software WHERE SOLD>= CEIL(scost/dcost);
SELECT COUNT(dev_in) FROM software WHERE dev_in = 'dbase';
SELECT COUNT(name) FROM studies WHERE splace ='paragathi';
SELECT COUNT(name) FROM studies WHERE ccost  BETWEEN 5000 AND 10000;
SELECT AVG(ccost) FROM studies;
SELECT * FROM programmer WHERE prof1 ='C' OR prof2 ='C';
SELECT COUNT(name) from programmer WHERE prof1 in ('cobal','pascal') or prof2 in ('cobal', 'pascal');
SELECT COUNT(name) from programmer WHERE prof1 NOT IN ('c','pascal') AND prof2 NOT IN ('c', 'pascal');
SELECT MAX(timestampdiff(year,dob,CURDATE())) AS oldest FROM programmer ;
SELECT avg(TIMESTAMPDIFF(year,dob,CURDATE())) AS avg_age FROM programmer WHERE sex= 'f';
SELECT TIMESTAMPDIFF(year,dob,CURDATE()) AS experience FROM programmer order BY experience DESC;
SELECT name FROM programmer WHERE MONTH(dob)=MONTH(CURDATE());
SELECT COUNT(name) from programmer where sex='f';
SELECT DISTINCT prof1 FROM programmer WHERE sex ='m' UNION SELECT DISTINCT prof2 FROM programmer WHERE sex ='m';
SELECT AVG(salary) FROM programmer;
SELECT COUNT(name) from programmer WHERE salary BETWEEN 2000 AND 4000; 
SELECT * FROM programmer where prof1 NOT IN('pascal','clipper','cobol') AND prof2 NOT IN('pascal','clipper','cobol');
SELECT COUNT(name) FROM programmer WHERE sex ='f' AND prof1 ='C' AND TIMESTAMPDIFF(YEAR, dob, CURDATE()) > 24 OR prof2 ='C' AND TIMESTAMPDIFF(YEAR, dob, CURDATE()) > 24;
SELECT * FROM programmer WHERE DAY(dob) BETWEEN DAY(CURDATE()) AND DAY(CURDATE() + INTERVAL 7 DAY) AND MONTH(dob) = MONTH(CURDATE());
SELECT * FROM programmer WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) <1;
SELECT * FROM programmer WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) =2;
SELECT (dcost - (scost * sold)) AS amount_need FROM software WHERE dcost > (scost * sold);
SELECT * FROM software WHERE sold = 0;
SELECT scost FROM software WHERE name= 'mary';
SELECT DISTINCT course FROM studies;
SELECT COUNT(DISTINCT course) as course FROM studies;
SELECT name FROM Programmer WHERE name LIKE '%A%A%';
SELECT name FROM programmer WHERE LENGTH(name)= 5;
SELECT * FROM programmer WHERE sex='f' AND (prof1= 'cobol' AND TIMESTAMPDIFF(year,doj,CURDATE())=2) OR (prof2= 'cobol' AND TIMESTAMPDIFF(year,doj,CURDATE())=2);
SELECT MIN(LENGTH(name)) AS min FROM programmer;
SELECT AVG(dcost) FROM software WHERE dev_in='cobol';
--45
SELECT name from programmer WHERE(LAST_day(dob)=DAY(dob));
SELECT name, salary FROM programmer WHERE sex='m' AND prof1 NOT in ('cobol') AND prof2 NOT IN ('cobol');
SELECT title , scost, dcost, (scost-dcost) AS profit FROM software ORDER BY profit DESC;
SELECT name, dob, doj FROM programmer WHERE MONTH(dob) = MONTH(doj);
SELECT title FROM software WHERE title LIKE '% %';

--ASSIGNMENT 2
SELECT dev_in,COUNT(title)  from software GROUP BY dev_in;
SELECT name, COUNT(*) AS num FROM software GROUP BY title;
SELECT sex,COUNT(*) AS num FROM programmer GROUP BY sex;
SELECT dev_in,MAX(scost),MAX(sold) FROM software GROUP BY dev_in;
SELECT YEAR(dob) AS birthyear, count(*) as num from programmer GROUP BY dob;
SELECT YEAR(doj) AS birthyear, count(*) as num from programmer GROUP BY doj;
SELECT MONTH(dob) AS birthmonth, count(*) as num from programmer GROUP BY dob;
SELECT MONTH(doj) AS birthmonth, count(*) as num from programmer GROUP BY doj;
SELECT prof1,count(*) from programmer GROUP BY prof1;
SELECT prof2,count(*) from programmer GROUP BY prof2;
--11
SELECT splace, COUNT(*) AS num from studies GROUP BY splace;
SELECT course, COUNT(*) AS num from studies GROUP BY course;
SELECT dev_in, sum(dcost) AS num from software GROUP BY dev_in;
SELECT dev_in, sum(scost) AS sellingcost from software GROUP BY dev_in;
SELECT name, sum(dcost) AS total from software GROUP BY name;
SELECT name, sum(scost*sold) AS cost from software GROUP BY name;
SELECT name, COUNT(*) packages from software GROUP BY name;
SELECT dev_in ,sum(scost) as sellingcost from software GROUP BY dev_in;
SELECT name ,MIN(dcost) AS cheap ,MAX(dcost) AS costliest  FROM software GROUP BY name;
SELECT dev_in ,AVG(DCOST),AVG(SCOST),AVG(SCOST) FROM software GROUP BY dev_in;
SELECT SPLACE,COUNT(course),AVG(ccost) FROM studies GROUP BY splace;
SELECT SPLACE,COUNT(name) FROM studies GROUP BY splace;
SELECT name,sex from programmer;
SELECT name,title FROM software ORDER BY name;
SELECT dev_in, COUNT(title) FROM software GROUP BY dev_in;
SELECT dev_in, COUNT(dcost) AS dcost FROM software WHERE dcost < 1000 GROUP BY dev_in;
SELECT dev_in, AVG(scost - dcost) AS avg_costdifference FROM software GROUP BY dev_in;
--29
SELECT MAX(salary), MIN(salary),AVG(salary) FROM   programmer WHERE salary > 2000;

--Assignment 3
SELECT name,  MAX(salary) FROM programmer WHERE prof1 ='C' OR prof2 ='C';
SELECT name,  MAX(salary) FROM programmer WHERE sex='f' and (prof1 ='C' OR prof2 ='C');
SELECT DISTINCT name, salary, prof1 FROM programmer WHERE (salary,prof1) IN (SELECT MAX(salary),prof1 FROM programmer GROUP BY prof1);
SELECT name, TIMESTAMPDIFF(year,doj,CURDATE())AS experience FROM programmer GROUP BY experience LIMIT 1;
SELECT name, TIMESTAMPDIFF(year,doj,CURDATE())AS experience FROM programmer GROUP BY experience DESC LIMIT 1;
SELECT prof1 AS language FROM programmer GROUP BY prof1 HAVING COUNT(*) = 1  UNION SELECT prof2 FROM programmer GROUP BY prof2 HAVING COUNT(*) = 1;
SELECT name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM programmer WHERE prof1 = 'DBASE' OR prof2 = 'DBASE' ORDER BY dob ASC LIMIT 1;
SELECT splace AS institute, COUNT(*) AS num FROM studies GROUP BY splace ORDER BY num DESC LIMIT 1;
--9
SELECT * FROM programmer WHERE sex = 'f' AND salary > 3000 AND prof1 NOT IN ('C', 'C++', 'Oracle', 'Dbase') AND prof2 NOT IN ('C', 'C++', 'Oracle', 'Dbase');
SELECT course, MAX(ccost) AS cost FROM studies GROUP BY course ORDER BY cost DESC LIMIT 1;
SELECT course, COUNT(*) AS num FROM studies GROUP BY course ORDER BY num DESC LIMIT 1;
SELECT splace, course FROM studies GROUP BY splace, course HAVING AVG(ccost) < (SELECT AVG(ccost) FROM studies);
SELECT splace AS institute, course, MAX(ccost) AS costliest FROM studies GROUP BY splace, course ORDER BY costliest DESC LIMIT 1;
SELECT course FROM studies GROUP BY course HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT course, COUNT(*) AS num_students FROM studies GROUP BY course) AS subquery);
SELECT splace,course FROM studies GROUP BY splace, course HAVING COUNT(*) < (SELECT AVG(num_students) FROM (SELECT splace, course, COUNT(*) AS num_students FROM studies GROUP BY splace, course) AS subquery);
SELECT course FROM studies WHERE ccost < (SELECT AVG(ccost)+1000 FROM studies) AND ccost > (SELECT AVG(ccost)-1000 FROM studies);
SELECT title FROM software WHERE dcost = (SELECT MAX(dcost) FROM software);
SELECT title FROM software WHERE scost = (SELECT MIN(scost) FROM software);
SELECT name FROM programmer WHERE name IN (SELECT name FROM software WHERE sold = (SELECT MIN(sold) FROM software));
SELECT dev_in FROM software WHERE scost = (SELECT MAX(scost) FROM software);
SELECT sold FROM software WHERE ABS(scost - dcost) = (SELECT MIN(ABS(scost - dcost)) FROM software);
SELECT title FROM software WHERE dev_in = 'Pascal' ORDER BY scost DESC LIMIT 1;
SELECT dev_in FROM software GROUP BY dev_in ORDER BY COUNT(*) DESC LIMIT 1;
SELECT name FROM software GROUP BY name HAVING MAX(name) = (SELECT MAX(name) FROM software);
SELECT name FROM software ORDER BY scost DESC LIMIT 1;
SELECT title FROM software WHERE sold < (SELECT AVG(sold) FROM software);
SELECT name FROM programmer WHERE sex = 'f' AND salary > (SELECT MAX(salary) FROM programmer WHERE sex = 'm' );
SELECT prof1 FROM programmer GROUP BY prof1 ORDER BY COUNT(*) DESC LIMIT 1;
SELECT name FROM programmer WHERE name IN (SELECT name FROM software WHERE scost > (2 * dcost));
--31
SELECT name FROM programmer WHERE sex = 'm' AND dob = (SELECT MIN(dob) FROM programmer WHERE sex = 'm' AND dob LIKE '1965%' );
--33
SELECT name FROM programmer WHERE sex = 'f' AND doj = (SELECT MAX(doj) FROM programmer WHERE sex = 'f' AND doj LIKE '1992%' );
SELECT YEAR(dob), COUNT(*) AS num FROM programmer GROUP BY YEAR(dob) ORDER BY num DESC LIMIT 1;
SELECT MONTH(doj), COUNT(*) AS num FROM programmer GROUP BY MONTH(doj) ORDER BY num DESC LIMIT 1;
SELECT dev_in AS language, COUNT(*) AS num FROM software GROUP BY dev_in ORDER BY num DESC LIMIT 1;
SELECT name FROM programmer WHERE sex ='m' AND salary <(SELECT AVG(salary) FROM programmer WHERE sex = 'f');

--ASSIGNMENT 4
SELECT * FROM programmer WHERE salary IN (SELECT salary FROM programmer GROUP BY salary HAVING COUNT(*) > 1);
SELECT software.* FROM software JOIN programmer ON software.name = programmer.name WHERE programmer.sex = 'm' AND programmer.salary > 3000;
SELECT * FROM software WHERE dev_in = 'PASCAL' AND name IN (SELECT name FROM programmer WHERE sex = 'f');
SELECT * FROM programmer WHERE YEAR(doj) < 1990;
select s.* from software s,studies st,programmer p where s.name=st.name and p.name=s.name and sex='f' and splace='pragathi';
Select studies.splace, count(software.dev_in), count(software.sold), sum(software.sold*software.scost) from software,studies where software.name=studies.name group by studies.splace;
--7
SELECT s.* FROM software s JOIN programmer p ON s.name = p.name WHERE (p.sex = 'm' AND p.dob < '1965-01-01') OR (p.sex = 'f' AND p.dob > '1975-12-31');
SELECT s.* FROM software s JOIN programmer p ON s.name = p.name WHERE s.dev_in <> p.prof1;
SELECT s.* FROM software s JOIN programmer p ON s.name = p.name WHERE s.dev_in <> p.prof1 AND s.dev_in <> p.prof2;
select s.* from programmer p,software s,studies st where p.name=s.name and s.name=st.name and sex='m' and splace='sabhari';
SELECT p.name FROM programmer p LEFT JOIN software s ON p.name = s.name WHERE s.name IS NULL;
SELECT SUM(scost) FROM software s,studies st WHERE s.name=st.name and splace='apple';
SELECT a.name,a.doj FROM programmer a,programmer b WHERE a.doj=b.doj and a.name <> b.name;
SELECT p1.name AS programmer1, p2.name AS programmer2, p1.prof2 FROM programmer p1 JOIN programmer p2 ON p1.prof2 = p2.prof2 AND p1.name <> p2.name;
SELECT studies.splace,SUM(software.sold*software.scost) FROM software,studies WHERE studies.name=software.name GROUP BY studies.splace;
--17
--18
SELECT p.name, p.salary, s.course FROM programmer p JOIN ( SELECT name, MAX(scost * sold) AS highest_sales FROM software) AS max_sales ON p.name = max_sales.name JOIN studies s ON p.name = s.name;
SELECT programmer.name, ccost / (salary / 12) AS monthstorecover FROM programmer JOIN studies ON programmer.name = studies.name ;
SELECT s.title AS costliest FROM software s JOIN (SELECT name FROM programmer WHERE TIMESTAMPDIFF(year, doj, CURDATE()) < 3) AS newprogrammers ON s.name = newprogrammers.name ORDER BY scost DESC LIMIT 1;
SELECT AVG(salary) FROM programmer WHERE name IN (SELECT name FROM software GROUP BY name HAVING SUM(scost * sold) > 50000);
SELECT COUNT(s.name) FROM software s,studies st WHERE s.name=st.name GROUP BY s.name,ccost HAViNG MIN(ccost)=(select MIN(ccost) FROM studies);
SELECT COUNT(*) FROM programmer p,software s WHERE s .name=p.name GROUP BY dev_in HAVING MIN(dcost)=(SELECT MIN(dcost) FROM software);
SELECT COUNT(dev_in) FROM programmer p,software s WHERE s.name=p.name AND sex='f' AND salary>(SELECT MAX(salary) FROM programmer p,software s WHERE s.name=p.name and sex='m');
--26
SELECT name,splace FROM studies WHERE name NOT IN(SELECT name FROM software);
SELECT COUNT(*),sum(scost*sold-dcost) "PROFIT" FROM software WHERE dev_in IN (SELECT prof1 FROM programmer) GROUP BY dev_in;
SELECT s.name,COUNT(dev_in) FROM programmer p1,software s WHERE p1.name=s.name GROUP BY s.name;
SELECT * FROM programmer WHERE name IN ( SELECT name FROM studies WHERE splace = 'S.S.I.L.' );