
function submit(){

    let chore = document.getElementById('chore').value;
    var select = document.getElementById('state');
	var option = select.options[select.selectedIndex].text;
    var ul = document.getElementById(option);
    var li = document.createElement("li");
    let btn = document.createElement("button");
    let ulElem = document.getElementById(option);
    let nodes = ulElem.childNodes
    
    for (const li of nodes){
        if (li.nodeName != '#text'){
            if (li.innerHTML == chore + '<button>x</button>'){
                alert('This Chore Already Exists, Try Again')
                return false
            }
        console.log(li.innerHTML)
        }
    } 

    btn.appendChild(document.createTextNode('x'))
    li.appendChild(document.createTextNode(chore));
    li.appendChild(btn)
    ul.appendChild(li);
}

function remove(){
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





$(document).on('click', 'ul li button', function(){
    $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
});

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      submit()
    }
});