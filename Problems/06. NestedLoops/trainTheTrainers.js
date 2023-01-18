function trainTheTrainers(input){
    let index = 0;
    let people = Number(input[index]);
    index++
    let presentationName = input[index];
    index++
    let gradeCounter =0;
    let totalPoints = 0;
    while (presentationName != "Finish"){
        let currentPoints = 0;  
        let sumPoints = 0;
        let averagePoints = 0;
        for (let i = 0; i < people; i++){
            currentPoints = Number(input[index]);
            index++
            gradeCounter++
            sumPoints += currentPoints;
        }
        averagePoints = sumPoints / people;
        console.log(`${presentationName} - ${averagePoints.toFixed(2)}.`)
        totalPoints += sumPoints;
        presentationName = input[index]
        index++
    }
    let averageAll = totalPoints / gradeCounter;
    console.log(`Student's final assessment is ${averageAll.toFixed(2)}.`)
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

