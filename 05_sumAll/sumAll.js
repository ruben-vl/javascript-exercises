const sumAll = function(lower, upper) {
    if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
        return "ERROR";
    }
    if (lower < 0 || upper < 0) {
        return "ERROR";
    }
    if (lower > upper) {
        let temp = lower;
        lower = upper;
        upper = temp;
    }
    sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
