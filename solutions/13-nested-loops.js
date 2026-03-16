import _ from 'lodash';

// BEGIN
export default getSameCount = (firstArray, secondArray) => {
    let newFirstArray = _.uniq(firstArray);
    let newSecondArray = _.uniq(secondArray);
    let count = 0;
    for (let i = 0; i < newFirstArray.length; i += 1) {
        for (let j = 0; j < newSecondArray.length; j += 1) {
            if (newFirstArray[i] == newSecondArray[j]) {
                count += 1;
            }
        }
    }

    return count;
};
// END
