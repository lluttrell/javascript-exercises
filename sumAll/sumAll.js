const sumAll = function(start,end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    if (start < 0 || end < 0) return "ERROR"
    if (start > end) {
        temp = end;
        end = start;
        start = temp;
    }
    let result = 0; 
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
}

module.exports = sumAll
