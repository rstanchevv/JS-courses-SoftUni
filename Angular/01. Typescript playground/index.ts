class Ticket {
  // private destination: string;
  private price: number;
  private status: string;

  constructor(destination: string, price: number, status: string) {
    // this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

const arrOfTickets: object[] = [];

function storeTickets(tickets: string[], criteria: string): object[] {
  for (const line of tickets) {
    const [destination, price, status] = line.split("|");
    const ticket = new Ticket(destination, Number(price), status);
    arrOfTickets.push(ticket);
  }

  const sorted = Object.entries(arrOfTickets).sort(([a,b], [a1,b1]) => b[criteria].localeCompare(b1[criteria]) )
  return sorted;
}

const b = storeTickets(
  [
    "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "destination"
);

