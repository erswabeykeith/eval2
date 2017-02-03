var rows = 7;
var columns = 6;
var $row = $("<div/>", {
    class:'row'
});
var $square = $("<div/>", {
    class:'square'
});

$(document).ready(function () {
  $('#submit').on('click', function(){


    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the container
    for (var i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
  });
});
