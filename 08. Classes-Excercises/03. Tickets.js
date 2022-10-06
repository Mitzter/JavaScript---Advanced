class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(arr, sortCriteria){
    let arrSplit = arr.split(',');
    let ticketStorage = [];
    for(let i = 0; i < arrSplit.length; i++){
        let currentTicket = arrSplit[i].split('|');

        let ticketDestination = currentTicket[0];
        let ticketPrice = currentTicket[1];
        let ticketStatus = currentTicket[2];

        let ticket = new Ticket(ticketDestination, ticketPrice, ticketStatus);

    }
    
    
    
    
}