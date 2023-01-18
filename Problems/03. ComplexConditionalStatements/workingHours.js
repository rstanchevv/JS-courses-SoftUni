function workingHours(input){
    let hour = Number(input[0]);
    let dayOfTheWeek = input[1];
    if (hour >= 10 && hour <= 18){
        switch (dayOfTheWeek){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log(`open`);
                break;
            case "Sunday":
                console.log(`closed`)
        }
    }else {
        console.log(`closed`)
    }
}
workingHours(["11", "Sunday"])