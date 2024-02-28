CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
     email TEXT UNIQUE NOT NULL,
     id_course INTEGER  REFERENCES courses(id) ON DELETE CASCADE
);

DROP TABLE students;

CREATE TABLE courses(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
workload INETGER NOT NULL 
);

DROP TABLE courses;


INSERT INTO students (name, email, id_course)VALUES 
("Erick", "erickgg@gmail.com", 1),
("Jorge", "jorgegg@gmail.com",2),
("Daniel", "danielgg@gmail.com", 2);

INSERT INTO courses (name, workload)VALUES 
("Web Development", 360),
("Data Analysis", 240),
("Cyber Security", 240);

SELECT * FROM students;
SELECT * FROM courses;

--INNER, RIGHT, LEFT, FULL
SELECT students.name, courses.name AS course
 FROM students
LEFT JOIN courses
ON students.id_course = courses.id
WHERE course IS NOT NULL;


DELETE FROM students WHERE id=1;
DELETE FROM courses WHERE id= 2;