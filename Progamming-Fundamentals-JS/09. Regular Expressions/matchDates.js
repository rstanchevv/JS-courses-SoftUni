function matchDates(arr){
    let dates = arr[0];
    let regex = /\b(?<day>(\d{2}))(?<dashDotSlash>[-.\/])(?<month>([A-Z][a-z]{2}))\k<dashDotSlash>(?<year>\d{4})\b/g
    let match = regex.exec(dates);
    while (match !== null){
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
        match = regex.exec(dates)
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])