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
        $(this).closest('li').fadeOut('slow', function() { $(this).remove(); });
        $("#"+state_arr[idx]).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button><button class="btn btn-warning btn-xs" id="left"><</button><button class="btn btn-warning btn-xs" id="right">></button></li>');

    }
    else{
        $(this).fadeOut('slow', function() { $(this).hide; });
    }
    
});

$(document).on('click', '#left', function(){
    let state = $(this).closest('ul').attr('id');
    let idx = state_arr.indexOf(state) - 1;
    let chore = $(this).closest("li").text().slice(0,-3);
    if ( idx >= 0){
        $(this).closest('li').fadeOut('slow', function() { $(this).remove(); });
        $("#"+state_arr[idx]).append('<li>'+chore+'<button class="btn btn-danger btn-xs" id="danger">x</button><button class="btn btn-warning btn-xs" id="left"><</button><button class="btn btn-warning btn-xs" id="right">></button></li>');

    }
    else{
        $(this).fadeOut('slow', function() { $(this).hide; });
    }
    
});




/*$(document).on('click', '#user-btn', function(){
    if (localStorage.username) {
        document.getElementById("demo").innerHTML = localStorage.username;
      } else {
        localStorage.username = $(this).siblings('input').val();
      }
    
    console.log(user)
    $(this).siblings('input').val("");
});*/

$("#Username").text(localStorage.username);

function changeUser(){
    if ($("#user").val() == '') {

        console.log(localStorage.username)
      } else {
        localStorage.username = $("#user").val()
        document.getElementById("Username").innerHTML = localStorage.username;
      }
    
      $("#user").val("");
}


$(document).on('click', '#save', function(){

    let state = $(this).siblings('ul').attr('id');
    ul = document.getElementById(state).children
    
    chore_arr = []
    for (li of ul){
        if (chore_arr.includes(li)== false){
        chore_arr.push(li.innerHTML)
        }
    }

    if (chore_arr.length >= 1){
    let myJSON = JSON.stringify(chore_arr)
    localStorage.setItem(state, myJSON);
    }
});


$(document).on('click', '#load', function(){

    let state = $(this).siblings('ul').attr('id');
    let text = localStorage.getItem(state);
    let obj = JSON.parse(text);

    for (chore of obj){
        $("#"+state).append('<li>'+chore+'</li>');
        }
    


});


$(document).on('click', '#clear', function(){

    let state = $(this).siblings('ul').attr('id');
    localStorage.setItem(state, '');

});


for (state of state_arr){
    try{
    let text = localStorage.getItem(state);
    let obj = JSON.parse(text);
    for (chore of obj){
        $("#"+state).append('<li>'+chore+'</li>');
        }
    } catch (error){
        console.log(error)
    }
}