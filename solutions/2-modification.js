// BEGIN
const swap = (array) => {
    if (array.length >= 2) {
        let tmp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = tmp;
    }

    return array;
};

export { swap };
// END