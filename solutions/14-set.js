// BEGIN
const countUniqChars = (text) =>  {
    if (text === '') {
        return 0;
    }

    let array = [text[0]];
    let count = 1;
    for (let i = 1; i < text.length; i += 1) {
        if (!array.includes(text[i])) {
            count += 1;
            array.push(text[i]);
        }  
    }

    return count;
};

export default countUniqChars;
// END