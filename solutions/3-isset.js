// BEGIN
const get = (array, index, defaultVal = null) => {
    if (index <= array.length - 1 && index >= 0) {
        return array[index];
    }

    return defaultVal;
};

export { get };
// END