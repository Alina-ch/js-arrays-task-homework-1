// BEGIN
const getSuperSeriesWinner = (scores) => {
    if (scores.length === 0) {
        return null;
    }
    
    let victoriesCanada = 0;
    let victoriesUSSR = 0;
    for (let i = 0; i < scores.length; i += 1) {
        if (scores[i][0] !== scores[i][1]) {
            if (scores[i][0] > scores[i][1]) {
                victoriesCanada += 1;
            }
            else {
                victoriesUSSR += 1;
            }
        }
    }
    
    return (victoriesCanada > victoriesUSSR ? 'canada' : (victoriesCanada < victoriesUSSR ? 'ussr' : null));  
};

export default getSuperSeriesWinner;
// END