// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) {
        return '';
    }

    const newDefinitions = [];
    for (const definition of definitions) {
        newDefinitions.push(`<dt>${definition[0]}</dt><dd>${definition[1]}</dd>`);
    }

    const stringDefinitions = newDefinitions.join('');
    let result = `<dl>${stringDefinitions}</dl>`;

    return result;
};

export default buildDefinitionList;
// END
