// BEGIN
const calculateAverage = (array) => {
    if (array.length === 0) {
        return null;
    }

    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    
    return sum / array.length;
};

export default calculateAverage;
// END