const AnswerGenerator = require('../main/models/AnswerGenerator');
const Main = require('../main/main');
const Input = require('../main/input');
const judgeInput = require('../main/judge-input')

describe('main', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        
    });

    it('should print Congratulations when correct answer', () => {
        spyOn(Input, 'input').and.returnValue('1234');
        spyOn(console, 'log');
        const run = new Main();
        run.main();
        expect(console.log).toHaveBeenCalledWith('4A0B');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    })

    it('should print Game Over when fault answer', () => {
        spyOn(Input, 'input').and.returnValue('4321');

        spyOn(console, 'log');
        const run = new Main();
        run.main();
        expect(console.log).toHaveBeenCalledWith('0A4B');

        expect(console.log).toHaveBeenCalledWith('Game Over');
    })

    it('should print Game Over when fault', () => {
        spyOn(Input, 'input').and.returnValue('1243');

        spyOn(console, 'log');

        const run = new Main();
        run.main();

        for (let i = 6; i > 0; i--) {
           expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
           expect(console.log).toHaveBeenCalledWith('2A2B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over');

    })
/*    
    it('should print Cannot input duplicate numbers',() => {
        
        spyOn(Input, 'input').and.returnValue('1244');
        
        spyOn(console, 'log');

        const run = new Main();
        run.main();
        
       /!* expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');*!/
        expect(console.log).toHaveBeenCalledWith('');

    })*/
  
})

describe('judge-input',() => {
    it('print boolean',() => {
        expect(judgeInput.judgeinput('124')).toBe(false);
    })
})
