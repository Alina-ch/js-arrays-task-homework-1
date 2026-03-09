// BEGIN
export default getTotalAmount = (arrayWithCurrency, nameOfCurrency) => {
    if (arrayWithCurrency.length === 0) {
        return 'No currency';
    }

    let sum = 0;
    for (let i = 0; i < arrayWithCurrency.length; i += 1) {
        if (arrayWithCurrency[i].slice(0, 3) === nameOfCurrency) {
            sum += Number(arrayWithCurrency[i].slice(4));
        }
    }
    return sum;
};
// END

