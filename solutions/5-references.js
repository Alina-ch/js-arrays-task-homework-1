// BEGIN
const reverse = (array) => {
    for (let i = 0; i < array.length / 2; i += 1) {
        let tmp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = tmp;
    }
};

export { reverse };
// END
