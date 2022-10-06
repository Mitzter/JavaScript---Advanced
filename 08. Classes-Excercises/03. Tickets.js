class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(arr, sortCriteria){
    
    let ticketStorage = [];
    for(let i = 0; i < arr.length; i++){
        let string = arr[i];
        let currentTicket = string.split('|');

        let ticketDestination = currentTicket[0];
        let ticketPrice = currentTicket[1];
        let ticketStatus = currentTicket[2];

        let ticket = new Ticket(ticketDestination, ticketPrice, ticketStatus);
        ticketStorage.push(ticket);

    }
    
    switch(sortCriteria){
        case "destination": ticketStorage.sort((a,b) => a.destination - b.destination);
        break;
        case "price": ticketStorage.sort((a,b => a.price > b.price ));
        break;
        case "status": ticketStorage.sort((a,b => a.status - b.status));
        break;
    }
    
    return ticketStorage;
}

console.log(solve(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'))