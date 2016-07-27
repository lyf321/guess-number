const Guess = require('../main/models/Guess');
const AnswerGenerator = require('../main/models/AnswerGenerator');

describe('Guess', () => {

    it('should print correct XAXB',() => {
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        const input = '1234';
        const result = Guess.guess(input);
        expect(result).toEqual('4A0B');
    });
});
