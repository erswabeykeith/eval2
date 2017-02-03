
var numArray = [4, 56, 7, 101, 99, 43, 2, 7, 6, 6, 80]
function getMinMax(array){
  //get the maximum value and the minimum value and add them toegther and store them
  var sum = Math.max.apply(Math,array) + Math.min.apply(Math,array);
  console.log(sum);
  return sum; //return the value we get
}
getMinMax(numArray); //Let's call our new function!
