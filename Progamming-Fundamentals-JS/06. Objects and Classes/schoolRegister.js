function studentsRegister(arr) {
    let schoolRegister = {};
    for (let studentLine of arr) {
        let token = studentLine.split(", ");
        let studentGrade = Number(token[1].split(": ")[1]) + 1;
        let studentName = token[0].split(": ")[1];
        let studentScore = Number(token[2].split(": ")[1]);
        if (studentScore >= 3) {
            if (!schoolRegister.hasOwnProperty(studentGrade)) {
                schoolRegister[studentGrade] = {
                    name: [studentName],
                    score: [studentScore]
                }
            } else {
                schoolRegister[studentGrade].name.push(studentName);
                schoolRegister[studentGrade].score.push(studentScore)
            }
        }

    }
    for (let grade in schoolRegister){
        let student = schoolRegister[grade];
        let averageScore = student.score.reduce((a, b) => a + b, 0) / student.score.length;
        console.log(`${Number(grade)} Grade`);
        console.log(`List of students: ${student.name.join(", ")}`)
        console.log(`Average annual score from last year: ${(averageScore).toFixed(2)}`)
        console.log(" ")
    }
}

studentsRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])
