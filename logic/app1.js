
var numArray = [4, 56, 7, 101, 99, 43, 2, 7, 6, 6, 80]
function getMinMax(array){
  var sum = Math.max.apply(Math,array) + Math.min.apply(Math,array);
  console.log(sum);
  return sum;
}
getMinMax(numArray);
