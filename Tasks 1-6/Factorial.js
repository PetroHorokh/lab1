
const TestData = [5,10,20]

const FactorialIndex = () => {

    let result = []

    TestData.map(e => result.push(Factorial(e)))

    return result
}

const Factorial = number => {
    if (number === 0)
        return 1;
    else {
        return (number * Factorial(number - 1));
    }
};

exports.FactorialIndex = FactorialIndex