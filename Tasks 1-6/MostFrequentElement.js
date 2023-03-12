
const TestData = [[1,1,1,1,1,1,1,1,1],[2,2,3,4,5,6,7,8,9,1],[3],'1a232211']

const MostFrequentElementIndex = () => {

    let result = []

    TestData.map(e => result.push(MostFrequentElement(e)))

    return result
}

const MostFrequentElement = (array) => {

    let Most = 0;
    let result = [];

    for(let i = 0; i < array.length; i++){

        let tempM = 0;

        for(let j = 0 ; j < array.length; j++){
            if(array[i] === array[j]) tempM++;
        }

        if(tempM > Most) {
            Most = tempM
        }
    }

    for(let i = 0; i < array.length; i++){

        let temp = 0;
        let elem = array[i];

        for(let j = 0; j < array.length; j++){
            if(array[j] === array[i]) temp++;
        }

        if(temp === Most) result.push(elem);

    }

    return [...new Set(result)].length === 1 ? result[0] : [...new Set(result)];
}

exports.MostFrequentElementIndex = MostFrequentElementIndex