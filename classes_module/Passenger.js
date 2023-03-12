const ticket = require("./Ticket")
const sold_ticket = require("./Sold_ticket")
const train = require("./Train")

class Passenger{
    constructor(name,surname) {
        this.name = name
        this.surname = surname
    }
}
const AddPassenger = (name, surname, passengers) => {

    let passenger = new Passenger(name, surname)

    passengers.push(passenger)

    return passenger;
}
const EditPassenger = (name, surname, passengers, new_name, new_surname) => {

    let passenger = FindPassenger(name, surname, passengers)

    if(passenger === null) return false;

    const id = passengers.indexOf(passenger)

    passengers[id].name = new_name
    passengers[id].surname = new_surname

    return passengers[id];
}
const DeletePassenger = (name, surname, passengers) => {

    let passenger = FindPassenger(name, surname, passengers)

    if(passenger === null) return false;

    const id = passengers.indexOf(passenger)

    passengers.splice(id, 1)

    return true;
}
const FindPassenger = (name, surname, passengers) => {

    let result = null

    passengers.forEach(passenger => (passenger.name===name && passenger.surname===surname)?result=passenger:null)

    return result
}
const BuyTicket = (train, passenger) => {

    let result = new sold_ticket.Sold_ticket(train.tickets[0].number, train.tickets[0].place, passenger.name, passenger.surname)

    train.sold_tickets.push(result)

    train.tickets.slice(1)

    return result;
}
const ReturnTicket = (train, passenger) => {

    let ticket_to_return = null

    train.sold_tickets
        .find(
            ticket =>
                (ticket.passenger_surname===passenger.surname&&ticket.passenger_name===passenger.name)
                    ?ticket_to_return = ticket:null
        )

    if(ticket_to_return!==null){
        train.tickets.push(new ticket.Ticket(ticket_to_return.number, ticket_to_return.place))
        train.sold_tickets.splice(train.sold_tickets.indexOf(ticket_to_return),1)
    }

    return ticket_to_return;
}
const ChangeTrains = (passenger, old_train_number, new_train_number, trains) => {

    let new_train = train.FindTrain(new_train_number, trains)
    let old_train = train.FindTrain(old_train_number, trains)

    if(new_train.tickets){
        ReturnTicket(old_train, passenger)
        BuyTicket(new_train, passenger)
        return true;
    }

    return false;
}

exports.AddPassenger = AddPassenger
exports.EditPassenger = EditPassenger
exports.DeletePassenger = DeletePassenger
exports.FindPassenger = FindPassenger

exports.BuyTicket = BuyTicket
exports.ReturnTicket = ReturnTicket
exports.ChangeTrains = ChangeTrains