// BEGIN
export default bubbleSort = (array) => {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = i + 1; j < array.length; j += 1) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array;
};
// END