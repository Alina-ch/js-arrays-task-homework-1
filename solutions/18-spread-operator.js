// BEGIN
const flatten = (array) => {
    if (array.length == 0) {
        return [];
    }

    const newArray = []; 
    for (const item of array) {
        if (Array.isArray(item)) {
            newArray.push(...item);
        }
        else {
            newArray.push(item);
        }
    }
    
    return newArray;
};

export { flatten };
// END

