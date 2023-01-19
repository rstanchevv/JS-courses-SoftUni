function requiredReading(numberOfPages, pagesReadIn1Hour, targetNumberOfDays){
    let totalTimeToReadTheBook = numberOfPages / pagesReadIn1Hour;
    let totalDaysToReadTheBook = totalTimeToReadTheBook / targetNumberOfDays;
    console.log(totalDaysToReadTheBook);
}
requiredReading(212,20,2)