const main = require('../main/main');

describe('guessNumber', () => {

    it('print correct text',() => {
        const randomNumber = '1234';
        const guess = '1234';
        //expect(main.printResult(randomNumber,guess)).toEqual('4A0B');
        expect(main(randomNumber,guess)).toBe('4A0B');
    });
    
});