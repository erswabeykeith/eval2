var firstNames = ["Stella", "Java", "Mitzi", "Ozzie", "Luna"];
var lastNames = ["Skater", "Lava", "Kitty", "Aussie", "Cat"];

console.log(firstNames);
console.log(lastNames);

function fullName() {
  for(var i = 0; i < firstNames.length && i < lastNames.length; i++) {
  console.log(firstNames[i] + " " + lastNames[i])
}
}
fullName();
