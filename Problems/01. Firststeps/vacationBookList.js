function vacationBookList(input){
    let numPagesinBook = Number(input[0]);
    let numPagesperHour = Number(input[1]);
    let daysToReadABook = Number(input[2]);
    console.log((numPagesinBook / numPagesperHour) / 2)
    
}
vacationBookList(["212", "20", "2"]);