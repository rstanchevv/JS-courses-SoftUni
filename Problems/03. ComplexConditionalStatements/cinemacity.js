function cinemacity(input){
let dayOfTheWeek = input[0];

if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday"){
    console.log(`12`)
} else if (dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday"){
    console.log(`14`);
} else if (dayOfTheWeek == "Friday"){
    console.log(`12`)
} else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday"){
    console.log(`16`)
}
}
cinemacity(["Sunday"])