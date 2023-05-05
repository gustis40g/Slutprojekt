$('.switch3 input').on('change', function(){
    var dad = $(this).parent();
    if($(this).is(':checked'))
      dad.addClass('switch3-checked');
    else
      dad.removeClass('switch3-checked');
  });