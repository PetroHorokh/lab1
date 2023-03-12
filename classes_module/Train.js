class Train{
    constructor(number, departure, destination, tickets) {
        this.number = number
        this.departure = departure
        this.destination = destination
        this.tickets = [...tickets]
        this.sold_tickets = []
    }
}
const AddTrain = (number, departure, destination, tickets, trains) => {

    let train = new Train(number, departure, destination, tickets)

    trains.push(train)

    return train;
}
const EditTrain = (number, new_departure, new_destination, new_tickets, new_sold_tickets, trains ) => {

    let train = FindTrain(number,trains)

    if(train === null) {
        return false;
    }

    const id = trains.indexOf(train)

    trains[id].departure = new_departure
    trains[id].destination = new_destination
    trains[id].sold_tickets = new_sold_tickets
    trains[id].tickets = new_tickets

    return trains[id];
}
const DeleteTrain = (number, trains) => {

    let train = FindTrain(number, trains)

    if(train === null) return false;

    const id = trains.indexOf(train)

    trains.splice(id,1)

    return true;
}
const FindTrain = (number, trains) => {

    let result = null

    trains.forEach(train => (train.number === number) ? result = train : null)

    return result
}
const FindBestAndWorstTrains = (trains) =>{
    let best = trains[0]
    let worst = trains[0]

    trains.forEach(train => {
        if(train.tickets.length > worst.tickets.length) worst = train;
        else if(train.tickets.length < best.tickets.length) best = train;
    })

    return {
        'best': best,
        'worst': worst,
    }
}

exports.AddTrain = AddTrain
exports.EditTrain = EditTrain
exports.DeleteTrain = DeleteTrain
exports.FindTrain = FindTrain
exports.FindBestAndWorstTrains = FindBestAndWorstTrains