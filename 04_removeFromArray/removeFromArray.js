const removeFromArray = function(arr, ...toRemove) {
    switch (arguments.length) {
        case 0:
            return [];
        case 1:
            return arr;
        default:
            for (let elem of toRemove) {
                arr = arr.filter((e) => e !== elem)
            }
            return arr;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
