function scoreCalculator(pinsKnocked){
    if(pinsKnocked.length>21){ throw Error('Invalid Input');
    }
    else{
        let score =0;
        for(let index=0;index<20;index++){
            
            if(pinsKnocked[index] === 10){
                score = score +10;
                if(index<pinsKnocked.length-2 )
                    score=score+pinsKnocked[index+1]+pinsKnocked[index+2];
                if(index === 18)
                    index=index+2;
            }
            else if(index<pinsKnocked.length-2 && (pinsKnocked[index]+pinsKnocked[index+1])===10){
                score=score+10+pinsKnocked[index+2];
                index++;
            }
            else{
                score = score+ pinsKnocked[index]+pinsKnocked[index+1];
                index++;
            }
        }
        return score;
    }

}    
module.exports = {scoreCalculator}; 
        
console.log(scoreCalculator([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));