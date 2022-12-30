
let list = document.querySelectorAll('.list');
for(let i=0; i < list.length; i++){
    list[i].onclick = function(){
    let j = 0;
    while(j<list.length){
        list[j++].className = 'list';
    }
    list[i].className = 'list active';
    }
}
let navContent = document.querySelector('.nav-content');
let menu = document.querySelector('.toggle-menu');
    menu.onclick = function(){
    menu.classList.toggle('active');
    navContent.classList.toggle('active');
    }



 