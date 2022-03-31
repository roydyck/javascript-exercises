const palindromes = function (word) {
    let wordArray = word.split('');
    
    for (let i = 0; i < wordArray.length; i++) {
        if ((wordArray[i].toLowerCase() === wordArray[i].toUpperCase()) || wordArray[i] === '') {
            wordArray.splice(i,1);
            i--;
        } else {
            wordArray[i] = wordArray[i].toLowerCase();
        }
    }
    const reverseWord = wordArray.reverse().join('');
    wordArray = wordArray.reverse().join('');

    return reverseWord === wordArray;
};

// Do not edit below this line
module.exports = palindromes;
