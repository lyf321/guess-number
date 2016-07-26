const compareNumber = require('./models/CompareNumber');


function printResult(randomNumber,guess) {
    
    return compareNumber.guessNumber(randomNumber,guess);
}

module.exports = printResult;
