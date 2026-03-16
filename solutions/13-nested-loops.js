import _ from 'lodash';

// BEGIN
const getSameCount = (firstArray, secondArray) => {
    const newFirstArray = _.uniq(firstArray);
    const newSecondArray = _.uniq(secondArray);
    let count = 0;
    for (let i = 0; i < newFirstArray.length; i += 1) {
        for (let j = 0; j < newSecondArray.length; j += 1) {
            if (newFirstArray[i] === newSecondArray[j]) {
                count += 1;
            }
        }
    }

    return count;
};

export default getSameCount;
// END
