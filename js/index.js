// Mouseover nav anchors
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', event => event.target.style.color = 'blue');
nav.addEventListener('mouseout', event => event.target.style.color = 'black');

// Keydown background change on "Enter" key press
container = document.querySelector('.container')
window.addEventListener('keydown', event =>{
    if (event.keyCode === 13) {
    
        document.body.style.background = 'lightblue';   
    }
    window.addEventListener('keyup', () => document.body.style.background = '');  
})

// Wheel switches 'fun bus' color
const funBus = document.querySelector('.logo-heading');
document.addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        funBus.style.color = 'violet';
    } else if (event.deltaY < 0) {
        funBus.style.color = 'red';
    }  
})

// Drag & Drop bus image to change text below it
const busImg = document.querySelector('.intro > img')
busImg.addEventListener('dragstart', event => {
    const welcome = document.querySelector('.intro > h2')
    welcome.textContent = `OH GOD PLEASE HELP!`
    event.target.addEventListener('dragend', () => welcome.textContent = `Thanks for dropping me`)
});

// Load text in header 
window.addEventListener('load', () => funBus.textContent = `${funBus.textContent}... Has Loaded`)

// Focus
navAnchors = Array.from(document.querySelectorAll('.nav > a'));
navAnchors.forEach(el => el.addEventListener('focus', event => {
    let savedTag = event.target.textContent;
    event.target.textContent = `CLICKED`;
    event.target.addEventListener('blur', () => event.target.textContent = savedTag);

}))

// Resize window to mobile background change

window.addEventListener('resize', event =>{
    if (window.innerWidth <= 500) {
        document.body.style.background = 'antiquewhite';
    } else if (window.innerWidth <= 800) {
        document.body.style.background = 'powderblue';
    } else {
        document.body.style.background = '';
    }
        
});

// scroll
window.addEventListener('scroll', event =>{
    funBus.textContent = `Fun Bus is scrolling`
    setInterval(function() {
        funBus.textContent = `Fun Bus stopped scrolling`
    }, 300)
});

// Select
