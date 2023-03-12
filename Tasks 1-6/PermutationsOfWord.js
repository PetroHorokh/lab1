
const TestData = ['abs','@23#','string']

const PermutationsOfWordIndex = () => {

    let result = []

    TestData.map(e => result.push(PermutationsOfWord(e)))

    return result
}

const PermutationsOfWord = (string) => {
    if (string.length <= 2) return string.length === 2 ? [string, string[1] + string[0]] : [string];
    return string
        .split('')
        .reduce(
            (e, letter, i) =>
                e.concat(PermutationsOfWord(string.slice(0, i) + string.slice(i + 1)).map(val => letter + val)),
            []
        );
};

exports.PermutationsOfWordIndex = PermutationsOfWordIndex