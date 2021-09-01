// Your code goes here

// mouseover
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(navLink => navLink.addEventListener('mouseover', function(event){
    event.target.style.color = 'lightblue';
    setTimeout(function(){
        event.target.style.color = '';
    }, 300);
}, false));

// wheel
const header = document.querySelector('header')

header.addEventListener('wheel', function(){
    header.style.background = 'lightgray';
})

// keyup
const body = document.querySelector('body');

body.addEventListener('keyup', function(){
    body.style.background = 'thistle';
})