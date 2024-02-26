-- DDL
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
     age NUMERIC
);

DROP TABLE students;

-- DML
INSERT INTO students (name, age) VALUES 
    ("Pedrinho", 20), 
    ("Luíza", 19);

UPDATE students SET age = 21 WHERE name = "Pedrinho";
UPDATE students SET age = 19 WHERE id = 2;
UPDATE students SET name = "Dudu", age = 20 WHERE id = 4;

DELETE FROM students;
DELETE FROM students WHERE id = 6; 

--DQL
SELECT * FROM students;

SELECT NAME, AGE
FROM students
WHERE id = 7;

SELECT * FROM students
WHERE id = 6 OR id =8 ;

SELECT * FROM students
WHERE id = 6 ORDER BY  age DESC;
 

 


--DDL HÁ QUEM DIGA QUE A 3 É IGUAL A 1....
ALTER TABLE students
ADD COLUMN city TEXT;

-- challenge DML 
UPDATE students 
SET city = "Jucás";

UPDATE students 
SET city = "sABOEIRO"
WHERE id = 6; 
