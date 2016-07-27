const AnswerGenerator = require('../main/models/AnswerGenerator');
const CompareNumber = require('../main/models/CompareNumber');
const Input = require('./input');
const judgeInput = require('./judge-input');
const judgeOutput = require('./judge-output');
var scanf = require('scanf');

class Main {

    main() {
        console.log('Welcome!\n');
        const answer = AnswerGenerator.generate();
        console.log(`answer:${answer}`);
        for (let i = 6; i > 0; i--) {
            
            console.log(`Please input your number(${i}):`);
            const input = Input.input();
            
            if (!judgeInput.judgeinput(input)) {
                console.log('Cannot input duplicate numbers!\n');
                i++;
            }
            else {
                const compareNumber = CompareNumber.guessNumber(input, answer);
                console.log(compareNumber);
                if(judgeOutput.judgeoutput(compareNumber)){
                    console.log('Congratulations!');
                    return;
                }

                if (i === 1 && !judgeOutput.judgeoutput(compareNumber)){
                    console.log("Game Over");
                }
            }
        }
    }
}



module.exports = Main;
