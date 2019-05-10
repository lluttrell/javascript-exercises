const repeatString = function(inputString,repeatCount) {
    if (repeatCount < 0) return "ERROR";
    let outputString = "";
    for (let i = 0; i < repeatCount; i++) {
        outputString += inputString;
    }
    return outputString;
}

module.exports = repeatString
