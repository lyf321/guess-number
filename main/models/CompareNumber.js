class CompareNumber {

    static guessNumber(input, answer) {
        
        const inputs = Array.from(input);
        const answers = Array.from(answer);

        const countB = inputs.map((input, index) => answers[index] != input && answers.some(ran => ran === input ? 1 : 0))
            .reduce((pre, next) => pre + next);
        const countA = inputs.map((input, index) => answers[index] === input && answers.some(ran => ran === input ? 1 : 0))
            .reduce((pre, next) => pre + next);

        return `${countA}A${countB}B`
    }

    
    
    /* static guessNumber(input, answer) {

     const inputs = Array.from(input);
     const answers = Array.from(answer);
     const rightArray = inputs.filter(input => answers.some(answer => input === answer));

     const values = rightArray.map(b => {
     if(answers.indexOf(b) === inputs.indexOf(b)) {
     return 'A';
     } else {
     return 'B';
     }
     });

     const countA = values.filter(value => value === 'A').length;
     const countB = values.length - countA;

     return `${countA}A${countB}B`

     }*/
}
module.exports = CompareNumber;