function softUnireception(input){
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let totalStudents = Number(input[3]);
    let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let hours = 0;

    while (totalStudents > 0){
        totalStudents -= studentsPerHour;
        hours++

        if (hours % 4 === 0){
            hours++
        }
    }
    console.log(`Time needed: ${hours}h.`)
}
softUnireception(['5','6','4','20'])


