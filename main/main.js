const AnswerGenerator = require('../main/models/AnswerGenerator');
const CompareNumber = require('../main/models/CompareNumber');

var scanf = require('scanf');

class Main {
   static main() {
        const answer = AnswerGenerator.generate();
        console.log('answer:' + answer);
        for (let i = 3; i > 0; i--) {
            console.log('Welcome!\n');
            console.log('Please input your number(%d):\n', i);
            const input = scanf('%s');

            function judge(input) {
                const inputs = Array.from(input);

                for (let input of inputs) {
                    if (inputs.indexOf(input) === inputs.lastIndexOf(input)) {
                        return true;
                    }
                }
            }

            if (!judge(input)) {
                console.log('Cannot input duplicate numbers!\n');
                console.log('Please input your number(%d):\n', i);
                const input = scanf('%s');
            }

            const compareNumber = CompareNumber.guessNumber(input, answer);
            console.log(compareNumber);

            if (compareNumber === '4A0B') {
                console.log('Congratulations!');
                return;
            }

            if (i === 1)
                console.log("Game Over");
        }

    }
    
}

module.exports = Main;
