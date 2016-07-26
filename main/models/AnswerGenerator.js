class AnswerGenerator{
    
   static generate(){
       const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

       const result = [];
            for(var i = 0; i < 4 ; i ++) {
                var id = parseInt(Math.random()*numbers.length);
                result.push((numbers.splice(id,1))[0]);
            }

       return result;
    }
}

module.exports = AnswerGenerator;