
const TestData = ['stringtosplit','testing123','aloha']

const SplitStringIndex = () => {

    let result = []

    TestData.map(e => result.push(SplitString(e)))

    return result
}

const SplitString = (string) => {
    return string.split('')
}

exports.SplitStringIndex = SplitStringIndex