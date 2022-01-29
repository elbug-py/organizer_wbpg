state_arr = ['To-do', 'Ongoing', 'Finished', 'Dropped', 'Stand-by']


$("#submit").on('click',function(){
    submit();
  });

$(document).on('click', '#danger', function(){
    $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
});

$(document).on('click', "#add", function(){
    let state = $(this).closest('div').siblings('ul').attr('id');
    let chore = $(this).siblings('input').val(); 
    $("#"+state).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button><button class="btn btn-warning btn-xs" id="left"><</button><button class="btn btn-warning btn-xs" id="right">></button></li>');
    $(this).siblings('input').val("");
});

$(document).on('click', '#right', function(){
    let state = $(this).closest('ul').attr('id');
    let idx = state_arr.indexOf(state) + 1;
    let chore = $(this).closest("li").text().slice(0,-3);
    if ( idx < state_arr.length){
        console.log(chore)
        $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
        $("#"+state_arr[idx]).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button><button class="btn btn-warning btn-xs" id="left"><</button><button class="btn btn-warning btn-xs" id="right">></button></li>');

    }
    else{
        //$(this).fadeOut('slow', function() { $(this).hide; });
        console.log('te pasaste')
    }
    
});

$(document).on('click', '#left', function(){
    let state = $(this).closest('ul').attr('id');
    let idx = state_arr.indexOf(state) - 1;
    let chore = $(this).closest("li").text().slice(0,-3);
    if ( idx >= 0){
        console.log(chore)
        $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
        $("#"+state_arr[idx]).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button><button class="btn btn-warning btn-xs" id="left"><</button><button class="btn btn-warning btn-xs" id="right">></button></li>');

    }
    else{
        //$(this).fadeOut('slow', function() { $(this).hide; });
        console.log('te pasaste')
    }
    
});