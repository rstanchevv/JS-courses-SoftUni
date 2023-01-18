function nextDay(year, month, day){
    let currentDay = new Date(year, month -1 , day)
    let nextDay = new Date (currentDay.setDate(currentDay.getDate() + 1))
    let nextDayDay = nextDay.getDate();
    let netxDayMonth = nextDay.getMonth();
    let nextDayYear = nextDay.getFullYear();
    console.log(`${nextDayYear}-${netxDayMonth + 1}-${nextDayDay}`)
}

nextDay(2016, 9, 30)