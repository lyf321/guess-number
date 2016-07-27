const AnswerGenerator = require('./AnswerGenerator');
const CompareNumber = require('./CompareNumber');

class Guess {
    static guess(input) {
        const answer = AnswerGenerator.generate();
        const compareNumber = CompareNumber.guessNumber(input, answer);
        return compareNumber;
    }
}

module.exports = Guess;