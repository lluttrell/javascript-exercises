const reverseString = function(inputString) {
    let outputString = "";
    for (let i = inputString.length - 1; i >= 0 ; i--){
        outputString += inputString[i];
    }
    return outputString;
}

module.exports = reverseString
