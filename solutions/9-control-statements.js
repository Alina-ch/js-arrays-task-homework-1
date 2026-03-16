// BEGIN
const getTotalAmount = (arrayWithCurrency, currencyName) => {
    if (arrayWithCurrency.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < arrayWithCurrency.length; i += 1) {
        if (arrayWithCurrency[i].slice(0, 3) === currencyName) {
            sum += Number(arrayWithCurrency[i].slice(4));
        }
    }
    
    return sum;
};

export default getTotalAmount;
// END

