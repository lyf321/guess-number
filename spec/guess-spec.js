const Guess = require('../main/models/Guess');
const AnswerGenerator = require('../main/models/AnswerGenerator');


describe('Guess', () => {

    it('should print correct XAXB',() => {
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        const result = Guess.guess('1234');
        expect(result).toEqual('4A0B')
    })
    
})
