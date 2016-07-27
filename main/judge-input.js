class judgeinput {

    static judgeinput(input) {
        const inputs = Array.from(input);
        
        return inputs.every((digit, index, array) => {
            return (array.lastIndexOf(digit) === index) && input.length === 4;
        });
    }
}

module.exports = judgeinput;