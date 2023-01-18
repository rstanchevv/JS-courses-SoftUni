function steps(input){
    let index = 0;
    let target = 10000;
    let value = input[index];
    let stepsSum = 0;
    index++
    let goalAchieved = true;
    while (stepsSum <= target){
        if (value === "Going home"){
            value = input[index]
            stepsSum = stepsSum + Number(value);
            if (stepsSum < target){
                goalAchieved = false;
                let needed = target - stepsSum;
                console.log(`${needed} more steps to reach goal.`)
                return;
            }
            break;
        }
        stepsSum = stepsSum + Number(value);
        value = input[index];
        index++
    }
    if (goalAchieved = true){
    let difference = stepsSum - target;
    console.log(`Goal reached! Good job!`)
    console.log(`${difference} steps over the goal!`)
    }
}
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
