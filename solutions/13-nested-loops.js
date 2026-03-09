import uniq from 'lodash/uniq.js';

// BEGIN
export default getSameCount = (firstArray, secondArray) => {
    let newFirstArray = uniq(firstArray);
    let newSecondArray = uniq(secondArray);
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
