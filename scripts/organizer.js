
function submit(){

    let chore = document.getElementById('chore').value;
    var select = document.getElementById('state');
	var option = select.options[select.selectedIndex].text;
    var ul = document.getElementById(option);
    var li = document.createElement("li");
    let btn = document.createElement("button");
    btn.className = "btn btn-danger btn-xs"
    btn.id = "danger"
    let ulElem = document.getElementById(option);
    let nodes = ulElem.childNodes
    
    for (const li of nodes){
        if (li.nodeName != '#text'){
            if (li.innerHTML == chore + '<button class="btn btn-danger btn-xs" id="danger">x</button>'){
                alert('This Chore Already Exists, Try Again')
                return false
            }
        console.log(li.innerHTML)
        }
    } 

    btn.appendChild(document.createTextNode('x'))
    li.appendChild(document.createTextNode(chore));
    li.appendChild(btn)
    $("#"+option).prepend(li);
    //ul.appendChild(li);
}


$("#submit").on('click',function(){
    submit();
  });


/*function remove(){
    let chore = document.getElementById('chore').value;
    let select = document.getElementById('state_del');
	let option = select.options[select.selectedIndex].text;
    let ulElem = document.getElementById(option);
    let nodes = ulElem.childNodes
    
    for (const li of nodes){
        if (li.nodeName != '#text'){
            if (li.innerHTML == chore + '<button>x</button>'){
                ulElem.removeChild(li)
                return true
            }
        }
    } 
    alert('Item not found, Try Again')
}
*/




$(document).on('click', '#danger', function(){
    $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
});

$(document).on('click', '#add', function(){
    submit();
});

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      submit()
    }
});