const ticket = require("./Ticket")
const sold_ticket = require("./Sold_ticket")
const train = require("./Train")
const passenger = require("./Passenger")

exports.Ticket = ticket.Ticket

exports.Sold_ticket = sold_ticket.Sold_ticket

exports.AddPassenger = passenger.AddPassenger
exports.EditPassenger = passenger.EditPassenger
exports.DeletePassenger = passenger.DeletePassenger
exports.FindPassenger = passenger.FindPassenger

exports.AddTrain = train.AddTrain
exports.EditTrain = train.EditTrain
exports.DeleteTrain = train.DeleteTrain
exports.FindTrain = train.FindTrain
exports.FindBestAndWorstTrains = train.FindBestAndWorstTrains

exports.BuyTicket = passenger.BuyTicket
exports.ReturnTicket = passenger.ReturnTicket
exports.ChangeTrains = passenger.ChangeTrains
