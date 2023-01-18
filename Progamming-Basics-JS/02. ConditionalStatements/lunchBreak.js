function lunchbreak(input){

    let series = input[0];
    let duration = Number(input[1]);
    let lunchbreak = Number(input[2]);

    let lunchTime = (1 / 8) * lunchbreak;
    let leisureTime = (1 / 4) * lunchbreak;
    let busyTime = lunchTime + leisureTime;
    let timeLeft = lunchbreak - busyTime;

    if (duration <= timeLeft){

       let remaining = Math.ceil(timeLeft - duration)
        console.log(`You have enough time to watch ${series} and left with ${remaining} minutes free time.`)
    } else {
        let needed = Math.ceil(duration - timeLeft)
        console.log(`You don't have enough time to watch ${series}, you need ${needed} more minutes.`)
    }
}
lunchbreak (["Game of Thrones", 60, 96])