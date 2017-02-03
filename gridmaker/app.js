$(document).ready(function () {
var rows = 5; //need to set this equal to what the user entered
var columns = 6; //need to set this equal to what the user entered
var $row = $("<div/>", { //add the div for the rows
    class:'row'
});
var $square = $("<div/>", { //add the div for the squares
    class:'square'

});

// $(document).ready(function () {
  //Watches for a click from the submit button
  $('#submit').on('click', function(){


    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) { //we want to append until i is no longer less than the number of columns the user put in
        $row.append($square.clone()); //add columns to rows!clone() is pretty cool! It makes a copy of the square so we don't move it from where it was!
    }
    //clone the temp row object with the columns to the container
    for (var i = 0; i < rows; i++) { //we want to append until i is no longer less than the number of rows the user put in
        $("#container").append($row.clone());
    }
  });
  $('#container').on('click', function(){
    $('#container').find('$square').animate({left: 250}, 'slow'); //supposed to animate but getting an error
  });
});
//Note that you can manually change the rows/columns variables and it will work
