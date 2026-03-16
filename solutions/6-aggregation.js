// BEGIN
const calculateSum = (array) => {
    if (array.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (const element of array) {
        if (element % 3 === 0) {
            sum += element;
        }
    }
    
    return sum;
};

export { calculateSum };
// END
