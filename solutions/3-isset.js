// BEGIN
const get = (array, index, defaultVal = null) => {
    if (index <= array.length - 1 && index >= 0) {
        
            return array[index];
        
    }
    return defaultVal;
};
export { get };
// END

//Пример не соответствует заданию
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
 
console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // null <- почему должен возвращаться null, если должна быть возвращена путсая строка?
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'
console.log(get(cities, 5, 'oops')); // Null <- Почему возращается null с заглавной буквы?
console.log(get(cities, 6, 'oops')); // undefined