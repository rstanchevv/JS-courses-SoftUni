class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

function ticketsDatabase(destinations, criteria){
    let finalArr = [];
    for (const dest of destinations) {
        let [destination, price, status] = dest.split('|')
        finalArr.push(new Ticket(destination, price, status))
    }
    return finalArr.sort((a,b) => {
        if (criteria === 'price') {
            return a - b;
        } else {
            if(criteria === 'destination'){
                return a.destination.localeCompare(b.destination);
            } else if (criteria === 'status'){
                return a.status.localeCompare(b.status)
            }
        }
    })
}

let result = ticketsDatabase(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price')
for (const res of result) {
    console.log(res)
}

