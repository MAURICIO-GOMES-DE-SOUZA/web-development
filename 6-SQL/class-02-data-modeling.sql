CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
     email TEXT UNIQUE NOT NULL,
     id_course INTEGER  REFERENCES courses(id)
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


