$(document).ready(function () {
// $('input').each(function(){
//   if($(this).val() == ''){
//     $element = $(this)
//     var $label = $("label[for='"+$element.attr('id')+"']")
//   }
// })
var rows = 7; //need to set this equal to what the user entered --> tried $('.rowx').val
var columns = 5; //need to set this equal to what the user entered --> tried $('.rowy').val
//Note that you can manually change the rows/columns variables (just set them to numbers) and it will work --try changing the rows and columns to 4 and 6
var $row = $("<div/>", { //add the div for the rows
    class:'row'
});
var $square = $("<div/>", { //add the div for the squares
    class:'square'

});

// $(document).ready(function () {
  //Watches for a click from the submit button
  $('#submit').on('click', function(){
    console.log("create grid was clicked");

    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) { //we want to append until i is no longer less than the number of columns the user put in
        $row.append($square.clone()); //add columns to rows!clone() is pretty cool! It makes a copy of the square so we don't move it from where it was!
    }
    //clone the temp row object with the columns to the container
    for (var i = 0; i < rows; i++) { //we want to append until i is no longer less than the number of rows the user put in
        $("#container").append($row.clone()); //then append all of the rows (with their added columns) to the container
        console.log("we have lots of magenta squares now! This message prints equal to the number of rows! Pretty cool, huh?");
    }
  });
  $('#container').on('click', function(){
    console.log("container clicked");
    $('#container').find('$square').spin({left: 250}, 'slow'); //supposed to animate but getting an error - need to fix
  });
});
//Note that you can manually change the rows/columns variables (just set them to numbers) and it will work
