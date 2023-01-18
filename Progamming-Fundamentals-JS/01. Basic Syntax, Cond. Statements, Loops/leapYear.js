function leapYear(year){
    let lepYear = false;
    if (year % 400 === 0){
    lepYear = true;
    } else if (year % 4 === 0){
        lepYear = true;
        if (year % 100 === 0){
            lepYear = false;
        }
    }
    if (lepYear === true){
        console.log(`yes`);
    } else{
        console.log(`no`)
    }
}
leapYear(2000)
leapYear(2003)
leapYear(4)
leapYear(400)