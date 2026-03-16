// BEGIN
export default (array, prefix) => {
    const newArray = [];

    for (let i = 0; i < array.length; i += 1) {
        newArray.push(`${prefix} ${array[i]}`);
    }

    return newArray;
};
// END