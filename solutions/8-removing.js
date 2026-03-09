// BEGIN
export default getSameParity = (array) => {
    if (array.length === 0) {
        return array;
    }
    
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (Math.abs(array[0]) % 2 === Math.abs(array[i]) % 2) {
            newArray.push(array[i]);
        }

    }
      return newArray;
};
// END