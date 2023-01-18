function onTime(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let ExamStartInMinutes = (examHour * 60) + examMinute
    let arrivalInMinutes = (arrivalHour * 60) + arrivalMinute
    let earlyinMinutes = (ExamStartInMinutes - arrivalInMinutes)
    let late = arrivalInMinutes - ExamStartInMinutes
    let status = ""
    let hour = ""
    let minutes = ""

    if (ExamStartInMinutes === arrivalInMinutes || earlyinMinutes <= 30 && earlyinMinutes > 0){
        status = "On Time"
        minutes = earlyinMinutes % 60
        console.log(status)
        console.log(`${earlyinMinutes} minutes before the start`)
    } else if (earlyinMinutes > 30 && earlyinMinutes < 60){
        status = "Early"
        minutes = earlyinMinutes % 60
        console.log(status)
        console.log(`${earlyinMinutes} minutes before the start`)
    } else if (earlyinMinutes >= 60){
        status = "Early"
        hour = Math.floor(earlyinMinutes / 60)
        minutes = earlyinMinutes % 60
        if (minutes < 10){
            console.log(status)
            console.log(`${hour}:0${minutes} hours before the start`)
        } else {
            console.log(status)
            console.log(`${hour}:${minutes} hours before the start`)
        }
    } else if (ExamStartInMinutes < arrivalInMinutes && late < 60){
        status = "Late"
        minutes = late % 60
            console.log(status)
            console.log(`${minutes} minutes after the start`)
    } else if (late >= 60){
        status = "Late"
        hour = Math.floor(late / 60)
        minutes = late % 60;
        if (minutes < 10){
            console.log(status)
            console.log(`${hour}:0${minutes} hours after the start`)
        } else {
            console.log(status)
            console.log(`${hour}:${minutes} hours after the start`)
        }
    }
}
onTime(["11","30","8","12"])