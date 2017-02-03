lineLength = function(a, b, a1, b1){ //this is our handy math function
  return Math.sqrt((a -= a1) * a + (b -= b1) * b);
};//this is a declaration so we should load it first!
console.log(lineLength(0, 4, 4, 4)); //4
console.log(lineLength(0, 0, 4, 0)); //4
console.log(lineLength(4, 4, 4, 0)); //4
console.log(lineLength(0, 4, 0, 0)); //4
//hmmm all of these values equal four
//
function isSquare(0, 4, 4, 4, 4, 0, 0, 0) {
  //a square is equal lengths on all sides so we need to check and see if all sides(lines) are equal to each other
  if(lineLength(a, b, a1, b1) === lineLength(a1, b1, a2, b2) &&
  lineLength(a2, b2, a3, b3) === lineLength(a3, b3, a, b) &&
  lineLength(a3, b3, a, b) === lineLength(a2, b2, a3, b3) &&
  lineLength(a1, b1, a2, b2) === lineLength(a, b, a1, b1)){
    return true; //if they are all equal, the function will return true
  } else { //if they aren't all equal to each other, the function will return false
  return false;
};
}
isSquare(0, 4, 4, 4, 4, 0, 0, 0);
