function sumSeconds(input){

    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let time = time1 + time2 + time3;

    // 124
    // 120 s - 2 m
    // 4 s
    // 2:04
    let mins = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10 ){
        console.log(`${mins}:0${seconds}`)
    } else

    console.log(`${mins}:${seconds}`); 
}

sumSeconds([35, 45, 44])