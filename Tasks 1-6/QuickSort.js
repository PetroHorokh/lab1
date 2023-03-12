const TestData = [[1,23,431231,3112,0],'testing123','aloha']

const QuickSortIndex = () => {

    let result = []

    TestData.map(e => result.push(QuickSort(e)))

    return result
}

const QuickSort = ([...array]) => {
    if (array.length < 2) return array;
    let min = 1;
    let max = array.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = array[rand];
    const left = [];
    const right = [];
    array.splice(array.indexOf(pivot), 1);
    array = [pivot].concat(array);
    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return QuickSort(left).concat(pivot, QuickSort(right));
}

exports.QuickSortIndex = QuickSortIndex