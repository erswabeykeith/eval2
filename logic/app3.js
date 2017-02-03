//create an array of first names and an array of last names
var firstNames = ["Stella", "Java", "Mitzi", "Ozzie", "Luna"];
var lastNames = ["Skater", "Lava", "Kitty", "Aussie", "Cat"];

// console.log(firstNames);
// console.log(lastNames);

//make a random number generator to assign numbers to each name

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

for(var i = 0; i < 10; i++){
  var fullNames = [];
  var newName = (randomFirst(firstNames) + " " + randomLast(lastNames));
console.log(newName);

}
