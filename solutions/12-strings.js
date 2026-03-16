// BEGIN
const makeCensored = (text, stopWords) => {
    const arrayTextWords = text.split(' ');
    for (let i = 0; i < arrayTextWords.length; i += 1) {
        arrayTextWords[i] = stopWords.includes(arrayTextWords[i]) ? '$#%!' : arrayTextWords[i];
    }
    
    return arrayTextWords.join(' ');
};

export default makeCensored;
// END