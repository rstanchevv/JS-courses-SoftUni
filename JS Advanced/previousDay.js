function previousDay(year, month, day){
    let inputDate = new Date(year, month - 1, day);
    let previousDay = new Date(inputDate);
    previousDay.setDate(previousDay.getDate() - 1);
    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`)
}
previousDay(2016, 9, 30)