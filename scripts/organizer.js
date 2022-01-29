
$("#submit").on('click',function(){
    submit();
  });

$(document).on('click', '#danger', function(){
    $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
});

$(document).on('click', "#add", function(){
    let state = $(this).closest('div').siblings('ul').attr('id');
    let chore = $(this).siblings('input').val(); 
    $("#"+state).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button></li>');
    $(this).siblings('input').val("");
});

