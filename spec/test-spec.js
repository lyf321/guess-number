const CompareNumber = require('../main/models/CompareNumber');

describe('guessNumber', () => {

    it('print correct text', () => {
        const randomNumber = '1234';
        const guess = '1234';
        expect(CompareNumber.guessNumber(randomNumber, guess)).toBe('4A0B');
    });

    it('print correct text', () => {
        const randomNumber = '1234';
        const guess = '4321';
        expect(CompareNumber.guessNumber(randomNumber, guess)).toBe('0A4B');
    });

    it('print correct text', () => {
        const randomNumber = '1234';
        const guess = '1255';
        expect(CompareNumber.guessNumber(randomNumber, guess)).toBe('2A0B');
    });

});