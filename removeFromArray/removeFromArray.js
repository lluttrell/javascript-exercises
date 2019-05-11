const removeFromArray = function() {
     let inputArray = arguments[0];
     let removeList = Array.prototype.slice.call(arguments,1);
     let filteredList = [];
     for (let element of inputArray) {
         if (!(removeList.includes(element))) {
             filteredList.push(element);
         }
     }
     return filteredList;
}

module.exports = removeFromArray
