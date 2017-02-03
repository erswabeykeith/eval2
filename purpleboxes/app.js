$(document).ready(function(){ //when the document is ready, do this function
  $('#buttonOne').on('click', function(){ //when the buttonone id is clicked, do this function
    setInterval(function timing(){ //interval makes it wait 2.5 seconds before doing anything
      //Let's add a purple square to the DOM
      var addDiv = $('<div></div>'); //add a new div
      var colorPurple = $(this).data('purple') //this makes it purple!
      addDiv.addClass('box'); //add a class of box to our div
      addDiv.addClass(colorPurple); //be sure to add the color purple!
      $('.container').append(addDiv); //add the purple square to the container
    }, 2500); //interval time of 2.5 sec
  });
  $('#buttonTwo').on('click', function(){ //When buttonTwo is clicked, do this functon
    setInterval(function timing2(){ //another set interval to wait 3 second
      $('.container').remove(); //remove everything in the container (all of our purple boxes)
    }, 3000); //interval time of 3 sec
  });
}); //end document ready
