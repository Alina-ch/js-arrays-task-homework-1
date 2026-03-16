// BEGIN
const getMax = (array) => {
    if (array.length === 0) {
        return null;
    }
    
    let [first, ... rest] = array;
    let max = first;
    for (const item of rest) {
        max = item > max ? item : max;
    }

    return max;
};

export { getMax };
// END