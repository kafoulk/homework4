// student objects array
const students = [

 { name: 'Alice', grades: [85, 92, 78, 90] },

 { name: 'Bob', grades: [75, 88, 95, 100] },

 { name: 'Charlie', grades: [60, 72, 68, 74] },

 { name: 'David', grades: [92, 88, 95, 98] },

 { name: 'Eve', grades: [100, 100, 100, 100] }

 ];

 // calculate average grades for each student
 function calcAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return Math.round(sum / grades.length);
 }
// DOM functions (display info in html)
 function displayNames(students) {
    let names = '';
    students.forEach((student, index) => {
        names += student.name;
        if (index < students.length - 1) {
            names += ', ';
        }
    });
    const studentList = document.querySelector('.sList');
    studentList.textContent = names;
 }

 function chckPassFail() {
    const allPassed = students.every(student => {
        return student.grades.every(grade => grade >= 60);
    });
    const textElement = document.querySelectorAll('p')[1];
    textElement.textContent += allPassed ? ' Yes' : ' No';
 }

 function chckScore() {
    const perfectScore = students.some(student => {
        return student.grades.every(grade => grade === 100);
    });
    const textElement = document.querySelectorAll('p')[2];
    textElement.textContent += perfectScore ? ' Yes' : ' No';
 }

 function filterStudents() {
    const topStudents = students.filter(student => {
        const average = calcAverage(student.grades);
        student.average = average;
        return average >= 90;
    });
    topStudents.sort((a, b) => b.average - a.average);
    let names = topStudents.map(student => student.name).join(', ');
    const textElement = document.querySelectorAll('.sList')[1];
    textElement.textContent = names;
 }

 function createSummaries() {
    const summaries = students.map(student => {
        const average = calcAverage(student.grades);
        return `${student.name}: ${average}%`;
    });
    const listElement = document.getElementById('studentAvgs');
    summaries.forEach(summary => {
        const listItem = document.createElement('li');
        listItem.textContent = summary;
        listElement.appendChild(listItem);
    });

 }

 function calculateTotalGrades() {
    const totalGrades = students.reduce((accumulator, student) => {
        return accumulator + student.grades.length;}, 0);
        const textElement = document.querySelectorAll('p')[5];
        textElement.textContent += totalGrades;
 }

 document.addEventListener('DOMContentLoaded', () => {
   displayNames(students);
    chckPassFail();
    chckScore();
    filterStudents();
    createSummaries();
    calculateTotalGrades();
 });