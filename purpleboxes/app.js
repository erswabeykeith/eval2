$(document).ready(function(){ //when the document is ready, do this function
  $('#buttonOne').on('click', function(){ //when the buttonone id is clicked, do this function
    setInterval(function timing(){ //interval makes it wait 2.5 seconds before doing anything
      //Let's add a purple square to the DOM
      var addDiv = $('<div></div>');
      var colorPurple = $(this).data('purple')
      addDiv.addClass('box');
      addDiv.addClass(colorPurple);
      $('.container').append(addDiv); //add the purple square to the container
    }, 2500);
  });
  $('#buttonTwo').on('click', function(){ //When buttonTwo is clicked, do this functon
    setInterval(function timing2(){ //another set interval to wait 3 second
      $('.container').remove(); //remove everything in the container (all of our purple boxes)
    }, 3000);
  });
}); //end document ready
