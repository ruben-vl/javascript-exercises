const leapYears = function(year) {
    if (!Number.isInteger(year)) {
        return "ERROR";
    }
    let divBy4 = year % 4 == 0;
    let divBy100 = year % 100 == 0;
    let divBy400 = year % 400 == 0;

    return divBy400 || (divBy4 && !divBy100);
};

// Do not edit below this line
module.exports = leapYears;
