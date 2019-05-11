const ftoc = function(fTemp) {
  let cTemp = (fTemp-32)/1.8000;
  return +cTemp.toFixed(1);
}

const ctof = function(cTemp) {
let fTemp = 1.8000*cTemp+32;
return +fTemp.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
