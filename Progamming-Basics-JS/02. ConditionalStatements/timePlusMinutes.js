function timePlusMinutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = hours * 60 + minutes + 15;
    
    let hour = Math.trunc(totalTime / 60);
    let minute = totalTime % 60;

    if (hour >= 24)
    hour = hour - 24

    if (minute < 10){
        console.log(`${hour}:0${minute}`)
    } else 
    console.log(`${hour}:${minute}`)
    



}
   
timePlusMinutes([23, 59])