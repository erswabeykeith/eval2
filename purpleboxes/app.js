$(document).ready(function(){
  $('#buttonOne').on('click', function(){
    var addDiv = $('<div></div>');
    var colorPurple = $(this).data('purple')
    addDiv.addClass('box');
    addDiv.addClass(colorPurple);
    $('.container').append(addDiv);
  })

});
