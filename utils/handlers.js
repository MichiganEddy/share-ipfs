'use strict';

let logResult = function(from){
    return function(res){
        console.log(`Logging For: ${from.name}\n--RESULT: ${res}`);
    }
}


module.exports = {
    
        logResult: logResult
    }
