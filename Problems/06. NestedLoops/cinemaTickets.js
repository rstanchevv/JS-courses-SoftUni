function cinemaTickets(input){
    let index = 0;
    let movieName = input[index]
    index++;
    let freeSeats = Number(input[index]);
    index++
    let fullSpaceMovie = "";
    let aLLticketCounter = 0;
    let studentTicketCounter = 0;
    let standardTicketCounter =0;
    let kidTicketCounter =0;
    let isFinal = false;
    let finalTicketNumber = 0;
    while (movieName != "Finish"){
        let ticketCounter = 0;
        for (let i = 1; i <= freeSeats; i++){
            let currentTicket = input[index];
            index++
            if (currentTicket === "student"){
                studentTicketCounter++
                ticketCounter++
            } else if (currentTicket === "standard"){
                standardTicketCounter++;
                ticketCounter++
            } else if (currentTicket === "kid"){
                kidTicketCounter++
                ticketCounter++
            } else if (currentTicket === "End"){
                break;
            }
            else if (currentTicket === "Finish"){
                isFinal = true;
            }
        }
        aLLticketCounter += ticketCounter;
        let spaceInPercent = (ticketCounter / freeSeats) * 100;
        console.log(`${movieName} - ${spaceInPercent.toFixed(2)}% full.`)
        if (ticketCounter === freeSeats){
            fullSpaceMovie = movieName;
        }
        movieName = input[index];
        if (movieName === "Finish"){
            console.log(`Total tickets: ${aLLticketCounter}`);
            console.log(`${(studentTicketCounter / aLLticketCounter * 100).toFixed(2)}% student tickets.`)
            console.log(`${(standardTicketCounter / aLLticketCounter * 100).toFixed(2)}% standard tickets.`)
            console.log(`${(kidTicketCounter / aLLticketCounter * 100).toFixed(2)}% kids tickets.`)
            break;
        }
        index++
        freeSeats = Number(input[index]);
        index++
    }
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

