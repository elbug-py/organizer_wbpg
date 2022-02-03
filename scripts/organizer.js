state_arr = ['To-do', 'Ongoing', 'Finished', 'Dropped', 'Stand-by']


$(document).on('click', '#danger', function(){
    $(this).closest('li').fadeOut('slow', function() { $(this).remove(); });
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



$("#Username").text(localStorage.username);

$(document).on('click', '#submit', function(){
    if ($("#user").val() == '') {

        console.log(localStorage.username)
      } else {
        localStorage.username = $("#user").val()
        document.getElementById("Username").innerHTML = localStorage.username;
      }
    
      $("#user").val("");
});

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


let text = localStorage.getItem("users");
let obj = JSON.parse(text);

if (obj != null){
    
    users = obj
    console.log("entré", obj)
} else{
    users = {}
    console.log("Empty")
}




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



$(document).on('click', '#userLoad', function(){
    if ($("#user").val() == '') {

        console.log(localStorage.username)
    } else {

        let user = $("#user").val()
        let text = localStorage.getItem("users");
        let obj = JSON.parse(text);
        console.log("OBJETO AQUI: ",obj[user])
        console.log(Object.keys(obj))

        if(obj[user] != undefined){
            localStorage.username = $("#user").val()
            document.getElementById("Username").innerHTML = localStorage.username;
            for (state of state_arr){
                try{
                    let chores = obj[user][state]
                    console.log(chores)
                    for (chore of chores){
            
                        console.log("element: ",chore[0])
                        $("#"+state).append('<li>'+chore+'</li>');
                
                    }
        } catch (error){
            console.log(error)
        }
    }
    console.log("users:", obj)
    }
    else{
        alert("User Not Found, Please Enter A Valid User")
    }
    }
    $("#user").val("");
});




$(document).on('click', '#userSave', function(){

    if (users[$("#user").val()] == undefined){
        console.log('CREATE NEW')
        users[$("#user").val()] = {}
        let myJSON = JSON.stringify(users)
        localStorage.setItem("users", myJSON)
        console.log("users:", users)
    }
    else{
    console.log('OVERWRITE')
    users[$("#user").val()] ={}
    for (state of state_arr){
        try{
            ul = document.getElementById(state).children
    
            chore_arr = []
            for (li of ul){
                if (chore_arr.includes(li)== false){
                chore_arr.push(li.innerHTML)
                }
            }
        console.log("ANASHEI", chore_arr)
        users[$("#user").val()][state] = chore_arr
        } catch (error){
            console.log(error)
        }
    }

    let myJSON = JSON.stringify(users)
    localStorage.setItem("users", myJSON)
    console.log("users:", users)
    }

    localStorage.username = $("#user").val()
    document.getElementById("Username").innerHTML = localStorage.username;
});


$(document).on('click', '#userDelete', function(){

    if (users[$("#user").val()] == undefined){
        alert("User Not Found, Please Enter A Valid User")
    }
    else{
    console.log('AAAAAAAAAA')
    delete users[$("#user").val()];
    let myJSON = JSON.stringify(users);
    localStorage.setItem("users", myJSON);
    console.log("users:", users);
    }
});
