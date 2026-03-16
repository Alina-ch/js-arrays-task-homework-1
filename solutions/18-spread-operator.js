// BEGIN
const flatten = (array) => {
    if (array.length == 0) {
        return [];
    }

    let newArray = []; 
    for (const item of array) {
        if (Array.isArray(item)) {
            if (newArray.length !== 0) {
                let [...rest] = newArray;
                newArray = [...rest,...item];
            }
            else {
                newArray = [...item];
            }
            
        }
        else {
            newArray.push(item);
        }
    }

    array = newArray;
    
    return array;
};

export { flatten };
// END

