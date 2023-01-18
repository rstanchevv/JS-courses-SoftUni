function graduation(input){
    let index = 0;
    let name = input[index];
    index++
    let year = 1;
    let sumGrade  = 0;
    let failed = 0;
    let isFailed = false;
    while (year <= 12){
        let currentGrade = Number(input[index]);
        index++
        if (currentGrade < 4){
            failed++;
            if (failed == 2){
                isFailed = true;
                console.log(`${name} has been excluded at ${year} grade`)
                break;
            }
            continue;
        }
        sumGrade += currentGrade;
        year++
    }
    if (isFailed == false){
    let averageGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

