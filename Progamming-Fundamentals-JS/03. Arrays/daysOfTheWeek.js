function getDayOfTheWeek(num) {
    let arr = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"];
    let dayOfTheWeek = arr[num - 1];
    
    if (num < 1 || num > 7){
        console.log(`Invalid day!`);
    } else{
        console.log(dayOfTheWeek)
    }
}
getDayOfTheWeek(10)