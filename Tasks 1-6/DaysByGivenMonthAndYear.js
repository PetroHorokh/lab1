const TestData = [[2021,7],[1998,1],[2023,2]]

const DaysByGivenMonthAndYearIndex = () => {

    let result = []

    TestData.map(e => result.push(DaysByGivenMonthAndYear(e[0],e[1])))

    return result
}
const DaysByGivenMonthAndYear = (year, month) => {
    return new Date(year, month, 0).getDate();
}

exports.DaysByGivenMonthAndYearIndex = DaysByGivenMonthAndYearIndex