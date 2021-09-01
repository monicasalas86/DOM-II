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

// mousedown
const zoomImg = document.querySelectorAll('.img-content');

zoomImg.forEach(zoomImg => zoomImg.addEventListener('mousedown', function(event){
    event.target.style.width = '300px';
    setTimeout(function(){
        event.target.style.width = '';
    },300)
}, false));

//keydown
body.addEventListener('keydown', function(){
    body.style.background = '';
})

// click
const intro = document.querySelector('.intro');

intro.addEventListener('click', function(event){
    event.target.style.color = 'darkslategrey';
})

// mousemove
const midText = document.querySelectorAll('.text-content');

midText.forEach(midText => midText.addEventListener('mousemove', function(event){
    event.target.style.color = 'darkolivegreen';
}))

// resize

window.addEventListener('resize', function(event){
    console.log('window has been resized');
})

// load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
})

// mouseup

const destination = document.querySelector('.content-destination');

destination.addEventListener('mouseup', function(event){
    event.target.style.color = 'sienna';
})