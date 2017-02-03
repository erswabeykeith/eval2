$(document).ready(function(){
  $('#buttonOne').on('click', function(){
    setInterval(function timing(){
      var addDiv = $('<div></div>');
      var colorPurple = $(this).data('purple')
      addDiv.addClass('box');
      addDiv.addClass(colorPurple);
      $('.container').append(addDiv);
    }, 2500);
  });
  $('#buttonTwo').on('click', function(){
    setInterval(function timing2(){
      $('.container').remove();
    }, 3000);
  });
});
