var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        // this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var arrOfTickets = [];
function storeTickets(tickets, criteria) {
    for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
        var line = tickets_1[_i];
        var _a = line.split("|"), destination = _a[0], price = _a[1], status_1 = _a[2];
        var ticket = new Ticket(destination, Number(price), status_1);
        arrOfTickets.push(ticket);
    }
    var sorted = Object.entries(arrOfTickets).sort(function (_a, _b) {
        var a = _a[0], b = _a[1];
        var a1 = _b[0], b1 = _b[1];
        return b[criteria].localeCompare(b1[criteria]);
    });
    return sorted;
}
var b = storeTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
