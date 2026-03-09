// BEGIN (write your solution here)
const getWeekends = (format = 'long') => {
    if (format !== 'long' && format !== 'short') {
        return 'Error';
    }

    if (format == 'short') {
        return ['sat', 'sun'];
    }
    else {
        return ['saturday', 'sunday'];
    }
};

export{ getWeekends };
// END
