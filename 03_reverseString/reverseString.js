const reverseString = function(string) {
    let reverse = '';
    for (let i = 1; i <= string.length; i++) {
        reverse = reverse.concat('',string.substr(-i,1));
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
