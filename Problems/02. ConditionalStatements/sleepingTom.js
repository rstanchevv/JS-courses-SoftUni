function SleepyTomCat(input){
    let holidaysinYear = Number(input[0]);
    let goodsleepTomYearinMinutes = 30000;
    let yeardays = 365;


    let workingdays = yeardays - holidaysinYear;
    let totalPlayTime = (workingdays * 63) + (holidaysinYear * 127)

    if (goodsleepTomYearinMinutes > totalPlayTime){
        let difference = goodsleepTomYearinMinutes - totalPlayTime;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        console.log(`Tom sleeps well`)
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    } else {
        let difference = totalPlayTime - goodsleepTomYearinMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        console.log(`Tom will run away`)
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
    
}
SleepyTomCat([20])