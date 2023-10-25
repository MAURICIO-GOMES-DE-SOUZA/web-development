const students = [
    { name: "Aluno A", grades: [7, 7, 6], absences: 3},
    { name: "Aluno B", grades: [6, 8, 7], absences: 4},
    { name: "Aluno C", grades: [9, 8, 10], absences: 6},
    { name: "Aluno D", grades: [9, 7, 8], absences: 2},
    { name: "Aluno E", grades: [8, 7, 5], absences: 7},
];

const studentsAverage = students.map((student) => {
const average = student.grades.reduce((a, b) => a + b )
/ student.grades.length;
    return {
        name: student.name,
        average: average,
        absences: student.absences,
    };


})
const selectedStudents = studentsAverage.filter((student) => {
    if (student.average >= 7 && student.absences <5) {
        return student
    }
})
console.table(studentsAverage);
console.table(selectedStudents)