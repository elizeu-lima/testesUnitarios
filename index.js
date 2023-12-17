exports.soma = function(a, b){
    if(typeof a === 'numer' && typeof b === 'number'){
        return a + b;
    }else{
        throw new Error("Incorrect data type")
    }
}

exports.subtracao = function(a, b){
    return a - b;
}