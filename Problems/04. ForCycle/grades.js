function grades(input){
    let numberOfStudents = Number(input[0]);
    let grade = 0;
    let studentsBetween2and3 = 0;
    let studentsBetween3and4 = 0;
    let studentsBetween4and5 = 0;
    let studentsBetween5and6 = 0;
    let countGrades = 0;
    for (let i = 1; i <= numberOfStudents; i++){
        grade = Number(input[i]);
        countGrades += grade;
        if (grade >= 2.00 && grade < 3.00){
            studentsBetween2and3++;
        }
        else if (grade < 4.00 ){
            studentsBetween3and4++;
        } else if (grade < 5.00){
            studentsBetween4and5++
        } else if (grade >= 5.00){
            studentsBetween5and6++
        }
    }
    let studentsBetween2and3Percent = (studentsBetween2and3 / numberOfStudents) * 100;
    let studentsBetween3and4Percent = (studentsBetween3and4 / numberOfStudents) * 100;
    let studentsBetween4and5Percent = (studentsBetween4and5 / numberOfStudents) * 100;
    let studentsBetween5and6Percent = (studentsBetween5and6 / numberOfStudents) * 100;
    let averageGrade = countGrades / numberOfStudents;

    console.log(`Top students: ${studentsBetween5and6Percent.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${studentsBetween4and5Percent.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${studentsBetween3and4Percent.toFixed(2)}%`)
    console.log(`Fail: ${studentsBetween2and3Percent.toFixed(2)}%`)
    console.log(`Average: ${averageGrade.toFixed(2)}`)
}
grades(["6","2","3","4","5","6","2.2"])