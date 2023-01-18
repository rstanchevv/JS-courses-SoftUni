function examPreparation(input){
    let index = 0;
    let countBadGrades = Number(input[index]);
    index++
    let problemName = input[index];
    index++
    let problemGrade = Number(input[index]);
    index++
    let badGradeCounter = 0;
    let sumGrades = 0;
    let gradesCount = 0;
    let problemsCount = 0;
    let lastProblem = '';

    while (problemName !== "Enough"){
        lastProblem = problemName;
        if (problemGrade <= 4){
            badGradeCounter++;
            if (countBadGrades === badGradeCounter){
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                return;
            }
        }
        problemsCount++;
        sumGrades += problemGrade;
        gradesCount++

        problemName = input[index];
        index++
        problemGrade = Number(input[index]);
        index++
    }
    let averageGrade = sumGrades / gradesCount;

    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${lastProblem}`)
}
examPreparation(["3",

    "Money",

    "6",

    "Story",

    "4",

    "Spring Time",

    "5",

    "Bus",

    "6",

    "Enough"])