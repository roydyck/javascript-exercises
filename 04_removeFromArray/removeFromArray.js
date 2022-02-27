const removeFromArray = function() {
    let args = Array.prototype.slice.call(arguments);
    let argArray = args[0];
    
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < argArray.length; j++) {
            if (argArray[j] === args[i]) {
                argArray.splice(j,1);
            }
        }
    }

    return argArray;
};

// Do not edit below this line
module.exports = removeFromArray;
