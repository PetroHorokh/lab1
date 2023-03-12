const SplitString = require("./Tasks 1-6/SplitString")
const PermutationsOfWord = require("./Tasks 1-6/PermutationsOfWord")
const Factorial = require("./Tasks 1-6/Factorial")
const MostFrequentElement = require("./Tasks 1-6/MostFrequentElement")
const DaysByGivenMonthAndYear = require("./Tasks 1-6/DaysByGivenMonthAndYear")
const QuickSort = require("./Tasks 1-6/QuickSort")

const classes_module = require("./classes_module/module")

console.log(SplitString.SplitStringIndex())
console.log(PermutationsOfWord.PermutationsOfWordIndex())
console.log(Factorial.FactorialIndex())
console.log(MostFrequentElement.MostFrequentElementIndex())
console.log(DaysByGivenMonthAndYear.DaysByGivenMonthAndYearIndex())
console.log(QuickSort.QuickSortIndex())

let trains = []
let passengers = []

classes_module.AddTrain(11231, 'Lviv', 'Kyiv', [new classes_module.Ticket(1,1),new classes_module.Ticket(2,2),new classes_module.Ticket(3,3)], trains)
classes_module.AddTrain(321, 'Lviv', 'Kharkiv', [new classes_module.Ticket(1,1),new classes_module.Ticket(2,2),new classes_module.Ticket(3,3)], trains)
classes_module.AddTrain(32313131, 'Lviv', 'Kharkiv', [new classes_module.Ticket(1,1),new classes_module.Ticket(2,2),new classes_module.Ticket(3,3)], trains)


console.log(trains)

classes_module.EditTrain(11231, 'Lviv', 'Kherosn', [new classes_module.Ticket(1,1),new classes_module.Ticket(2,2)],[new classes_module.Sold_ticket(3,3, 'Pete','Horokh')], trains)

console.log(trains)

classes_module.DeleteTrain(321, trains)

console.log(trains)

console.log(classes_module.FindTrain(11231,trains))

console.log(classes_module.FindBestAndWorstTrains(trains))

classes_module.AddPassenger('Petro','Horokh', passengers)
classes_module.AddPassenger('Khristina','Hihluk', passengers)
classes_module.AddPassenger('Danylo','Lazhovsky', passengers)

console.log(passengers)

classes_module.EditPassenger('Petro','Horokh', passengers, 'Pete', 'Horokh')

console.log(passengers)

classes_module.DeletePassenger('Danylo','Lazhovsky', passengers)

console.log(passengers)

classes_module.ReturnTicket(trains[0],passengers[0])

console.log(trains[0])

classes_module.BuyTicket(trains[0],passengers[0])

console.log(trains[0])

classes_module.ChangeTrains(passengers[0], 11231, 32313131, trains)

console.log(trains)