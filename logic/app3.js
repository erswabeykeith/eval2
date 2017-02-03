//create an array of first names and an array of last names
var firstNames = ["Stella", "Java", "Mitzi", "Ozzie", "Luna"];
var lastNames = ["Skater", "Lava", "Kitty", "Aussie", "Cat"];

// console.log(firstNames);
// console.log(lastNames);

//make a random number generator to randomly assign numbers to each name

function randomFirst(array) {
    var i = Math.floor(Math.random() * array.length);
    // console.log(array[i]);
    return array[i];
}

function randomLast(array2){
    var i = Math.floor(Math.random() * array2.length);
    // console.log(array2[i])
    return array2[i];
}

// console.log(randomFirst(firstNames));
// console.log(randomLast(lastNames));

//Make a loop to run through the function 10 times
for(var i = 0; i < 10; i++){
  var fullNames = [];
  var newName = (randomFirst(firstNames) + " " + randomLast(lastNames)); //our new name is the sum of the two functions we just ran
  console.log(newName);
}
//Checking for duplicates is not fully functional but everything else works
  //Check to see if the newName is equal to any of the existing names
  // function checkDuplicate(){
  // for(var i = 0; i < fullNames.length; i++){
  //   if(newName === fullNames[i]){ //if the newName is equal to any of the names already in the array, we will need to call the function again to generate a new name
  //     console.log("duplicate name");
          // randomFirst(firstNames) + " " + randomLast(lastNames)
  //   } else {  //otherwise, we can push that new name to the fullNames array
  //     fullNames.push(newName);
  //     console.log(newName);
  //   }
  // }
// }
